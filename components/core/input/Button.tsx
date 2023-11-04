"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "tw-inline-flex",
    "tw-items-center",
    "tw-justify-center",
    "tw-relative",
    "tw-outline-0",
    "tw-border-0",
    "tw-cursor-pointer",
    "tw-align-middle",
    "tw-font-medium",
    "tw-leading-normal",
    "tw-text-sm",
    "tw-transition",
    "tw-duration-200",
  ],
  {
    variants: {
      intent: {
        primary: ["tw-bg-blue-500", "tw-text-white", "tw-border-transparent", "hover:tw-bg-blue-600"],
        primaryOutline: ["tw-bg-white", "tw-text-blue-500", "tw-border-blue-500", "hover:tw-bg-blue-50"],
        secondary: ["tw-bg-white", "tw-text-gray-800", "tw-border-gray-400", "hover:tw-bg-gray-100"],
        secondaryOutline: ["tw-bg-white", "tw-text-gray-800", "tw-border-gray-400", "hover:tw-bg-gray-100"],
        danger: ["tw-bg-red-500", "tw-text-white", "tw-border-transparent", "hover:tw-bg-red-600"],
        dangerOutline: ["tw-bg-white", "tw-text-red-500", "tw-border-red-500", "hover:tw-bg-red-50"],
        warning: ["tw-bg-yellow-500", "tw-text-white", "tw-border-transparent", "hover:tw-bg-yellow-600"],
        warningOutline: ["tw-bg-white", "tw-text-yellow-500", "tw-border-yellow-500", "hover:tw-bg-yellow-50"],
        success: ["tw-bg-green-500", "tw-text-white", "tw-border-transparent", "hover:tw-bg-green-600"],
        successOutline: ["tw-bg-white", "tw-text-green-500", "tw-border-green-500", "hover:tw-bg-green-50"],
        info: ["tw-bg-blue-500", "tw-text-white", "tw-border-transparent", "hover:rw-bg-blue-600"],
        infoOutline: ["tw-bg-white", "tw-text-blue-500", "tw-border-blue-500", "hover:tw-bg-blue-50"],
        light: [
          "tw-bg-transparent",
          "tw-text-fadedGray-200",
          "tw-border-transparent",
          "hover:tw-text-fadedWhite-100",
          "hover:tw-bg-fadedGray-200",
          "tw-shadow-fadedWhite-200",
          "tw-shadow",
        ],
        dark: ["tw-bg-gray-800", "tw-text-white", "tw-border-transparent", "hover:tw-bg-gray-900"],
        link: ["tw-bg-transparent", "tw-text-fadedGray-200", "tw-border-transparent", "tw-bg-transparent"],
      },
      variant: {
        circle: ["tw-rounded-full", "tw-p-2"],
      },
      offset: {
        full: ["tw-ring-sky-700", "tw-ring-offset-sky-700", "tw-ring-offset-2", "tw-ring-2"],
      },
      size: {
        small: ["tw-text-sm", "tw-py-1", "tw-px-2"],
        medium: ["tw-text-base", "tw-py-2", "tw-px-4"],
        large: ["tw-text-lg", "tw-py-3", "tw-px-6"],
        xlarge: ["tw-text-xl", "tw-py-4", "tw-px-8"],
      },
    },
    compoundVariants: [{ intent: "primary" }],
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ className, intent, variant, size, ...props }) => (
  <button className={button({ intent, size, variant, className })} {...props} />
);
