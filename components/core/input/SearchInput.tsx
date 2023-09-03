"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const searchInput = cva([
  "tw-flex-1",
  "tw-appearance-none",
  "tw-w-full",
  "tw-outline-none",
  "tw-bg-transparent",
  "tw-my-auto",
  "tw-border-none",
  "tw-text-slate-500",
  "tw-text-base",
  "tw-font-normal",
  "tw-leading-6",
  "tw-p-2",
]);

export interface DivProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof searchInput> {}
export const SearchInput: React.FC<DivProps> = ({ className, ...props }) => (
  <input className={searchInput({ className })} {...props} />
);
