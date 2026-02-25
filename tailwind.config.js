/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        navy: "#000080",
        "deep-green": "#006400",
      },
      fontFamily: {
        luxury: ["serif"],
      },
    },
  },
  plugins: [],
}
