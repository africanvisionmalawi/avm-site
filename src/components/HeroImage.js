import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
// import { Link } from 'gatsby'
import heroStyles from "./heroimage.module.css";
import styled, { css } from "styled-components";

const hero = ({
  heroImage,
  heroMsg,
  heroHeading,
  heroHeadingType,
  displayHeroMsg,
}) => {
  let heroHeadingHtml, heroMsgHtml;
  if (heroHeading) {
    if (heroHeadingType === "h1") {
      heroHeadingHtml = <HeroHeadingH1>{heroHeading}</HeroHeadingH1>;
    } else {
      heroHeadingHtml = <HeroHeadingH2>{heroHeading}</HeroHeadingH2>;
    }
  }
  if (heroMsg) {
    heroMsgHtml = <HeroMsg>{heroMsg}</HeroMsg>;
  }

  return (
    <HeroContainer>
      <div
        className={`full-width-image-container margin-top-0 margin-bottom-0 ${heroStyles.heroCont}`}
      >
        {displayHeroMsg && (
          <HeroMsgCont>
            {heroHeadingHtml}
            {heroMsgHtml}
          </HeroMsgCont>
        )}
        <Img fluid={heroImage.childImageSharp.fluid} alt="" />
        {/* {headingText && <Heading>{headingText}</Heading>} */}
        <Overlay />
        {/* {heroMsg !== "null" ? (
          <div className={heroStyles.heroText}>{heroMsg}</div>
        ) : null} */}
      </div>
      <Divider>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Divider>
    </HeroContainer>
  );
};

hero.propTypes = {
  heroImage: PropTypes.object,
  heroMsg: PropTypes.string,
};

const HeroHeadingCss = css`
  font-size: 2em;
  margin: 0.5em auto 0.5em;
  text-align: center;
  @media (min-width: 1024px) {
    color: #fff;
    font-size: 2.3em;
    margin: 0 auto;
    text-shadow: 0 0 20px #000;
  }
  @media (min-width: 1280px) {
    font-size: 2.5em;
  }
`;

const HeroContainer = styled.div`
  // max-height: 540px;
  // overflow: hidden;
  position: relative;
`;

const HeroHeadingH1 = styled.h1`
  ${HeroHeadingCss}
`;

const HeroHeadingH2 = styled.h2`
  ${HeroHeadingCss}
`;

const HeroMsg = styled.p`
  font-size: 1.3em;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 1024px) {
    color: #fff;
    text-shadow: 0 0 20px #000;
  }
  @media (min-width: 1280px) {
    font-size: 1.5em;
  }
`;

const Overlay = styled.div`
  background-image: linear-gradient(
    to bottom,
    transparent 0,
    rgba(0, 0, 0, 0.5) 100%
  );
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const HeroMsgCont = styled.div`
  @media (min-width: 1024px) {
    // background: rgba(194, 126, 52, 0.9);
    bottom: 60px;
    left: 50%;
    // max-height: 540px;
    max-width: 880px;
    padding: 15px;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;
    z-index: 100;
  }
  @media (min-width: 1280px) {
    max-width: 1080px;
    padding: 30px;
  }
`;

const Divider = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 75;
    & svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 25px;
    }

    & .shape-fill {
      fill: #ffffff;
    }
  }
`;

export default hero;
