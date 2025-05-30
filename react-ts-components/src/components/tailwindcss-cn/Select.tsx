import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { SelectHTMLAttributes } from "react";

const selectVariants = cva("transition-all", {
  variants: {
    variant: {
      default: "bg-gray-200 rounded-md",
      ghost: "hover:bg-gray-100 rounded-md",
      underline: "border-b-2 border-gray-800",
    },
    size: {
      sm: "px-1 py-1 h-8 text-sm",
      md: "px-2 py-2 h-10 text-md",
      lg: "px-4 py-2 h-12 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {}

const Select = ({ className, variant, size, ...props }: SelectProps) => {
  return (
    <select
      className={cn(selectVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export default Select;
