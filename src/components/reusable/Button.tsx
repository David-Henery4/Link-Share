import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary";
  size?: "large" | "secondarySmall";
}

const Button = ({ buttonType, size, className, ...props }: ButtonTypes) => {
  return (
    <button
      className={cn(buttonVariants({ buttonType, size }), className)}
      {...props}
    />
  );
};

const buttonVariants = cva(
  "rounded-lg text-center disabled:opacity-25 py-3 px-7",
  {
    variants: {
      buttonType: {
        primary: "bg-purple text-white active:bg-purpleHover",
        secondary: "border border-purple text-purple active:bg-purpleLight",
      },
      size: {
        large: "w-full",
        secondarySmall: "px-4 py-3",
      },
    },
  }
);

export default Button;
