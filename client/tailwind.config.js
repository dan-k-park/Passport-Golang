const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Caveat": ["Caveat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero": "url('/heroBg.jpg')",
        "background": "url(/background.jpg)",
      },
      aspectRatio: {
        "popCard": "1 / 8",
      },
      screens: {
        "xs": "475px",
        "sm": "640px",

        "md": "768px",

        "lg": "1024px",

        "xl": "1280px",

        "2xl": "1536px",
      },
      width: {
        "50vw": "50vw",
      },
      flex: {
        "slide": "0 0 100%",
      },
    },
  },
  plugins: [],
};
