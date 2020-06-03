import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
// import { Link } from 'gatsby'
import heroStyles from "./heroimage.module.css";
import styled from "styled-components";

const hero = ({ heroImage, heroMsg, headingText }) => (
  <div
    className={`full-width-image-container margin-top-0 margin-bottom-0 ${heroStyles.heroCont}`}
  >
    <Img fluid={heroImage.childImageSharp.fluid} alt="" />
    {headingText && <Heading>{headingText}</Heading>}
    {/* {heroMsg !== "null" ? (
      <div className={heroStyles.heroText}>{heroMsg}</div>
    ) : null} */}
  </div>
);

hero.propTypes = {
  heroImage: PropTypes.object,
  heroMsg: PropTypes.string,
};

// background: rgba(0, 0, 0, 0.3);
const Heading = styled.h1`
  background-image: linear-gradient(
    to bottom,
    transparent 0,
    rgba(0, 0, 0, 0.7) 100%
  );
  bottom: 0;
  color: #fff;
  font-size: 2.2em;
  left: 0;
  margin: 0 auto;
  padding: 12px;
  position: absolute;
  text-align: center;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  width: 100%;
  @media (min-width: 480px) {
    font-size: 3em;
  }
  @media (min-width: 1209px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    left: 50%;
    transform: translateX(-590px);
    width: 1180px;
  }
`;

export default hero;
