# Pravaah

> Journeys worth remembering.

A premium, static, SEO-first marketing site for **Pravaah**, a tour and travel studio planning custom journeys across India.

Built with **Nuxt 3 + TypeScript + Tailwind CSS**. Every route is prerendered to plain HTML — no backend, no database, and it runs entirely on a free hosting tier.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run generate     # static build -> .output/public
npm run preview      # serve the production build
npm run typecheck    # vue-tsc, no emit
```

Node 20.19 or newer is recommended (one transitive dependency asks for it).

---

## Deploying to Netlify

`netlify.toml` is already committed, so there is nothing to configure in the UI.

1. Push this folder to a GitHub repository.
   ```bash
   git init
   git add -A
   git commit -m "Pravaah launch site"
   git branch -M main
   git remote add origin https://github.com/<you>/pravaah.git
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Netlify reads `netlify.toml` — build command `npm run generate`, publish directory `.output/public`. Deploy.

   > `netlify.toml` pins `NITRO_PRESET = "static"`. Netlify detects Nuxt and otherwise injects
   > `NITRO_PRESET=netlify`, which switches Nitro to the `netlify-static` preset, writes the site to
   > `dist/` instead of `.output/public`, and can add a server function. Pinning the preset keeps the
   > build fully static and the output where `publish` expects it. Do not remove it — the deploy fails
   > with *"Deploy directory '.output/public' does not exist"*.

4. **Set the real site URL.** Site configuration → Environment variables:

   ```
   NUXT_PUBLIC_SITE_URL = https://your-domain.com
   ```

   This is what canonical URLs, OpenGraph tags, `sitemap.xml` and `robots.txt` are built from. Until it is set, they fall back to `site.url` in `data/site.ts`. Redeploy after changing it.

Vercel works identically — build `npm run generate`, output directory `.output/public`.

---

## Replacing the placeholder content

Nothing below requires touching a component.

| What | Where |
| --- | --- |
| Brand name, tagline, email, phone, **WhatsApp number**, address, socials | `data/site.ts` |
| Why-Pravaah blurbs, brand story, how-it-works steps, budget bands | `data/site.ts` |
| Destinations, seasons, FAQs, travel tips | `data/destinations.ts` |
| Tours, prices, itineraries, inclusions | `data/tours.ts` |
| Experience categories | `data/experiences.ts` |
| Testimonials | `data/testimonials.ts` |
| Blog articles | `data/blog.ts` |
| Site-wide FAQs | `data/faq.ts` |
| Colours, fonts, radii, shadows | `tailwind.config.ts` |
| Which sections are dark | `section-dark` / `section-forest` classes in `pages/` |
| Logo, symbol, favicon | `public/brand/*.svg` |

**Placeholders to replace before launch:** the phone number, WhatsApp number (`919000000000`), email, street address and the three social URLs — all in `data/site.ts`. Prices in `data/tours.ts` are indicative. Testimonials in `data/testimonials.ts` are written examples, not real customer feedback.

### Light and dark bands

The site alternates light and dark sections. Colours are **semantic tokens** backed by CSS variables, not fixed values:

| Token | Use |
| --- | --- |
| `canvas`, `canvas-alt` | page and alternate band backgrounds |
| `surface` | cards, form fields |
| `ink`, `ink-soft`, `ink-muted` | text, in three weights |
| `hairline` | borders and dividers |
| `accent` | clay highlights, eyebrows |
| `link` | inline links |

Adding `section-dark` or `section-forest` to a `<section>` reassigns those variables for everything inside it, so cards, headings, borders, buttons and form fields all flip automatically:

```html
<section class="section-dark py-20">…</section>
```

To make a band light again, drop the class. To change the dark palette globally, edit `.section-dark` in `assets/css/main.css` — every dark band follows.

Use the raw palette (`ivory-bright`, `charcoal`, `forest`, `clay`, `gold`) only where a colour must stay fixed regardless of the surface — text over a photograph, for example.

### Images

Every image is resolved through `composables/useImageSource.ts`. Today they are Unsplash photo ids served from the Unsplash CDN with `auto=format`, which delivers AVIF/WebP and the right size per breakpoint.

To move to your own photography, drop files into `public/images/` and change the reference in the data files:

```ts
image: 'photo-1598091383021-15ddea10925d'   // Unsplash CDN
image: '/images/kashmir-dal-lake.jpg'       // self-hosted — works with no other change
```

`AppImage.vue` is the only component that renders an `<img>`. It emits a responsive `srcset`, reserves layout space so CLS stays at zero, and blurs up from a 20px placeholder.

---

## Project structure

```
data/            all content, typed — the only files you edit to change copy
types/           content models (Destination, Tour, Article, …)
composables/     image URLs, SEO meta, JSON-LD, scroll reveal, enquiry submission
components/      AppHeader, AppFooter, PravaahLogo, cards, gallery, forms …
pages/           routes (see below)
server/routes/   sitemap.xml, robots.txt — generated from the data files
public/brand/    logo, symbol, favicon
```

### Routes

`/` · `/destinations` · `/destinations/[slug]` · `/tours` · `/tours/[slug]` · `/experiences` · `/about` · `/contact` · `/plan-my-trip` · `/faq` · `/blog` · `/blog/[slug]` · `/privacy-policy` · `/terms`

All 33 pages prerender at build time.

---

## SEO

- Unique title, meta description and canonical URL per page, via `usePageSeo()`.
- OpenGraph and Twitter card metadata, with the page's hero image as the share image.
- `sitemap.xml` and `robots.txt` generated from the data files — new tours and articles appear automatically.
- JSON-LD: `TravelAgency`, `WebSite`, `BreadcrumbList`, `TouristDestination`, `TouristTrip` (with `Offer`), `Article`, `FAQPage`.
- No `aggregateRating` or `Review` schema is emitted. The testimonials are placeholders, and publishing invented ratings as structured data would be misrepresentation. Add it once you have real, attributable reviews.

## Performance

- Fully static HTML, no server rendering at request time.
- Responsive `srcset` images from a CDN, lazy by default; only the hero is eager with `fetchpriority="high"`.
- Icons are imported individually (`utils/icons.ts`) so only the glyphs used are bundled.
- Scroll reveal is ~30 lines of CSS plus one shared `IntersectionObserver` — no animation library. It is gated behind a `js` class, so content is never hidden if scripting fails, and it is disabled entirely under `prefers-reduced-motion`.
- Two Google fonts, three weights total.

## Accessibility

Semantic landmarks, a skip link, visible focus rings, labelled form fields with `aria-invalid` and error descriptions, `aria-pressed` filter buttons, alt text on every image, and FAQ accordions built on native `<details>` so they work before hydration.

---

## The enquiry form

`components/ContactForm.vue` validates on the client and shows a success state. It does not send anything yet — `composables/useEnquiry.ts` holds the submission logic in one place:

```ts
const ENDPOINT = '/api/enquiries'
const USE_ENDPOINT = false   // flip to true once an endpoint exists
```

Point `ENDPOINT` at a Netlify function, Formspree, Supabase or a .NET API and set `USE_ENDPOINT = true`. No component changes needed.

## Not built (deliberately)

No database, authentication, payments, booking engine or admin dashboard. The content layer is plain typed data, so a Supabase or .NET backend can replace `data/*.ts` later without redesigning the components.
