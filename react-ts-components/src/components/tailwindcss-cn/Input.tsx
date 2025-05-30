import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const inputVariants = cva("transition-all", {
  variants: {
    variant: {
      default: "border bg-gray-200 border-none rounded-md",
      outline: "border border-gray-400 rounded-md",
      underline: "border-b-2 border-gray-800",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-md",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = ({ className, variant, size, ...props }: InputProps) => {
  return (
    <input
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export default Input;
