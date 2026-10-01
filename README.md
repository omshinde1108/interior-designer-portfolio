# Rutuja Kamankar - Interior Designer Portfolio

A static website (HTML, CSS, vanilla JS). No server, database, API key or paid service needed.

## Run locally
Open `index.html` in a browser. For best results use a local server: `python -m http.server` and open http://localhost:8000.

## Upload to GitHub and enable GitHub Pages
1. Create a new repository on github.com (for example `interior-designer-portfolio`), public.
2. Click **Add file > Upload files**, drag in everything inside this folder (keep the folder structure), then **Commit changes**.
   Note: empty folders are not uploaded. The `.gitkeep` files keep the project folders; put your images in them.
3. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/interior-designer-portfolio/`.

## Where to put your images
```
assets/images/hero.jpg        large hero image (landscape or portrait)
assets/images/profile.jpg     your portrait for the About section
assets/projects/project-01/   cover.jpg, image-01.jpg, image-02.jpg ...
assets/projects/project-02/   same pattern
... up to project-05
```
Keep the same file names (lowercase `.jpg`). Until a file exists, an elegant placeholder is shown.
Tip: resize images to about 1600px wide and compress them (squoosh.app) so the site loads quickly.

## Add a new project
1. Create `assets/projects/project-06/` and add `cover.jpg` and your images.
2. Open `js/projects.js`, copy one project block, and change `id`, `title`, `categories`, `coverImage`, `images` and the other fields.
3. Leave `location`, `year`, `area` as `""` to show "Details to be added".
4. Add the id to `FEATURED_IDS` if you want it under "Selected Works".

## Add or remove project categories
Edit the `CATEGORIES` list at the top of `js/projects.js`. A project appears under a filter when that name is in its `categories`.

## Change designer information
- Phone, email and footer text: search `index.html` for `93564` and `rutuja.kamankar@gmail.com`.
- WhatsApp number and email used by the form: `SITE` at the top of `js/main.js` (`whatsapp` is country code + number, digits only: `919356432235`).
- Social links: `SITE.social` in `js/main.js`; paste each URL. Empty ones show as plain text.
- Services, skills, software, process, experience list, statistics, form options: the arrays in `js/main.js`.
- About, education, experience text: `index.html`.

## Change colors and fonts
- Colors: variables at the top of `css/style.css` (`:root` for light, `:root[data-theme=dark]` for dark).
- Fonts: change the Google Fonts `<link>` in `index.html` and the `--serif` / `--sans` variables in `css/style.css`.

## Notes
- The inquiry form opens WhatsApp with the message pre-filled; "Send by email" opens your email app via `mailto:`.
- The map button opens OpenStreetMap (no API key).
- Dark mode choice is saved in the visitor's browser.
