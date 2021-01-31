import Img from "gatsby-image";
import { styled } from "linaria/react";
import React from "react";
import Divider from "../Divider";

export const HeroImage = ({
  heroImage,
  heroMsg,
  heroHeading,
  heroHeadingType,
  displayHeroMsg,
  hasMobileImage,
  desktopImage,
  mobileImage,
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
  let sources;
  if (heroImage.hasMobileImage === true) {
    sources = [
      mobileImage.childImageSharp.fluid,
      {
        ...desktopImage.childImageSharp.fluid,
        media: `(min-width: 625px)`,
      },
    ];
  } else {
    sources = heroImage.childImageSharp.fluid;
  }

  return (
    <HeroContainer>
      <HeroCont>
        {displayHeroMsg && (
          <HeroMsgCont>
            {heroHeadingHtml}
            {heroMsgHtml}
          </HeroMsgCont>
        )}

        <Img fluid={sources} alt="" imgStyle={{ objectFit: "contain" }} />

        <Overlay />
        {/* {heroMsg !== "null" ? (
          <div className={heroStyles.heroText}>{heroMsg}</div>
        ) : null} */}
      </HeroCont>
      <Divider />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
`;

const HeroCont = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  position: relative;
`;

const HeroHeadingH1 = styled.h1`
  font-size: 2em;
  margin: 3rem auto 0.5rem;
  text-align: center;
  @media (min-width: 580px) {
    margin-top: 2rem;
  }
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

const HeroHeadingH2 = styled.h2`
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
  @media (max-width: 1023px) {
    display: none;
  }
`;

const HeroMsgCont = styled.div`
  padding: 1rem;
  @media (min-width: 1024px) {
    // background: rgba(194, 126, 52, 0.9);
    bottom: 60px;
    left: 50%;
    // max-height: 540px;
    max-width: 880px;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;
    z-index: 100;
  }
  @media (min-width: 1280px) {
    max-width: 1080px;
  }
`;
