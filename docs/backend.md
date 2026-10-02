# Backend, database and images

## How it fits together

```
Browser ──► Netlify CDN ──► Netlify Function "server" (Nuxt / Nitro)
                              ├─ renders every page on request
                              └─ /api/*  ── the backend ──► Azure Cosmos DB
Browser ──────────────────────────────────────────────────► Azure Blob Storage (images)
```

- **Frontend** (`pages/`, `components/`, `composables/`) never talks to the database.
  It calls `/api/*` only. During server rendering those calls run in-process, so
  there is no extra network hop.
- **Backend** (`server/`) is TypeScript running in a Netlify Function. It is the only
  code that holds the Cosmos connection string.
- **Images** are public website assets, so the browser loads them straight from the
  Blob Storage container. They never pass through the backend.

Netlify Functions run JavaScript/TypeScript or Go, not Python or .NET, which is why
the backend is TypeScript.

## API

| Method | Path | Returns |
|---|---|---|
| GET | `/api/site` | Settings, tabs with category counts, regions, destinations, journal categories |
| GET | `/api/listings?section=&featured=true&destination=` | Listing cards |
| GET | `/api/listings/:section/:slug` | One listing, its destination, three related listings |
| GET | `/api/destinations` | Destination cards |
| GET | `/api/destinations/:slug` | One destination, its listings, three others |
| GET | `/api/articles` | Journal stories (without the body), newest first |
| GET | `/api/articles/:slug` | One story and three others |
| GET | `/api/faqs` | General FAQs and each destination's FAQs |
| GET | `/api/testimonials` | Testimonials |
| POST | `/api/enquiries` | Saves an enquiry → `201 { ok: true }`, or `422` with field errors |

Content is read from Cosmos in one pass and kept in memory for
`NUXT_CONTENT_CACHE_SECONDS` (default 60). Edits made in the database appear on the
site within that time. Set it to `0` to read the database on every request.

## Cosmos DB layout

One database (`pravaah`) with **1000 RU/s of manual throughput, shared by all five
containers**. The containers have no throughput of their own. The definitions are in
`server/database/schema.ts`.

| Container | Partition key | One document per | `id` |
|---|---|---|---|
| `listings` | `/section` | stay, experience, expedition or event | slug |
| `destinations` | `/id` | destination | slug |
| `articles` | `/id` | journal story | slug |
| `siteContent` | `/type` | kind of site content (below) | fixed |
| `enquiries` | `/phone` | **phone number** | phone in E.164, e.g. `+919205747247` |

`siteContent` holds these documents:
- `settings`: brand, contact details, home page copy, and the form options (budgets, traveller counts, trip types)
- `section-stays`, `section-experiences`, `section-expeditions`, `section-events`: each tab's title, intro, cover image and categories
- `regions`, `journal-categories`, `faqs`, `testimonials`: each holds an ordered `items` list

### Editing content

Edit documents in **Azure portal → Cosmos account → Data Explorer**.
- `order` sets the position within a list (lower comes first).
- `hidden: true` keeps a listing in the database but off the site. The Offbeat
  Experiences are stored this way for now.
- A listing's `category` must be one of the category slugs in its `section-…` document.
- `places` (optional, on listings) overrides the place names the location search uses.
- Image fields take an image reference, explained under "Images" below.

### Enquiries

All enquiries from one phone number go into one document. Different ways of writing
the same number all count as one: `98765 43210`, `09876543210` and `+91-98765-43210`
are all stored under `+919876543210`.

```json
{
  "id": "+919876543210",
  "phone": "+919876543210",
  "name": "latest name given",
  "email": "latest email given",
  "enquiryCount": 2,
  "firstEnquiryAt": "2026-10-02T09:15:00.000Z",
  "lastEnquiryAt": "2026-10-05T11:02:00.000Z",
  "enquiries": [
    {
      "id": "uuid",
      "receivedAt": "…",
      "status": "new",
      "name": "…",
      "email": "…",
      "phone": "as typed",
      "destination": "Goa",
      "travelFrom": "2026-12-10",
      "travelTo": "2026-12-15",
      "travellers": "2 travellers",
      "tripType": "",
      "budget": "…",
      "message": "",
      "source": "popup:/destinations/goa"
    }
  ]
}
```

