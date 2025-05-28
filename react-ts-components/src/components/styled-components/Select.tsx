import styled from "styled-components";
import { SelectProps } from "../types/select";

const selectVariants = {
  default: `
    background-color: rgb(229, 231, 235);
    border-radius: 0.375rem;
  `,
  ghost: `
    background-color: transparent;
    border-radius: 0.375rem;

    &:hover {
    background-color: rgb(243, 244, 246);
  }
  `,
  underline: `
    background: transparent;
    border-bottom: 2px solid rgb(31, 41, 55);
  `,
};

const selectSizes = {
  sm: `
    padding: 0.25rem 0.25rem;
    height: 2rem;
    font-size: 0.875rem;
  `,
  md: `
    padding: 0.5rem 0.55rem;
    height: 2.5rem;
    font-size: 1rem;
  `,
  lg: `
    padding: 0.5rem 1rem;
    height: 3rem;
    font-size: 1.125rem;
  `,
};

const StyledSelect = styled.select<SelectProps>`
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ variant }) => selectVariants[variant || "default"]}
  ${({ size }) => selectSizes[size || "md"]}
`;

const Select = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: SelectProps) => {
  return <StyledSelect variant={variant} size={size} {...props} />;
};

export default Select;
