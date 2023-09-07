"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styled from "styled-components";
import { roboto } from "@/styles/fonts/fonts";

const CardDiv = styled.div`
  height: 200px;
  max-width: 300px;
  width: 300px;
`;

const card = cva(
  [
    "tw-rounded-lg",
    "ring-1",
    "ring-gray-900/5",
    roboto.className,
    "text-base",
    "not-italic",
    "font-normal",
    "tracking-normal",
    "leading-4",
    "text-start",
    "whitespace-normal",
    "break-words",
    "hyphens-auto",
  ],
  {
    variants: {
      intent: {
        none: [],
      },
      colors: {
        white: ["tw-bg-white", "tw-text-fadedBlack-900", "tw-shadow-fadedWhite-200", "tw-shadow-xl"],
        black: ["tw-bg-fadedBlack-900", "tw-text-white", "tw-shadow-fadedBlack-900", "tw-shadow-xl"],
      },
    },
    compoundVariants: [{ intent: "none", colors: "white" }],
    defaultVariants: {
      intent: "none",
      colors: "white",
    },
  }
);

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {}
export const Card: React.FC<DivProps> = ({ className, intent, colors, ...props }) => (
  <CardDiv lang="tr" className={card({ intent, colors, className })} {...props} />
);
