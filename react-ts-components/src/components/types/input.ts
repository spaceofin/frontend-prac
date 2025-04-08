export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "outline" | "underline";

export type InputProps = {
  className?: string;
  variant?: InputVariant;
  size?: InputSize;
} & Omit<React.ComponentProps<"input">, "size">;
