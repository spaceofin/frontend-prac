export type AlertProps = {
  className?: string;
  variant?: "default" | "success" | "warning" | "destructive" | "info";
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"div">;
