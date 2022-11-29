/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ["Courier Prime", "monospace"],
      },
      width: {
        seventeen: "17rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
