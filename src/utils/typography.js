import Typography from "typography";
// import fairyGatesTheme from "typography-theme-fairy-gates";

// const typography = new Typography(fairyGatesTheme);

// export default typography;
// export const rhythm = typography.rhythm;
// export const scale = typography.scale;

const typography = new Typography({
  baseFontSize: "18.38px",
  baseLineHeight: 1.63,
  scaleRatio: 2,
  headerColor: "black",
  bodyColor: "#333",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,

  headerFontFamily: [
    "Raleway",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["700", "400"]
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700", "700i"]
    }
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export const { scale, rhythm, options } = typography;
export default typography;
