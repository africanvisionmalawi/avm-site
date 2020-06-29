import React from "react";
// import PropTypes from "prop-types";
// import { v4 } from 'uuid'
import { Link } from "gatsby";
import pageLinksStyles from "./pagelinks.module.css";
// import ImageFixed from "../components/ImageFixed";
import Img from "gatsby-image";
import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
`;

const PageLinks = ({ pagelinks, displayHeading, heading, featured }) => {
  let headingText = "Find out more";
  if (heading) {
    headingText = heading;
  }
  return (
    <div>
      {displayHeading && <Heading>{headingText}</Heading>}
      <div
        className={
          featured === true
            ? pageLinksStyles.cardContWide
            : pageLinksStyles.cardCont
        }
      >
        {pagelinks.map((pagelink) => {
          // let sources = [
          //   pagelink.smallImage.childImageSharp.fluid,
          //   {
          //     ...pagelink.largeImage.childImageSharp.fluid,
          //     media: `(min-width: 576px)`,
          //   },
          // ];
          // console.log("sources", sources);
          // console.log("here", pagelink.smallImage.childImageSharp.fluid);
          return (
            <div
              className={
                featured === true
                  ? pageLinksStyles.cardWide
                  : pageLinksStyles.card
              }
              key={pagelink.linkTitle}
            >
              <Link to={pagelink.url} className="card-image">
                <span className={pageLinksStyles.cardImage}>
                  {featured === true ? (
                    <Img
                      fluid={pagelink.largeImage.childImageSharp.fluid}
                      alt=""
                      imgStyle={{ objectFit: "contain" }}
                    />
                  ) : (
                    <Img
                      fixed={pagelink.smallImage.childImageSharp.fixed}
                      alt=""
                      imgStyle={{ objectFit: "contain" }}
                    />
                  )}
                </span>
              </Link>
              <div className={pageLinksStyles.cardContent}>
                <div className="content">
                  <h3>{pagelink.linkTitle}</h3>

                  <p>{pagelink.linkText}</p>
                  <Link to={pagelink.url} className={pageLinksStyles.btn}>
                    Find out more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// PageLinks.propTypes = {
//   pagelinks: PropTypes.arrayOf(
//     PropTypes.shape({
//       linkTitle: PropTypes.string,
//       photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       linkText: PropTypes.string,
//       url: PropTypes.string,
//     })
//   ),
// };

PageLinks.defaultProps = {
  displayHeading: true,
};

export default PageLinks;
