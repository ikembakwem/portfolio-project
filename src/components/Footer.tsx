import styled from "@emotion/styled";
import { Container } from "./Layouts";

export const Footer = () => (
  <FooterStyles>
    <Container>
      <Content>
        <div>Ikechukwu Mbakwem</div>
        <div>Copyright ©2023</div>
      </Content>
    </Container>
  </FooterStyles>
);

const FooterStyles = styled.footer`
  display: flex;

  background-color: yellowgreen;
  border: 4px solid blueviolet;
`;

const Content = styled.div`
  display: flex;
  div {
    flex: 1;
  }
`;
