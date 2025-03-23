export type StyleTool = "tailwindcss" | "styled-components" | "css-modules";

export type ButtonProps = {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;
