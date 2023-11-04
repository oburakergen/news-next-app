"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const articleImage = cva(["tw-full", "tw-relative", "tw-overflow-hidden", "tw-rounded-t-lg", "tw-row-span-3"]);

interface DivProps extends React.HTMLAttributes<HTMLImageElement>, VariantProps<typeof articleImage> {}

export const ArticleImage: React.FC<DivProps> = ({ className, ...props }) => (
  <figure className={articleImage({ className })} {...props} />
);
