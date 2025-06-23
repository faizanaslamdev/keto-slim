/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}", "*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "34px",
        h2: "20px",
        h3: "16px",
        p: "20px",
        psm: "16px",
        pxl: "42px",
        pxs: "14px",
      },
      lineHeight: {
        heading: "1.2em",
        paragraph: "1.4em",
      },
      colors: {
        background: { DEFAULT: "#F8F4F4", card: "#FFFFFF" },
        label: {
          DEFAULT: "#36BC9F",
          empty: "#D8D8D8",
        },
        heading: {
          DEFAULT: "#12241F",
          highlight: "#f85f57",
        },
        paragraph: {
          DEFAULT: "#13556F",
          highlight: "#f59c98",
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
