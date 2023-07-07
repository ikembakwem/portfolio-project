import styled from "@emotion/styled";
import { Navigations } from "./Navigations";

export const Header = () => {
  return (
    <HeaderStyles>
      <LogoContainer />
      <NavContainer>
        <Navigations />
      </NavContainer>
      <CTAContainer />
    </HeaderStyles>
  );
};

const LogoContainer = styled.div`
  border: 4px solid red;
  flex: 1;
  height: 60px;
`;

const NavContainer = styled.div`
  border: 4px solid blue;
  flex: 1;
  height: 60px;
`;

const CTAContainer = styled.div`
  border: 4px solid yellow;
  flex: 1;
  height: 60px;
`;

const HeaderStyles = styled.header`
  display: flex;
`;
