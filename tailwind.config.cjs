/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bonton-accent": "#4BFFDF",
        "bonton-text": "#344A6B",
        "bonton-yellow": "#FFDB1D",
        "bonton-purple": "#F14BFF",
        "bonton-blue": "#3EA9D8",
        "bonton-green": "#005D6A",
        "bonton-green-bright": "#87FF84",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
