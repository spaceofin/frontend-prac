import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva("rounded-sm border flex items-center", {
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-800 border-gray-300",
      success: "bg-green-100 text-green-800 border-green-300",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
      destructive: "bg-red-100 text-red-800 border-red-300",
      info: "bg-blue-100 text-blue-800 border-blue-300",
    },
    size: {
      sm: "px-2 py-2 text-sm",
      md: "px-3 py-2 text-lg font-bold",
      lg: "px-4 py-2 text-xl font-bold border-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants>;

const Alert = ({ className, variant, size, ...props }: AlertProps) => {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export default Alert;
