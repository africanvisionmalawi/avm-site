import React from "react";
import PropTypes from "prop-types";
// import { v4 } from 'uuid'
import { Link } from "gatsby";
import pageLinksStyles from "./pagelinks.module.css";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PageLinks = ({ pagelinks }) => (
  <div className={pageLinksStyles.cardCont}>
    {pagelinks.map(pagelink => (
      <div className={pageLinksStyles.card} key={pagelink.linkTitle}>
        <Link to={pagelink.url} className="card-image">
          <span className={pageLinksStyles.cardImage}>
            <PreviewCompatibleImage imageInfo={pagelink.photo} />
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
    ))}
  </div>
);

PageLinks.propTypes = {
  pagelinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkTitle: PropTypes.string,
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      linkText: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default PageLinks;
