"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const searchLayout = cva([
  "tw-relative",
  "tw-container",
  "tw-flex",
  "tw-h-full",
  "tw-bg-white",
  "tw-rounded-3xl",
  "tw-shadow",
  "tw-shadow-fadedGray-300",
  "tw-text-fadedBlack-500",
]);

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof searchLayout> {}
export const SearchLayout: React.FC<DivProps> = ({ className, ...props }) => (
  <div className={searchLayout({ className })} {...props} />
);
