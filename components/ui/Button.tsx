"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-gradient-to-r from-accent-cyan to-accent-violet text-black font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]",
  secondary:
    "glass-card text-foreground hover:border-accent-cyan/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]",
  ghost: "text-muted hover:text-foreground",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      children,
      ...props
    },
    ref,
  ) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  ),
);

Button.displayName = "Button";
