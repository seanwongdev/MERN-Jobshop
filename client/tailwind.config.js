/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      DEFAULT: "0 0 35px rgba(222,242,241,1)",
    },
    extend: {
      colors: {
        primary: "#3AAFA9",
        secondary: "#2B7A78",
        dark: "#17252A",
        light: "#DEF2F1",
        bright: "#FEFFFF",
      },
    },
  },
  plugins: [],
};
