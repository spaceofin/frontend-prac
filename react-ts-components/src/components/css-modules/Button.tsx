import React from "react";
import styles from "./button.module.css";

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
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        className || ""
      }`}
      {...props}
    />
  );
};

export default Button;
