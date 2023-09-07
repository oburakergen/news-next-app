"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const feedItem = cva(
  [
    "tw-grid",
    "tw-grid-flow-row",
    "tw-auto-rows-max",
    "tw-grid-cols-4",
    "sm:tw-grid-cols-1",
    "grid-flow-col",
    "tw-gap-4",
    "tw-place-items-start",
    "tw-place-content-center",
  ],
  {
    variants: {
      intent: {
        "1x": ["tw-col-span-1", "tw-row-span-2"],
        "2x": ["tw-col-span-2", "sm:tw-col-span-1", "tw-row-span-2"],
      },
    },
  }
);

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof feedItem> {}

export const FeedItem: React.FC<DivProps> = ({ className, intent, ...props }) => (
  <div className={feedItem({ intent, className })} {...props} />
);
