# Base44 Dev Environment

## Overview
A simple Express + EJS blog web app ("blog-web-app", capstone project by Jalen Pinder).
Single Node.js process, no database, no external services, no secrets required.

## Running
- `docker compose -f docker-compose.base44.yml up -d` starts the app on port 3000.
- The container installs npm deps on boot and runs `nodemon --legacy-watch index.js` for live reload of `index.js` and view files.
- `node_modules` is kept in a named volume so host installs don't interfere.

## Structure
- `index.js` — Express server (ES module). Routes: `/` (home feed), `/about`, `/contact`, `POST /update-feed`, `POST /contact-message`, `PATCH /edit-post`.
- `views/` — EJS templates (`index.ejs`, `about.ejs`, `contact.ejs`, partials in `views/partials/`).
- `public/` — static assets (CSS, SVGs, logo image).
- Posts are held in an in-memory array (`feedArray`); state is lost on restart.

## Verifying
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return `200`.
- The served page is live EJS source from the cloned repo (dev server, not a prebuilt bundle).

## Notes
- No `.env` or secrets needed.
- EJS views and `index.js` changes hot-reload via nodemon.
