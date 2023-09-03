"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const card = cva(["tw-relative", "tw-container"], {
  variants: {
    intent: {
      grid: ["tw-grid", "tw-grid-cols-1", "tw-gap-4", "tw-p-4", "tw-rounded-lg"],
      flex: ["tw-flex", "tw-flex-col", "tw-p-4", "tw-rounded-lg"],
    },
    colors: {
      white: ["tw-bg-white", "tw-text-fadedBlack-900", "tw-shadow-fadedWhite-200", "tw-shadow-md"],
      black: ["tw-bg-fadedBlack-900", "tw-text-white", "tw-shadow-fadedBlack-900", "tw-shadow-md"],
    },
  },
  compoundVariants: [{ intent: "grid", colors: "white" }],
  defaultVariants: {
    intent: "grid",
    colors: "white",
  },
});

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {}
export const Card: React.FC<DivProps> = ({ className, intent, colors, ...props }) => (
  <div className={card({ intent, colors, className })} {...props} />
);
