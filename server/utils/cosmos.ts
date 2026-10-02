import { CosmosClient, type Container, type Database } from '@azure/cosmos'
import { COSMOS_CONTAINERS, type ContainerKey } from '~/server/database/schema'

/**
 * The one place the app talks to Cosmos DB. Only server code imports this —
 * the browser never sees the connection string; it calls /api/* instead.
 *
 * Configured with NUXT_COSMOS_CONNECTION_STRING and NUXT_COSMOS_DATABASE.
 * Without a connection string `getDatabase()` returns null, and content and
 * enquiries answer 503 — the site cannot run without its database.
 */
let database: Database | null | undefined

export const getDatabase = (): Database | null => {
  if (database !== undefined) return database
  const { cosmosConnectionString, cosmosDatabase } = useRuntimeConfig()
  database = cosmosConnectionString
    ? new CosmosClient(String(cosmosConnectionString)).database(String(cosmosDatabase))
    : null
  return database
}

export const getContainer = (key: ContainerKey): Container | null =>
  getDatabase()?.container(COSMOS_CONTAINERS[key].id) ?? null

/** Every document in a container. Content containers are small, so a full read is cheap. */
export const readAll = async (key: ContainerKey): Promise<Record<string, unknown>[]> => {
  const container = getContainer(key)
  if (!container) return []
  const { resources } = await container.items.readAll<Record<string, unknown> & { id: string }>().fetchAll()
  return resources
}

/** Cosmos errors carry the HTTP status in `code`. */
export const cosmosStatus = (error: unknown): number | undefined =>
  typeof error === 'object' && error !== null && 'code' in error ? Number((error as { code: unknown }).code) : undefined
