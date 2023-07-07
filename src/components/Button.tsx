import styled from "@emotion/styled";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variants?: "primary" | "secondary";
}

export const Button = ({
  children,
  variants = "primary",
  ...rest
}: ButtonProps) => (
  <ButtonStyles {...rest}>{children}</ButtonStyles>
);

const ButtonStyles = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  height: 44px;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: blue;
  color: #fff;
`;
