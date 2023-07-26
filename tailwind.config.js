/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "40em",
    },
    extend: {
      fontFamily: {
        "plus-jakarta": "Plus Jakarta Sans",
      },
      colors: {
        "clr-snow": "#f9fafd",
        "clr-blue": "#0a327b",
        "clr-red": "#f65552",
        "clr-dark-blue": "#1c202b",
        "clr-grey-blue": "#5e6778",
        "clr-grey-blue-light": "#e5effa",
        "clr-light-blue": "#dde7ee",
      },
    },
  },
  plugins: [],
};
