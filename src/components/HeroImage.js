import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
// import { Link } from 'gatsby'
import heroStyles from "./heroimage.module.css";

const hero = ({ heroImage, heroMsg }) => (
  <div
    className={`full-width-image-container margin-top-0 margin-bottom-0 ${heroStyles.heroCont}`}
  >
    <Img fluid={heroImage.childImageSharp.fluid} alt="" />
    {/* {heroMsg !== "null" ? (
      <div className={heroStyles.heroText}>{heroMsg}</div>
    ) : null} */}
  </div>
);

hero.propTypes = {
  heroImage: PropTypes.object,
  heroMsg: PropTypes.string,
};

export default hero;
