import styled from "@emotion/styled";
import { SentenceWriter } from "./components/SentenceWriter";

function App() {
  return (
    <main>
      <Container>
        <Content>
          <Intro>
            Hello ✋,
            <br />
          </Intro>
          <Title>am Peter a Front-End Developer</Title>
          <SubTitle>
            I design and build user-friendly digital
            products by following industry best practices.
          </SubTitle>
          <CTAWrapper>
            <Button>Got a project</Button>
            <SecondaryButton>Let's talk</SecondaryButton>
          </CTAWrapper>
        </Content>
      </Container>
      <Container>
        <MotionSentence>
          I <p>have a strong eye for design and detail</p>
        </MotionSentence>
      </Container>
    </main>
  );
}

export default App;

const CTAWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 24px 48px;
`;

const Content = styled.div`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-size: 70px;
  line-height: 70px;
  font-weight: 700;
  max-width: 720px;
  letter-spacing: -0.04em;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  height: 44px;
  padding: 12px 24px;
  cursor: pointer;
  background-color: #2b197c;
  border: 2px solid #2b197c;
  color: #fff;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SecondaryButton = styled(Button)`
  color: #2b197c;
  background-color: #fff;
`;

const MotionSentence = styled.div`
  font-weight: 600;
  font-size: 32px;
  p {
    opacity: 0.87;
    display: inline-block;
  }
`;
