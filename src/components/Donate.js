import React from "react";
import CtaButton from "./CtaButton";
import styled from "styled-components";

const Container = styled.div`
  background: #f7f7f7;
  border-top: 1px solid #d7dade;
  border-bottom: 1px solid #d7dade;
  margin-bottom: 3em;
  padding: 30px 0;
  text-align: center;
`;

const Donate = props => {
  return (
    <Container>
      <CtaButton link={props.link} text={props.text} />
    </Container>
  );
};

export default Donate;
