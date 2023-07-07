import styled from "@emotion/styled";
import {
  ComponentProps,
  FC,
  ReactNode,
  forwardRef,
} from "react";

interface LinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
}

export const Link: FC<LinkProps> = ({
  children,
  ...props
}) => {
  return <LinkStyles {...props}>{children}</LinkStyles>;
};

const LinkStyles = styled.a`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  height: 44px;
`;
