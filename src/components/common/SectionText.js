import { styled } from "linaria/react";
import React from "react";

const TextSection = styled.div`
  margin: 0 auto;
  max-width: 885px;
  padding: 3em 1em;
  position: relative;
  width: 100%;
`;

export const SectionText = ({ children }) => {
  return <TextSection>{children}</TextSection>;
};
