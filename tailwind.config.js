/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ['"Noto Sans TC"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        ms95: ["ms_sans_serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
