# Magic Speed Cleaning Services

Marketing website for Magic Speed Cleaning Services, a family-run residential,
commercial, and post-construction cleaning company serving Champaign, Urbana,
Savoy, and Mahomet, Illinois.

Fast, fully indexable, dependency-free static HTML with one shared CSS file and a
small deferred JavaScript file. Bold poster design direction (deep navy and yellow,
square edges, ALL-CAPS poster headlines), built from the approved design reference 3.

## Pages

| Path (clean URL) | File | Indexable |
| --- | --- | --- |
| `/` | `index.html` | yes |
| `/services` | `services.html` | yes |
| `/about` | `about.html` | yes |
| `/contact` | `contact.html` | yes |
| `/privacy` | `privacy.html` | yes |
| `/terms` | `terms.html` | yes |
| (404) | `404.html` | noindex |

Privacy and Terms are intentionally indexable and linked in the footer so an A2P /
10DLC carrier reviewer can reach them.

## Business details (live)

- Name: Magic Speed Cleaning Services
- Owner: Nyangbe Barnes
- Address: 2701 Willow Park Dr, Champaign, IL 61822
- Phone: (217) 600-2981  (tel:+12176002981)
- Email: magicspeedcleaningservice@gmail.com
- Insured through Pekin Insurance
- Pricing: quote only, no fixed prices anywhere

## Integrations (GoHighLevel / LeadConnector)

- Main Quote Request form and Customer Feedback form are embedded on `/contact`.
  Their iframes are left verbatim; `form_embed.js` is loaded once for the page.
- The LeadConnector chat widget loads only on pages without a form: `/`, `/services`,
  and `/about`. It is intentionally absent from `/contact` so the forms do not compete,
  and from `/privacy` and `/terms`.

## Deploy to Vercel

1. Set the Vercel project root directory to this `site/` folder.
2. Framework preset: Other (static). No build command, output is this folder.
3. `vercel.json` enables clean URLs (so `/privacy` and `/terms` resolve), sets long
   cache headers on `/assets`, and adds baseline security headers.
4. `404.html` is served automatically for unknown paths.

## One thing to swap when the domain is live

Everything uses the placeholder domain `https://www.magicspeedcleaning.com`. When the
real domain is connected, find and replace that single string across the project. It
appears in canonical tags, Open Graph and Twitter URLs, JSON-LD, `sitemap.xml`,
`robots.txt`, and the Terms SMS section ("www.magicspeedcleaning.com/privacy"). The
in-page Privacy link in Terms is already a working relative link, so it resolves
regardless, but update the printed URL text to match the live domain.

## SEO and quality notes

- One `<h1>` per page, logical `<h2>`/`<h3>` order, semantic landmarks, descriptive
  alt text, unique meta titles and descriptions, Open Graph and Twitter cards.
- JSON-LD: `CleaningService` (LocalBusiness) with full NAP, `Service`, `WebSite`,
  `FAQPage`, `ContactPage`, `BreadcrumbList`, `PrivacyPolicy`.
- Inter is loaded with the non-render-blocking pattern; CSS is one file; JS is deferred.
- No em dashes, no fixed prices, no fabricated reviews, no invented logo (clean text
  wordmark only).
