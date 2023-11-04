"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const feed = cva([
  "tw-grid",
  "tw-grid-flow-row",
  "tw-auto-rows-max",
  "tw-grid-cols-4",
  "lg:tw-grid-cols-3",
  "md:tw-grid-cols-2",
  "sm:tw-grid-cols-1",
  "grid-flow-col",
  "tw-gap-6",
  "tw-place-content-center",
  "justify-items-center",
]);

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof feed> {}

export const Feed: React.FC<DivProps> = ({ className, ...props }) => <div className={feed({ className })} {...props} />;
