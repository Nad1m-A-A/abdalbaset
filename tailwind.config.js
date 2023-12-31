/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        ".1": ".1rem",
      },
      backgroundColor: {
        main: "#F4F4F4",
      },
      textColor: {
        main: "#d6b210",
        light: "#CACACA",
      },
      fill: {
        main: "#d6b210",
        dark: "#343434",
      },
    },
  },
  plugins: [],
};
