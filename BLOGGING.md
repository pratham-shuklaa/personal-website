# Blogging Guide

This project uses Astro content collections for blog posts.

## Where blog posts live

- Folder: `src/content/blog/`
- Each post is one Markdown file, e.g. `src/content/blog/my-first-post.md`

Only people with write access to this GitHub repo can publish posts.

## Create a new post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter at the top:

```md
---
title: My post title
pubDate: 2026-03-12
draft: false
---
```

3. Write the content below the frontmatter in Markdown.
4. Commit and push to your branch, then merge/push to `main` to publish.

## Cover image (optional)

Use a local image file inside `src/content/blog/` (same folder as post or nested folder).

Example:

```md
---
title: My post with cover
pubDate: 2026-03-12
coverImage: ./images/my-cover.jpg
coverAlt: A short alt text for the cover image
draft: false
---
```

Notes:

- `coverImage` path is relative to the markdown file.
- `coverAlt` is optional but recommended for accessibility.

## Body images

Inside the markdown body, use relative paths:

```md
![My body image](./images/diagram.png)
```

This works best when image files are kept near the post file (for example in an `images/` subfolder).

## Drafts

If you are not ready to publish, use:

```md
draft: true
```

Draft posts will not appear on the site.

## Blog URLs

- Blog list: `/blog/`
- Individual post: `/blog/<slug>/`

Slug is derived from the file name.