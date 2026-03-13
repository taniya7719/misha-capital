// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {

//       /* FONTS */
//       fontFamily: {
//         proxima: ["Proxima Nova", "Proxima Sans", "sans-serif"],
//       },

//       /* KEYFRAMES */
//       keyframes: {

//         /* MARQUEE */
//         marquee: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-50%)" },
//         },

//         marqueeLeft: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-50%)" },
//         },

//         marqueeRight: {
//           "0%": { transform: "translateX(-50%)" },
//           "100%": { transform: "translateX(0)" },
//         },

//         /* SLIDE ANIMATION */

//         slideFromLeft: {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(-140px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0)",
//           },
//         },

//         slideFromRight: {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(140px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0)",
//           },
//         },

//       },

//       /* ANIMATIONS */
//       animation: {

//         "slow-spin": "spin 30s linear infinite",
//         "center-spin": "spin 6s linear infinite",

//         marquee: "marquee 20s linear infinite",
//       "marquee-left": "marqueeLeft 50s linear infinite",
// "marquee-right": "marqueeRight 50s linear infinite",

//         slideFromLeft: "slideFromLeft 1s ease-out forwards",
//         slideFromRight: "slideFromRight 1s ease-out forwards",

//       },

//     },
//   },

//   plugins: [],
// };
/** */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      animation: {
        "marquee-left": "marqueeLeft 40s linear infinite",
        "marquee-right": "marqueeRight 40s linear infinite",
      },
    },
  },

  plugins: [],
};