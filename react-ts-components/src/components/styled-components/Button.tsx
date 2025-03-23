import React from "react";
import styled from "styled-components";

type ButtonProps = {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;

const buttonVariants = {
  default: `
    background-color: rgb(229, 231, 235);
    &:hover {
      background-color: rgb(209, 213, 219);
    }
  `,
  outline: `
    border: 1px solid rgb(107, 114, 128);
    background-color: transparent;
    &:hover {
      background-color: rgb(243, 244, 246);
    }
  `,
  ghost: `
    color: rgb(55, 65, 81);
    &:hover {
      background-color: rgb(243, 244, 246);
    }
  `,
};

const buttonSizes = {
  sm: `
    padding: 0.25rem 0.5rem;
    height: 2rem;
    font-size: 0.875rem;
  `,
  md: `
    padding: 0.5rem 1rem;
    height: 2.5rem;
    font-size: 1rem;
  `,
  lg: `
    padding: 0.75rem 1.5rem;
    height: 3rem;
    font-size: 1.125rem;
    font-weight: bold;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  ${({ variant }) => buttonVariants[variant || "default"]}
  ${({ size }) => buttonSizes[size || "md"]}
`;

const Button = ({
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) => {
  return <StyledButton variant={variant} size={size} {...props} />;
};

export default Button;
