# Portfolio Site

A single-page bilingual (English/Arabic) portfolio built with plain HTML/CSS/JS — no build step, ready for GitHub Pages.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username.github.io` for a root domain, or any name for a project site).
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repository root:
   ```bash
   git init
   git add index.html style.css script.js
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to `main` branch, root folder, and save.
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or `https://YOUR_USERNAME.github.io/` if you used the root-domain repo name).

## Editing content later

- All text lives directly in `index.html` as `data-en` / `data-ar` attribute pairs on each element — edit both when you update anything.
- Colors, fonts, and spacing are all defined as CSS variables at the top of `style.css` under `:root`.
- The terminal typing animation and language toggle logic are in `script.js`.
