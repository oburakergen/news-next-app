import { Roboto, Open_Sans } from "next/font/google";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const roboto: NextFontWithVariable = Roboto({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  variable: "--font-roboto",
  display: "auto",
  style: "normal",
});

export const open_sans: NextFontWithVariable = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  variable: "--font-open-sans",
  display: "auto",
  style: "italic",
});
