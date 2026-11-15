# tusharrajgupta.in

Personal portfolio of Tusshar Raj Gupta: a single-page site written in plain HTML, CSS and JavaScript, with no framework and no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | All page content and sections |
| `styles.css` | Layout, themes (light/dark) and animations |
| `script.js` | Interactions: live GitHub data, terminal easter egg, space mode, contact card, filters |
| `404.html` | Page shown for missing URLs |
| `staticwebapp.config.json` | Azure Static Web Apps settings (404 page, MIME types, headers) |
| `robots.txt`, `sitemap.xml` | For search engines |
| `og-image.png` | Link preview image for social sharing |
| `Tushar-Raj-Gupta-Resume.pdf` | Resume; source is `resume/resume.html` |
| `images/` | Project screenshots |

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Deploy

Pushing to `master` deploys to Azure Static Web Apps via the GitHub Actions workflow in `.github/workflows/`. The site is deployed as-is (`skip_app_build: true`).

## Regenerate the resume PDF

After editing `resume/resume.html`, run this from the project folder:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --print-to-pdf="Tushar-Raj-Gupta-Resume.pdf" "file://$PWD/resume/resume.html"
```
