/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#111111",
        redHover: "#CB1B28",
        redButton: "#CD1C29",
        lightGrey: "#1e1e1e",
      },
    },
    fontFamily: {
      body: ["Lato"],
    },
  },
  plugins: [],
};
