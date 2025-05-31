import { AlertProps } from "../types/alert";

const Alert = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: AlertProps) => {
  const variants = {
    default: "bg-gray-100 text-gray-800 border-gray-300",
    success: "bg-green-100 text-green-800 border-green-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    destructive: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  const sizes = {
    sm: "px-2 py-2 text-sm",
    md: "px-3 py-2 text-lg font-bold",
    lg: "px-4 py-2 text-xl font-bold border-2",
  };

  return (
    <div
      role="alert"
      className={`rounded-sm border flex items-center ${variants[variant]} ${
        sizes[size]
      } ${className || ""}`}
      {...props}
    />
  );
};

export default Alert;
