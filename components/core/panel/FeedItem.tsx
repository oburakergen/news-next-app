"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { FontCard } from "@/components/core/class";

const feedItem = cva(
  ["tw-relative", "transition-all", "tw-rounded-lg", "ring-1", "ring-gray-900/5", ...FontCard, "tw-grid"],
  {
    variants: {
      intent: {
        "1x": ["tw-col-span-1", "tw-row-span-2"],
        "2x": ["tw-col-span-2", "sm:tw-col-span-1", "tw-row-span-2"],
      },
    },
    defaultVariants: {
      intent: "1x",
    },
  }
);

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof feedItem> {}

export const FeedItem: React.FC<DivProps> = ({ className, intent, ...props }) => (
  <div className={feedItem({ intent, className })} {...props} />
);
