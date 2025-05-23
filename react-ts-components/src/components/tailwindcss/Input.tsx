import { InputProps, InputSize, InputVariant } from "../types/input";

const Input = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: InputProps) => {
  const variants: Record<InputVariant, string> = {
    default: "border bg-gray-200 border-none",
    outline: "border border-gray-400",
    underline: "border-b-2 border-gray-800",
  };

  const sizes: Record<InputSize, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-md",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <input
      className={`transition-all ${variants[variant]} ${sizes[size]} ${
        variant !== "underline" ? "rounded-md" : ""
      } ${className || ""}`}
      {...props}
    />
  );
};

export default Input;
