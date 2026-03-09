/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1A",
        paper: "#FAF8F4",
        accent: "#0B1B3A"
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tightish: "-0.02em"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(11, 15, 26, 0.08)"
      }
    }
  },
  plugins: []
};