New enquiries are appended with a single atomic patch, so two enquiries arriving at
the same moment cannot overwrite each other. The backend re-validates every field
(the same rules as the form, in `shared/enquiry.ts`), caps field lengths, and
silently drops submissions that fill the hidden `website` honeypot field.

## Images

Every image is a *set*: `<path>-640.webp`, `-1280.webp`, `-1920.webp` and
`-placeholder.webp`, stored in a public-read Blob container (default name `images`).

An image field in the database holds a **reference**, not a URL:

| Reference | Resolves to (once `NUXT_PUBLIC_IMAGE_BASE_URL` is set) |
|---|---|
| `stays/naini-retreat-nainital/cover` | `<base>/stays/naini-retreat-nainital/cover-1280.webp` … |
| `photo-1610715936287-6c2ad208cdbf` (Unsplash id) | `<base>/library/photo-1610715936287-6c2ad208cdbf-1280.webp` … |
| `/images/stays/x/cover` (older form) | `<base>/stays/x/cover-1280.webp` … |

Add `@x,y` to any reference (fractions from 0 to 1) to keep that point in frame when
the image is cropped. **`NUXT_PUBLIC_IMAGE_BASE_URL` must be set** (in `.env` locally and in
Netlify): the photos exist only in Storage, not in the repo.

**Adding photos for a listing:**
1. `npm run images -- "<folder with Cover Photo/ and Gallery/>" stays/<slug>` writes the sets into `public/images/`
   (a git-ignored staging folder).
2. `npm run images:upload` pushes them to Storage. Then delete them from `public/images/`.
3. Put the printed references (e.g. `stays/<slug>/cover`) in the listing's `image` / `gallery` in Cosmos.

## One-time setup (when the connection strings are ready)

1. **Cosmos DB**: create an Azure Cosmos DB for NoSQL account with **Provisioned throughput**
   capacity mode (not Serverless, which has no RU/s setting). Apply the **free-tier discount**
   if offered: it covers 1000 RU/s and 25 GB per subscription at no cost.
2. **Storage**: in the storage account, turn on **Configuration → Allow Blob anonymous access**.
   The upload script creates the `images` container with blob-level public read access.
3. Copy `.env.example` to `.env` and fill in `NUXT_COSMOS_CONNECTION_STRING` and
   `AZURE_STORAGE_CONNECTION_STRING`.
4. `npm run db:setup` creates the database with **1000 RU/s of shared throughput** (manual)
   and the five containers inside it, if they are missing. It never touches documents, and
   re-running it sets an existing database back to 1000 RU/s. To use a different value, set
   `COSMOS_THROUGHPUT` (min 400, steps of 100) or change `DATABASE_THROUGHPUT` in `server/database/schema.ts`.
5. `npm run images:upload` uploads every image and prints the container URL.
6. In **Netlify → Site configuration → Environment variables**, set:
   - `NUXT_COSMOS_CONNECTION_STRING`, marked as a secret
   - `NUXT_COSMOS_DATABASE` = `pravaah`
   - `NUXT_PUBLIC_IMAGE_BASE_URL` = the URL from step 5
   - `NUXT_PUBLIC_SITE_URL`
   - optionally `NUXT_CONTENT_CACHE_SECONDS`

   Then redeploy.

The site cannot run without the database: if `NUXT_COSMOS_CONNECTION_STRING` is missing,
pages answer 503 and enquiries are refused rather than silently lost.

## Content and backups

**Cosmos DB is the only copy of the content.** The `.ts` content files the database was
first loaded from have been removed from the repo. Edit content in Data Explorer. For safety,
check the account's backup policy (**Cosmos account → Backup & Restore**). The default periodic
backup keeps two copies, four hours apart. Switch to **continuous backup** if you want
point-in-time restore after a bad edit.

## Local development

`npm run dev` needs a `.env` with the Cosmos connection string and the image base URL. It
uses the same database as production unless you point `NUXT_COSMOS_DATABASE` at a copy.
