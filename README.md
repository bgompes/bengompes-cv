# bengompes-cv

Static HTML/CSS/JS micro CV. No build step, no framework.

## Local preview

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

`preview-standalone.html` is a single self-contained copy for quick viewing. Do not deploy it — it's a snapshot and goes stale.

## Company logos

Logos live in `logos/` as PNGs, cropped from the source CV:

```
logos/stripe.png
logos/basiq.png
logos/darktrace.png
logos/telstra.png
```

If a file is missing the chip falls back to a coloured monogram, so the page never breaks. Filenames must match exactly.

These are raster crops at roughly 130-220px wide, which is enough for the 84x40px display slot including retina. If you want them sharper, replace with SVGs from simpleicons.org (Stripe, Telstra) or the companies' brand pages, and update the `src` extensions in index.html from `.png` to `.svg`.


## CV download

The masthead has a "Download CV" button pointing at `ben-gompes-cv.pdf` in the site root. Add that file before deploying, or the link 404s.

Export it from the formatted version of your CV (Word or Google Docs → File → Download → PDF) and save it as exactly `ben-gompes-cv.pdf` next to index.html. To use a different filename, update the `href` on the `.cv-download` link in index.html.

## Deploy

1. Push this folder to a new GitHub repo.
2. Import the repo at vercel.com. No build settings needed — it's static.
3. You get a free `*.vercel.app` URL immediately.
4. Buy a domain (Namecheap, Porkbun, ~$15–20/year), add it in Vercel → Settings → Domains, and add the DNS records Vercel gives you at your registrar.

## To do

- [ ] Export and add `ben-gompes-cv.pdf` to the site root

- [ ] Write the real "Elephant in the room" section (marked with an HTML comment near the bottom of index.html)
- [ ] Add Stripe attainment numbers if available — that section is the only one without a hard metric
- [ ] Register domain and connect in Vercel
