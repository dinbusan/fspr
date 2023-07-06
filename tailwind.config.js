/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antique: ["Bacasime Antique", "serif"],
        laquer: ["Lacquer", "serif"],
        metal: ["Metal Mania", "serif"],
      },
      backgroundImage: {
        logo: "url('/assets/logos/logo_white_no_bg_edited.png')",
      },
    },
  },
  plugins: [],
};
