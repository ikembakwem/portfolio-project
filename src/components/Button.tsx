import styled from "@emotion/styled";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return variant === "primary" ? (
    <Primary {...rest}>{children}</Primary>
  ) : (
    <Secondary {...rest}>{children}</Secondary>
  );
};

const Primary = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  height: 44px;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: blue;
  border: 2px solid blue;
  color: #fff;
`;

const Secondary = styled(Primary)`
  background-color: #fff;
  color: blue;
`;
