import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // GitHub Pages hosts static files only (no serverless endpoints).
  output: "static",
  // For project pages, your site lives at https://<user>.github.io/<repo>/
  // This auto-detects the repo name in GitHub Actions and sets a base path.
  site:
    process.env.SITE_URL ??
    (process.env.GITHUB_REPOSITORY_OWNER
      ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
      : undefined),
  base:
    process.env.BASE_PATH ??
    (process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
      : "/"),
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    // Keep server-only env vars private; only expose PUBLIC_* to the client.
    envPrefix: ["PUBLIC_"]
  }
});

