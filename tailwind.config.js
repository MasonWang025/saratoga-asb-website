module.exports = {
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    ,
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        toga: {
          primary: {
            main: "#C92128",
            light: "#e8383f",
            dark: "#a80c12",
          },
          secondary: {
            main: "#0b122b",
            bright: "#101a40",
            gray: "#141c3b",
            grayer: "#1a213b",
            dark: "#050d2b",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
};
