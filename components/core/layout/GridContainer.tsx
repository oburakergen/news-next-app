"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const gridContainer = cva(["tw-grid"], {
  variants: {
    row: {
      none: [],
      row1: ["tw-grid-rows-1"],
      row2: ["tw-grid-rows-2"],
      row3: ["tw-grid-rows-3"],
      row4: ["tw-grid-rows-4"],
      row5: ["tw-grid-rows-5"],
      row6: ["tw-grid-rows-6"],
    },
    template: {
      none: [],
      col1: ["tw-grid-cols-1"],
      col2: ["tw-grid-cols-2"],
      col3: ["tw-grid-cols-3"],
      col4: ["tw-grid-cols-4"],
      col5: ["tw-grid-cols-5"],
      col6: ["tw-grid-cols-6"],
    },
    size: {
      none: [],
    },
  },
  compoundVariants: [{ row: "none", template: "none" }],
  defaultVariants: {
    row: "none",
    template: "none",
  },
});

interface DivProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridContainer> {}
export const GridContainer: React.FC<DivProps> = ({ className, row, template, ...props }) => (
  <div className={gridContainer({ row, template, className })} {...props} />
);
