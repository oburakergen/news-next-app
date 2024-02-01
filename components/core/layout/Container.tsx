"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const container = cva(["mx-auto"], {
  variants: {
    intent: {
      none: ["container"],
      fluid: ["tw-container-fluid"],
    },
  },
  compoundVariants: [{ intent: "fluid", class: "fluid" }],
  defaultVariants: {
    intent: "none",
  },
});

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof container> {}
export const Container: React.FC<DivProps> = ({ className, intent, ...props }) => (
  <div className={container({ intent, className })} {...props} />
);
