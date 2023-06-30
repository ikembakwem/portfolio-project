import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface Props {
  data: string;
}

const TypewriterAnimation = styled.span<{ delay: number }>`
  opacity: 0;
  animation: typewriter 3s ${({ delay }) => delay}s infinite;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      opacity: 1;
      width: auto;
    }
  }
`;

export const SentenceWriter = ({ data }: Props) => {
  const [sentence, setSentence] = useState("");
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setSentence(data);
    setWords(sentence.split(" "));
  }, [data]);

  return (
    <Styles>
      Hello{" "}
      {words.map((word, index) => (
        <>
          <TypewriterAnimation
            key={word}
            delay={index * 0.5}
          >
            {word}
          </TypewriterAnimation>{" "}
        </>
      ))}
    </Styles>
  );
};

const Styles = styled.p`
  font-size: 70px;
  line-height: 70px;
  font-weight: 700;
  letter-spacing: -0.04em;

  span {
    opacity: 0.87;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
  }
`;
