/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}", "*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: "#F8F4F4", card: "#FFFFFF" },
        label: {
          DEFAULT: "#36BC9F",
          empty: "#D8D8D8",
        },
        heading: {
          DEFAULT: "#12241F",
          highlight: "#F75950",
        },
        paragraph: {
          DEFAULT: "#13556F",
          highlight: "#F75950",
        },
        cta: {
          DEFAULT: "#36BC9F",
          text: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
