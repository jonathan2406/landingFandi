/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        purple: "var(--purple)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        black: "var(--black)",
        dark: "var(--dark)",
        white: "var(--white)",
        "light-gray": "var(--light-gray)",
      },
    },
  },
  plugins: [],
};
