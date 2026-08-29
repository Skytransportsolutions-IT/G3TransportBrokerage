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

## Hosting on GitHub Pages

The site is plain static files at the repo root, so Pages needs no build step.

**Enable it:** repo **Settings** -> **Pages** -> under *Build and deployment* set
Source to **Deploy from a branch**, Branch to **main**, folder to **/ (root)**, then **Save**.
First publish takes a minute or two.

Live URL: <https://skytransportsolutions-it.github.io/G3TransportBrokerage/>

Every push to `main` republishes automatically, usually within a minute.

Two files support this:

- `.nojekyll` — tells Pages to serve the files as-is instead of running them through Jekyll.
- `robots.txt` — **blocks search engines while this is a review draft.** It must be deleted (or
  its `Disallow` flipped to `Allow`) before launch, or the live site will never appear in Google.

### Before this becomes the real public site

- `blueprint.html` is reachable by anyone with the URL. It carries a `noindex` tag, but it is not
  private. Delete it before launch, or share the review another way.
- The whole site is public once Pages is on — placeholder phone numbers and all. Fine for client
  review; not fine to hand to customers.
- A custom domain (e.g. `g3transportinc.com`) is set under the same **Settings → Pages** screen,
  which writes a `CNAME` file to the repo. Point a DNS `CNAME` record at
  `skytransportsolutions-it.github.io` first, then tick **Enforce HTTPS**.

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
