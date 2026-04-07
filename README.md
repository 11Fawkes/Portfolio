# Dhruv Kumar – Portfolio

Built with React + Vite + Tailwind CSS.

## Before you run

Replace these files in `public/`:
- `profile.jpg` → your actual photo
- `resume.pdf` → your actual CV PDF
- `resume_page-1.png` / `resume_page-2.png` → screenshots of each CV page

To add a video intro, open `src/data/profile.js` and set `videoUrl` to your YouTube embed link
or a local `.mp4` path like `/intro.mp4` placed in `public/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to GitHub Pages

1. Create a repo named `portfolio` on github.com/11Fawkes
2. Run:

```bash
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/11Fawkes/portfolio.git
git push -u origin main
npm run deploy
```

3. Go to repo Settings → Pages → set branch to `gh-pages` → Save
4. Live at: https://11fawkes.github.io/portfolio/

## Update the live site

```bash
git add .
git commit -m "update"
git push
npm run deploy
```
