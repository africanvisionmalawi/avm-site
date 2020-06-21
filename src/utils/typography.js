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
  headerColor: "#246A73",
  bodyColor: "#333",
  headerWeight: 300,
  bodyWeight: 300,
  boldWeight: 400,

  headerFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: "Quicksand",
      styles: ["700", "400"],
    },
    {
      name: "Roboto",
      styles: ["300", "300i", "400", "400i", "700", "700i"],
    },
    {
      name: "Raleway",
      styles: ["300", "300", "400", "400i", "700", "700i"],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export const { scale, rhythm, options } = typography;
export default typography;
