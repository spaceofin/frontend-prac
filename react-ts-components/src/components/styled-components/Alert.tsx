import { AlertProps } from "../types/alert";
import styled from "styled-components";

const alertVariants = {
  default: `
    background-color: rgb(243, 244, 246);
    color: rgb(31, 41, 55);
    border-color: rgb(209, 213, 219);
  `,
  success: `
    background-color: rgb(209, 250, 229);
    color: rgb(22, 101, 52);
    border-color: rgb(134, 239, 172);
  `,
  warning: `
   background-color: rgb(254, 249, 195);
  color: rgb(133, 77, 14);
  border-color: rgb(253, 224, 71);
  `,
  destructive: `
    background-color: rgb(254, 226, 226);
    color: rgb(153, 27, 27);
    border-color: rgb(252, 165, 165);
  `,
  info: `
    background-color: rgb(219, 234, 254);
    color: rgb(30, 64, 175);
    border-color: rgb(147, 197, 253);
  `,
};

const alertSizes = {
  sm: `
    padding: 0.5rem 0.5rem;
    font-size: 0.875rem;
  `,
  md: `
    padding: 0.5rem 0.75rem;
    font-size: 1.125rem;
    font-weight: bold;
  `,
  lg: `
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    border-width: 2px;
  `,
};

const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 0.25rem;

  ${({ variant }) => alertVariants[variant || "default"]}
  ${({ size }) => alertSizes[size || "md"]}
`;

const Alert = ({ variant = "default", size = "md", ...props }: AlertProps) => {
  return <StyledAlert role="alert" variant={variant} size={size} {...props} />;
};

export default Alert;
