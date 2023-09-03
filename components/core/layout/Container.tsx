"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const container = cva(["tw-relative", "tw-container"], {
  variants: {
    intent: {
      fluid: ["max-w-screen"],
      flex: ["tw-flex", "tw-items-center", "tw-flex-wrap"],
    },
    direction: {
      row: ["tw-flex-row"],
      col: ["tw-flex-col"],
    },
    justify: {
      start: ["tw-justify-start"],
      end: ["tw-justify-end"],
      center: ["tw-justify-center"],
      between: ["tw-justify-between"],
      around: ["tw-justify-around"],
      evenly: ["tw-justify-evenly"],
    },
    order: {
      none: [],
      first: ["tw-order-first"],
      last: ["tw-order-last"],
      small1: ["sm:tw-order-first", "xs:tw-order-first"],
      small2: ["sm:tw-order-last", "xs:tw-order-last"],
    },
  },
  compoundVariants: [{ intent: "fluid", order: "none" }],
  defaultVariants: {
    intent: "fluid",
    order: "none",
  },
});

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof container> {}
export const Container: React.FC<DivProps> = ({ className, intent, order, direction, justify, ...props }) => (
  <div className={container({ intent, direction, justify, order, className })} {...props} />
);
