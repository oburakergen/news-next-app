"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const testContainer = cva(["tw-container"], {
  variants: {
    intent: {
      none: [],
      fluid: ["max-w-screen"],
      flex: ["tw-flex", "tw-items-center"],
    },
    order: {
      none: [],
      first: ["tw-order-first"],
      last: ["tw-order-last"],
      small1: ["sm:tw-order-first", "xs:tw-order-first"],
      small2: ["sm:tw-order-last", "xs:tw-order-last"],
    },
  },
  compoundVariants: [{ intent: "fluid", order: "first" }],
});

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof testContainer> {}

export const TestContainer: React.FC<DivProps> = ({ className, intent, order, ...props }) => (
  <div className={testContainer({ className, intent, order })} {...props} />
);
