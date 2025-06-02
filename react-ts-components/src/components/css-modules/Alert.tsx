import { AlertProps } from "../types/alert";
import styles from "./alert.module.css";

const Alert = ({ variant = "default", size = "md", ...props }: AlertProps) => {
  return (
    <div
      className={`${styles.alert} ${styles[variant]} ${styles[size]}`}
      {...props}
    />
  );
};

export default Alert;
