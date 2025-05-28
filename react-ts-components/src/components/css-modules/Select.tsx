import { SelectProps } from "../types/select";
import styles from "./Select.module.css";

const Select = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: SelectProps) => {
  return (
    <select
      className={`${styles.Select} ${styles[variant]} ${styles[size]}`}
      {...props}
    />
  );
};

export default Select;
