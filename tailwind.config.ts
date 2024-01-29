import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  important: "#__next",
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    screens: {
      xs: { max: "480px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1400px" },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
    },
    extend: {
      colors: {
        fadedWhite: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e0e0e0",
          400: "#d6d6d6",
        },
        fadedGray: {
          100: "#cccccc",
          200: "#707070",
        },
        fadedBlack: {
          100: "#333333",
          200: "#292929",
          300: "#1f1f1f",
          400: "#141414",
        },
      },
      screens: {
        xxs: { max: "320px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
