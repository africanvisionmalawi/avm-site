import { styled } from "linaria/react";
import React from "react";

const TextSection = styled.div`
  margin: 0 auto;
  max-width: 885px;
  padding: 4.5rem 1rem 0;
  position: relative;
  width: 100%;
  h1 {
    margin-bottom: 1rem;
  }
`;

export const SectionTop = ({ children }) => {
  return <TextSection>{children}</TextSection>;
};
