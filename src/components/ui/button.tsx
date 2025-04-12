import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#5181ff] to-[#7ba6ff] text-white hover:shadow-[0_5px_15px_rgba(81,129,255,0.35)] hover:translate-y-[-2px]",
        outline: "border border-[#5181ff]/40 bg-[#131a2b]/40 backdrop-blur-sm text-white hover:bg-[#5181ff]/10 hover:border-[#5181ff]/80 hover:shadow-[0_0_20px_rgba(81,129,255,0.2)]",
        secondary: "bg-[#1e2a47] text-white hover:bg-[#2a3863] hover:shadow-md",
        ghost: "hover:bg-[#ffffff15] text-white",
        link: "text-[#5181ff] underline-offset-4 hover:underline",
        glow: "relative bg-gradient-to-r from-[#5181ff] to-[#7ba6ff] text-white after:content-[''] after:absolute after:inset-0 after:z-[-1] after:bg-[#5181ff]/50 after:blur-lg after:opacity-50 hover:after:opacity-100 after:transition-opacity hover:shadow-[0_5px_15px_rgba(81,129,255,0.35)] hover:translate-y-[-2px]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "glow";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button }; 