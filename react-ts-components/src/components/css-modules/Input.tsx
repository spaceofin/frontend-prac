import { InputProps } from "../types/input";
import styles from "./input.module.css";

const Input = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={`${styles.input} ${styles[variant]} ${styles[size]}`}
      {...props}
    />
  );
};

export default Input;
