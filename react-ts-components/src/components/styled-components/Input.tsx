import styled from "styled-components";
import { InputProps } from "../types/input";

const inputVariants = {
  default: `
    background-color: rgb(229, 231, 235);
    border: none;
    border-radius: 0.375rem;
  `,
  outline: `
    border: 1px solid rgb(156, 163, 175);
    border-radius: 0.375rem;
  `,
  underline: `
    border: none;
    border-bottom: 2px solid rgb(31, 41, 55);
  `,
};

const inputSizes = {
  sm: `
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  md: `
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  `,
  lg: `
    padding: 0.75rem 1rem;
    font-size: 1.125rem;
  `,
};

const StyledInput = styled.input<InputProps>`
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ variant }) => inputVariants[variant || "default"]}
  ${({ size }) => inputSizes[size || "md"]}
`;

const Input = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: InputProps) => {
  return <StyledInput variant={variant} size={size} {...props} />;
};

export default Input;
