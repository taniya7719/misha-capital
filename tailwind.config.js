/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 30s linear infinite",
        "center-spin": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
