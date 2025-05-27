import { SelectProps, SelectSize, SelectVariant } from "../types/select";

const Select = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: SelectProps) => {
  const variants: Record<SelectVariant, string> = {
    default: "bg-gray-200 rounded-md",
    ghost: "hover:bg-gray-100 rounded-md",
    underline: "border-b-2 border-gray-800",
  };

  const sizes: Record<SelectSize, string> = {
    sm: "px-1 py-1 h-8 text-sm",
    md: "px-2 py-2 h-10 text-md",
    lg: "px-4 py-2 h-12 text-lg",
  };

  return (
    <select
      className={`transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
};

export default Select;
