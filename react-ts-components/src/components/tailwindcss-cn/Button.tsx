import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all",
  {
    variants: {
      variant: {
        default: "bg-gray-200 hover:bg-gray-300",
        outline: "border border-gray-500 hover:bg-gray-100",
        ghost: "text-gray-700 hover:bg-gray-100",
      },
      size: {
        sm: "px-1 py-1 h-8 text-sm",
        md: "px-4 py-2 h-10 text-md",
        lg: "px-6 py-2 h-12 text-lg font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export default Button;
