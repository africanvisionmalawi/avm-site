import { styled } from "linaria/react";
import React from "react";
import CtaButton from "./CtaButton";

const Container = styled.div`
  background: #58b5d7;
  margin-bottom: 3em;
  padding: 30px 0;
  text-align: center;
`;

const Donate = (props) => {
  return (
    <Container>
      <CtaButton link={props.link} text={props.text} placement="alt" />
    </Container>
  );
};

export default Donate;
