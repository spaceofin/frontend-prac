import { ButtonProps } from "../types/button";
import styles from "./button.module.css";

const Button = ({
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}
    />
  );
};

export default Button;
