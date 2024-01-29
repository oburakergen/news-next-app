"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { roboto } from "@/styles/fonts/fonts";

const article = cva(
  ["tw-relative", ...roboto.className, "tw-rounded-lg", "tw-ring-1", "tw-ring-gray-900/5", "font-card", "tw-grid"],
  {
    variants: {
      intent: {
        slider: ["tw-rows-1"],
        video: ["tw-rows-2"],
        image: ["tw-rows-2"],
      },
      colors: {
        white: ["tw-bg-white", "tw-text-fadedBlack-900", "tw-shadow-fadedWhite-200", "tw-shadow-xl"],
        black: ["tw-bg-fadedBlack-900", "tw-text-white", "tw-shadow-fadedBlack-900", "tw-shadow-xl"],
      },
    },
    compoundVariants: [{ intent: "image", colors: "white" }],
    defaultVariants: {
      intent: "image",
      colors: "white",
    },
  }
);

interface DivProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof article> {}

export const Article: React.FC<DivProps> = ({ className, intent, colors, ...props }) => (
  <div lang="tr" className={article({ intent, colors, className })} {...props} />
);
