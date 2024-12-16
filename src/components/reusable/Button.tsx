import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary" | "third";
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
  "rounded-lg text-center py-3 px-7 text-base font-semibold disabled:opacity-25",
  {
    variants: {
      buttonType: {
        primary: "bg-purple text-white active:bg-purpleHover",
        secondary: "border border-purple text-purple active:bg-purpleLight",
        third: "text-grey",
      },
      size: {
        large: "w-full",
        secondarySmall: "px-4 py-3",
      },
    },
  }
);

export default Button;
