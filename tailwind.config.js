// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is where Nativewind knows which files to scan for Tailwind classes.
  // The paths should point to all your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  // This is the crucial part that was missing and caused the error.
  // It includes the Nativewind preset, which is required for Tailwind CSS
  // to work correctly with React Native.
  presets: [require("nativewind/preset")],

  // The theme section is where you can customize your design tokens,
  // such as colors, fonts, spacing, etc.
  theme: {
    extend: {},
  },

  // Plugins can be added here for additional functionality.
  plugins: [],
};