export type SelectSize = "sm" | "md" | "lg";
export type SelectVariant = "default" | "ghost" | "underline";

export type SelectProps = {
  className?: string;
  variant?: SelectVariant;
  size?: SelectSize;
} & Omit<React.ComponentProps<"select">, "size">;
