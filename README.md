# Pratham Shukla — Portfolio (Astro + Tailwind)

Editorial, minimal portfolio scaffold designed for GitHub Pages (`github.io`).

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env`:

```bash
cp .env.example .env
```

3. Set the contact destination email in `.env`:

```bash
PUBLIC_CONTACT_EMAIL=pratham@youremail.com
```

4. Run locally:

```bash
npm run dev
```

## Pages

- `/` Home (hero + intro strip + contact section)
- `/about` About
- `/work` Work experience

## Contact form

- GitHub Pages is static-only, so the contact form uses a `mailto:` flow (opens the visitor’s email client).
- Set `PUBLIC_CONTACT_EMAIL` to control where it goes.

## Deploy to GitHub Pages

- Push this repo to GitHub (default branch: `main`)
- In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
- Push to `main` and the workflow will build + deploy to Pages

Your site URL will be:

- `https://<github-username>.github.io/<repo-name>/`

## Content

All content is intentionally `[PLACEHOLDER]` so you can fill it in.

