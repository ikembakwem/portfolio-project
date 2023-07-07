import styled from "@emotion/styled";
import { Container } from "./Layouts";
import { Button } from "./Button";

export const Hero = () => (
  <section>
    <Container>
      <Content>
        <Intro>
          Hi ✋,
          <br />
        </Intro>
        <Title>am Ikechukwu a Front-End Developer</Title>
        <SubTitle>
          I create web experiences that are user-friendly,
          solve real-world problems, and achieve business
          goals.
        </SubTitle>
        <CTAWrapper>
          <Button>Hire me</Button>
          <Button variant="secondary">Got a project</Button>
        </CTAWrapper>
      </Content>
    </Container>
  </section>
);

const CTAWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  text-align: center;
`;

const Intro = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.43;
`;

const SubTitle = styled.p`
  margin-top: 16px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.43;
  color: #403d3d;
`;

const Title = styled.h1`
  font-size: 62px;
  line-height: 62px;
  font-weight: 700;
  max-width: 720px;
  letter-spacing: -0.04em;
`;

const MotionSentence = styled.div`
  font-weight: 600;
  font-size: 32px;
  p {
    opacity: 0.87;
    display: inline-block;
  }
`;
