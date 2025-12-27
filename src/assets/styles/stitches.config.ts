import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme, config } =
  createStitches({
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
    },
    theme: {
      colors: {
        bgPrimary: "#05070A",
        bgSecondary: "#0D1117",

        brandPrimary: "#00D1FF",
        brandSecondary: "#D4AF37",
        brandAccent: "#6E44FF",

        textHighContrast: "#FFFFFF",
        textLowContrast: "#8899A6",
        textGolden: "#D4AF37",

        borderSubtle: "#1B1F24",
        hoverOverlay: "rgba(0, 209, 255, 0.1)",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "64px",
        8: "80px",
      },
      fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
      },
      fonts: {
        sans: "'Inter', system-ui, -apple-system, sans-serif",
        heading: "'Lexend', sans-serif",
        mono: "'Fira Code', monospace",
      },
      fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      lineHeights: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },
      radii: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "9999px",
      },
      zIndices: {
        base: 1,
        header: 10,
        modal: 100,
      },
      shadows: {
        glow: "0 0 15px rgba(0, 209, 255, 0.3)",
        goldGlow: "0 0 20px rgba(212, 175, 55, 0.2)",
      },
    },
    utils: {
      paddingX: (value: string | number) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      marginX: (value: string | number) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: string | number) => ({
        marginTop: value,
        marginBottom: value,
      }),
    },
  });

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    backgroundColor: "$bgPrimary",
    color: "$textHighContrast",
    fontFamily: "$sans",
    "-webkit-font-smoothing": "antialiased",
  },
  "h1, h2, h3, h4": {
    fontFamily: "$heading",
    fontWeight: "$bold",
    color: "$textHighContrast",
  },
});
