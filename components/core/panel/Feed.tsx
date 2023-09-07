"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const feed = cva([
  "tw-grid",
  "tw-grid-flow-row",
  "tw-auto-rows-max",
  "tw-grid-cols-4",
  "sm:tw-grid-cols-1",
  "grid-flow-col",
  "tw-gap-4",
  "tw-place-items-start",
  "tw-place-content-center",
]);

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof feed> {}

export const Feed: React.FC<DivProps> = ({ className, ...props }) => <div className={feed({ className })} {...props} />;
