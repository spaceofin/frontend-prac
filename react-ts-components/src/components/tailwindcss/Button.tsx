import React from "react";

type ButtonProps = {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;

const Button = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const variants = {
    default: "bg-gray-200 hover:bg-gray-300",
    outline: "border border-gray-500 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-1 py-1 h-8 text-sm",
    md: "px-4 py-2 h-10 text-md",
    lg: "px-6 py-2 h-12 text-lg font-bold",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md transition-all  ${
        variants[variant]
      } ${sizes[size]} ${className || ""}`}
      {...props}
    />
  );
};

export default Button;
