# Re Create Technologies website

Plain **HTML + CSS + JavaScript** (not React). No build step and no dependencies.

## Run it with npm (recommended)

Needs Node.js 16 or newer (https://nodejs.org). In a terminal, inside this folder:

```
npm run dev
```

No `npm install` is needed: the dev server (`server.js`) uses only Node's built-in modules.
The site opens at http://localhost:5173 and reloads by itself when you save a file.
Stop it with Ctrl + C. Use `PORT=8080 npm run dev` for another port, or `node server.js --no-open` to skip opening the browser.

## Other ways to run it

**VS Code + live preview**
1. Open the `recreate-website` folder in VS Code.
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.

Other ways: double-click `index.html`, or run `npx serve` / `python -m http.server 8000` in this folder.
Internet is only needed for the Google Fonts.

## Folder structure

```
server.js         local dev server for `npm run dev` (no packages needed)
index.html        page shell: header, footer mount, all 7 pages' markup, SEO meta tags, JSON-LD
css/styles.css    all styling. Colors and fonts are variables at the top (:root). Dark theme is the second block.
js/data.js        CONTENT: contact details, services, products, portfolio, partners, page titles, chat options, icons
js/app.js         behavior: routing, animations, WhatsApp chat, contact form, theme toggle
assets/           logo.png, footer badges, background textures, favicon
```

Pages are switched with `#/about`, `#/services`, `#/products`, `#/portfolio`, `#/certificates`, `#/blogs`, `#/contact`. A blog post opens at `#/blogs/<post-slug>`.
A service card links to its spot on the Services page, e.g. `#/services/seo-smo`.

## Common edits

| To change | Edit |
|---|---|
| Phone, email, WhatsApp number, social links | `C` and `SOCIAL` in `js/data.js` |
| Services / products | `SERVICES` / `PRODUCTS` in `js/data.js` |
| Portfolio list | `PORTFOLIO` in `js/data.js` (`[name, region, screenshot]`; region = `oman` / `intl` / `local` drives the filter tabs; screenshots in `assets/portfolio/`) |
| User stories (Home) | `STORIES` in `js/data.js` |
| Blog posts (Home + Blog page) | `BLOG` in `js/data.js` (each post has `body` blocks) |
| About page achievements | `ACHIEVEMENTS` in `js/data.js` |
| White logo (dark theme + footer) | `LOGO_DARK` in `js/data.js` (`assets/logo-white.png`) |
| Client login link | `C.login` in `js/data.js` |
| Home circle labels | `ORBIT_LABELS` in `js/data.js` (one entry per service) |
| Partner logos (scroller) | files in `assets/partners/`, listed in `PARTNERS` in `js/data.js` |
| Services dropdown columns | `SERVICE_GROUPS` and each service's `group` in `js/data.js` |
| Products filter chips | `PRODUCT_GROUPS` and each product's `group` in `js/data.js` |
| Top bar (phone, email, hours, social, button) | `FILL['topbar']` in `js/app.js`; phone/email/social in `C` and `SOCIAL` (`js/data.js`) |
| Product screenshots | files in `assets/products/`, linked in `PRODUCTS` (`img`) in `js/data.js` |
| Certificate images | put files in `assets/certs/` and list them in `CERT_IMAGES` in `js/data.js` |
| Page titles / descriptions | `META` in `js/data.js` |
| WhatsApp chat options | `WA_OPTS` in `js/data.js` |
| Top notice text | search `notice-item` in `js/app.js` |
| Logo | replace `assets/logo.png` |
| Brand colors | `--primary`, `--band-a/b`, etc. in `css/styles.css` |

## Light / dark theme

The header has a sun/moon button. The visitor's choice is saved in the browser (`rc-theme`).
The default is **light**. To change it, edit `DEFAULT` in the small script in the `<head>` of `index.html`:
`'light'`, `'dark'`, or `'system'` (follow the visitor's device setting).

## Before you launch

- **Contact form:** it currently opens the visitor's email or WhatsApp with the details filled in. Connect a form service (Formspree, EmailJS, your own API) in the "Contact form" section of `js/app.js`.
- **SEO:** all pages live in one HTML file, so search engines see one page. For full per-page SEO, split each page into its own HTML file (or move to a framework such as Next.js). Add a 1200x630 social image (`og:image`, `twitter:image`).
- **Privacy Policy and Terms** pages are not included.
- **Partner logos and certificate images** still need the real image files.
- Confirm the LinkedIn URL in `SOCIAL`.

## Deploy

Upload the whole folder to any static host: Netlify, Vercel, GitHub Pages, or cPanel `public_html`.
