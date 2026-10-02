/**
 * Creates the Cosmos DB database and its five containers if they are missing,
 * and keeps the database's shared throughput at the configured RU/s.
 * Never reads or writes documents — content is edited in the database itself.
 *
 *   npm run db:setup
 *
 * Needs NUXT_COSMOS_CONNECTION_STRING (and optionally NUXT_COSMOS_DATABASE) in .env.
 *
 * Throughput: the database gets 1000 RU/s of shared (manual) throughput, used by all
 * five containers — see DATABASE_THROUGHPUT in server/database/schema.ts. Re-running
 * brings an existing database back to that value. Needs a provisioned-throughput
 * account; serverless accounts have no RU/s setting.
 */
import { CosmosClient } from '@azure/cosmos'
import { COSMOS_CONTAINERS, DATABASE_THROUGHPUT, DEFAULT_DATABASE } from '~/server/database/schema'

const connectionString = process.env.NUXT_COSMOS_CONNECTION_STRING
const databaseId = process.env.NUXT_COSMOS_DATABASE || DEFAULT_DATABASE
const throughput = Number(process.env.COSMOS_THROUGHPUT || DATABASE_THROUGHPUT)

if (!connectionString) {
  console.error('Set NUXT_COSMOS_CONNECTION_STRING in .env first (Cosmos account → Settings → Keys).')
  process.exit(1)
}

if (!Number.isInteger(throughput) || throughput < 400 || throughput % 100 !== 0) {
  console.error(`COSMOS_THROUGHPUT must be at least 400 and a multiple of 100 (got "${process.env.COSMOS_THROUGHPUT}").`)
  process.exit(1)
}

const client = new CosmosClient(connectionString)

let database
try {
  // Throughput only takes effect when the database is created; an existing one is adjusted below.
  ;({ database } = await client.databases.createIfNotExists({ id: databaseId, throughput }))
} catch (error) {
  if (/serverless/i.test(String((error as Error).message))) {
    console.error(
      'This Cosmos account is serverless, which has no RU/s setting. For 1000 RU/s, create the account with\n' +
        '"Provisioned throughput" capacity mode (and apply the free-tier discount if offered).'
    )
    process.exit(1)
  }
  throw error
}

// Bring an existing database to the configured shared throughput.
const { resource: offer } = await database.readOffer()
if (!offer) {
  console.warn(
    `Database "${databaseId}" was created without shared throughput, and that cannot be added afterwards.\n` +
      'Delete it (it holds no enquiries yet if this is a first run) and run db:setup again to get the shared RU/s.'
  )
} else if (offer.content?.offerAutopilotSettings) {
  console.warn(`Database "${databaseId}" uses autoscale; left as it is. Switch it to manual in the portal to use ${throughput} RU/s.`)
} else if (offer.content?.offerThroughput !== throughput) {
  await client.offer(offer.id).replace({
    ...offer,
    content: { ...offer.content, offerThroughput: throughput, offerIsRUPerMinuteThroughputEnabled: false }
  })
  console.log(`Throughput changed from ${offer.content?.offerThroughput} to ${throughput} RU/s.`)
}
console.log(`Database "${databaseId}" ready — ${throughput} RU/s shared by all containers.`)

for (const { id, partitionKey } of Object.values(COSMOS_CONTAINERS)) {
  await database.containers.createIfNotExists({ id, partitionKey: { paths: [partitionKey] } })
  console.log(`  container "${id}" (partition key ${partitionKey}) ready`)
}

console.log('Done.')
