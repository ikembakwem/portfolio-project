import styled from "@emotion/styled";
import { AnimatedParagraph } from "./components/textRevealAnimation";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Container } from "./components/Layouts";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <AnimatedParagraph sentence="love going out on the weekend with friends to have fun and chillax for the new work week" />
        </Container>
      </main>
    </>
  );
}

export default App;
