/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryColor: "#6B3CC9",
      secondaryColor: "#F28D35",
      analogousColorOne: "#6A44F2",
      analogousColorTwo: "#1CBDDD",
      triadicColorOne: "#52378C",
      darkColor: "#78BF91",
      textColor: "#2F2F2F",
      textColorLight: "#535A75",
      textColorSubtle: "#9C9991",
      accentColorWizard: "#E2F2FE",
      accentColorCuddyl: "#FFF8EO",
      errorColor: "#FFF0335",
      successColor: "#5EB30B",
      white: "#FFFFFF",
    },
    fontFamily: {
      poppins: ["Poppins", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    borderWidth: {
      1: "1px",
      1.5: "1.5px",
    },
    extend: {
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
