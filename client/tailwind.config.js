/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      maxWidth: { 600: "600px" },
      height: { 70: "70px" },
      backgroundColor: {
        primary: "#f5f5f5",
        secondary: "#1266DD",
        secondary2: "#F73859",
      },
      colors: {
        primary: "#333",
        secondary: "#1266DD",
        hover: "#f60",
      },
    },
  },
  plugins: [],
};
