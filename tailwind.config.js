/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "440px",
      sm: "600px",
      md: "768px",
      lg: "1000px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Parisienne: ["Parisienne", "cursive"],
        birthstone: ["Birthstone", "cursive"],
        danceing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
