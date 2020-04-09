import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const HeroMsgDiv = styled.div`
  margin: 3em auto;
  max-width: 650px;
`;

const Content = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.6em;
  text-align: center;
`;

const Citation = styled.div`
  font-size: 0.8em;
  text-align: right;
`;

const HeroMsg = (props) => {
  const heroMsg = props.heroMsg.replace(/(?:\r\n|\r|\n)/g, "<br>");
  return (
    <HeroMsgDiv>
      <Content
        dangerouslySetInnerHTML={{
          __html: heroMsg,
        }}
      />
      {props.heroMsgSource && <Citation>{props.heroMsgSource}</Citation>}
    </HeroMsgDiv>
  );
};

// HeroMsg.propTypes = {

// };

export default HeroMsg;
