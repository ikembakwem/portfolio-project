import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface Props {
  sentence: string;
}

export const AnimatedParagraph = ({ sentence }: Props) => {
  const [words, setWords] = useState<string[]>([]);

  const splitText = (text: string) => text.split(" ");

  useEffect(() => {
    setWords(splitText(sentence));
  }, [sentence]);

  return (
    <Sentence>
      <span>I </span>
      {words.map((word, index) => (
        <AnimatedSpan
          key={index}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {word}{" "}
        </AnimatedSpan>
      ))}
    </Sentence>
  );
};

const AnimatedSpan = styled.span`
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Sentence = styled.p`
  font-size: 54px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -0.04em;
  color: #0052ff;
`;
