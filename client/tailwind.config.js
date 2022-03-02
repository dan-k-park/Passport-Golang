module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/heroBg.jpg')",
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
