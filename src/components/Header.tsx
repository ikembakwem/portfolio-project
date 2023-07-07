import styled from "@emotion/styled";
import { Navigations } from "./Navigations";
import { Button } from "./Button";

export const Header = () => {
  return (
    <HeaderStyles>
      <LogoContainer>
        <h2>IKE</h2>
      </LogoContainer>
      <NavContainer>
        <Navigations />
      </NavContainer>
      <CTAContainer>
        <Button>Hire me</Button>
        <Button variant="secondary">Got a project</Button>
      </CTAContainer>
    </HeaderStyles>
  );
};

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTAContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderStyles = styled.header`
  display: flex;
  padding: 0.75rem 1.5rem;
  height: 67px;
`;
