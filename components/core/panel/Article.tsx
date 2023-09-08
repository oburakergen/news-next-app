"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styled from "styled-components";
import { FontCard } from "@/components/core/class";

const ArticleDiv = styled.article`
  height: 300px;
  max-width: 300px;
  width: 100%;
`;

const article = cva(["relative", "tw-rounded-lg", "ring-1", "ring-gray-900/5", ...FontCard, "tw-grid"], {
  variants: {
    intent: {
      slider: ["tw-rows-1"],
      video: ["tw-rows-2"],
      image: ["tw-rows-3"],
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
});

interface DivProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof article> {}

export const Article: React.FC<DivProps> = ({ className, intent, colors, ...props }) => (
  <ArticleDiv lang="tr" className={article({ intent, colors, className })} {...props} />
);
