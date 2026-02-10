

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* FONT */
      fontFamily: {
        proxima: ["ProximaNova", "sans-serif"],
      },

      /* ANIMATIONS */
      animation: {
        "slow-spin": "spin 30s linear infinite",
        "center-spin": "spin 6s linear infinite",
        marquee: "marquee 20s linear infinite",
      },

      /* KEYFRAMES */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideFromLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-140px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideFromRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(140px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        slideFromLeft: "slideFromLeft 1s ease-out forwards",
        slideFromRight: "slideFromRight 1s ease-out forwards",
      },
    },
  },

fontFamily: {
  proxima: ["Proxima Nova", "Proxima Sans", "sans-serif"],
},
};
