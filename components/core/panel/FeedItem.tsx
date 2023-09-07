"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const feedItem = cva([], {
  variants: {
    intent: {
      "1x": ["tw-col-span-1", "tw-row-span-2"],
      "2x": ["tw-col-span-2", "sm:tw-col-span-1", "tw-row-span-2"],
    },
  },
  defaultVariants: {
    intent: "1x",
  },
});

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof feedItem> {}

export const FeedItem: React.FC<DivProps> = ({ className, intent, ...props }) => (
  <div className={feedItem({ intent, className })} {...props} />
);
