# G3 Transport Inc — Website

Website blueprint for **G3 Transport Inc**, a California-based licensed freight brokerage that
arranges refrigerated transportation of fresh produce from California to markets across the
United States.

Static HTML, CSS and JavaScript. No build step, no dependencies, no framework.

## Run it locally

```bash
python -m http.server 8823
```

Then open <http://localhost:8823>. Opening `index.html` directly from the file system also works,
though the videos and relative paths behave best over HTTP.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — video hero, quick quote, services, coverage, commodities, process |
| `services.html` | Refrigerated truckload, expedited & team, multi-stop, backhauls, accessorials |
| `coverage.html` | California growing regions, lane and transit table, seasonal planning |
| `about.html` | Story, operating values, broker authority & bond, brokerage snapshot |
| `carriers.html` | Carrier recruiting — terms, setup requirements, carrier packet form |
| `contact.html` | Quote form, contact details, FAQ |
| `blueprint.html` | **Internal review page** — sitemap, logo options, open items, build status. Delete before launch. |

## Read this before editing

- **[BLUEPRINT.md](BLUEPRINT.md)** — what is built, what is placeholder, and what the client still
  needs to supply. Start here.
- **[CREDITS.md](CREDITS.md)** — photo and video sources, licensing, and the rules for replacing them.

## Status

This is a **first-draft blueprint for client review**, not a launch-ready site.

- Every placeholder value is highlighted in yellow on the page and listed in `blueprint.html`.
  Nothing invented has been presented as fact — no phone number, address, MC/DOT number, bond
  amount, transit time, carrier count or testimonial is real.
- Forms validate and confirm but **send nothing**. They need a mail endpoint before launch.
- All photography and video is **licensed placeholder stock** (Pexels License). G3 is a brokerage,
  not an asset carrier, so no image should ever be captioned as G3-owned equipment.
- Privacy policy, terms, analytics and sitemap are not set up.

## Structure

```
*.html                   pages
favicon.ico              generated from the circular badge
assets/css/styles.css    all styling, design tokens at the top
assets/js/main.js        mobile nav, FAQ accordion, scroll reveal, video control, forms
assets/img/              logos, favicons
assets/img/photos/       placeholder photography + video poster frames
assets/video/            web-optimised background clips
asset/                   original client-supplied logo artwork (untouched)
.claude/launch.json      local dev-server config
```
