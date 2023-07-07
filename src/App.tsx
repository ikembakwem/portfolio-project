import styled from "@emotion/styled";
import { AnimatedParagraph } from "./components/textRevealAnimation";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
        </Container>
        <Container>
          <AnimatedParagraph sentence="love going out on the weekend with friends to have fun and chillax for the new work week" />
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  max-width: 1280px;
  padding: 24px 48px;
`;

export default App;
