import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#4040ff] text-white hover:bg-[#4040ff]/90",
        outline: "border border-[#ffffff40] bg-transparent hover:bg-[#ffffff20] text-white",
        secondary: "bg-[#2a2b3d] text-white hover:bg-[#3a3b4d]",
        ghost: "hover:bg-[#ffffff20] text-white",
        link: "text-white underline-offset-4 hover:underline",
        glow: "relative bg-[#4040ff] text-white hover:bg-[#4040ff]/90 after:content-[''] after:absolute after:inset-0 after:z-[-1] after:bg-[#4040ff]/50 after:blur-lg after:opacity-50 hover:after:opacity-100 after:transition-opacity",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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