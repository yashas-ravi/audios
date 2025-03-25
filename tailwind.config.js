/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
      primary: "#edf2fb",
      secondary: "#4dadf7",
      accent: "#b674e3",
      black: {
        DEFAULT: "#000",
        100: "#271e2d",
        200: "#232633",
      },
      gray: {
        100: "#CDCDE0",
        200: "#a6a6bd",
      },
    },
    fontFamily: {
      dthin: ["DMsans-Thin", "sans-serif"],
      dextralight: ["DMsans-ExtraLight", "sans-serif"],
      dlight: ["DMsans-Light", "sans-serif"],
      dregular: ["DMsans-Regular", "sans-serif"],
      dmedium: ["DMsans-Medium", "sans-serif"],
      dsemibold: ["DMsans-SemiBold", "sans-serif"],
      dbold: ["DMsans-Bold", "sans-serif"],
      dextrabold: ["DMsans-ExtraBold", "sans-serif"],
      dblack: ["DMsans-Black", "sans-serif"],
    },
  },
  },
  plugins: [],
}