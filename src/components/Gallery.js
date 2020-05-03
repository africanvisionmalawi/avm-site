import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import galleryStyles from "./gallery.module.css";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
`;

const Gallery = (props) => {
  const [showLightboxState, setShowLightboxState] = useState(false);

  const [selectedImageState, setSelectedImageState] = useState(0);

  const showLightboxHandler = (event) => {
    // console.log("show lightbox");
    setShowLightboxState(true);
  };

  const hideLightboxHandler = (event) => {
    // console.log("hide lightbox");
    setShowLightboxState(false);
  };

  const goBack = () => {
    setSelectedImageState(selectedImageState - 1);
  };

  const goForward = () => {
    setSelectedImageState(selectedImageState + 1);
  };

  const { gallery } = props;
  const dialogStyles = {
    zIndex: 1000,
  };

  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles.galleryInner}>
        <Heading>Photo updates</Heading>
        <div className={galleryStyles.gallery}>
          {gallery.map((gall, i) => (
            <span
              className={galleryStyles.gridCell}
              onClick={() => (
                setShowLightboxState(true), setSelectedImageState(i)
              )}
              key={v4()}
              // onKeyPress={handleKeyPress}
              role="button"
              tabIndex={0}
            >
              <figure className="image">
                <PreviewCompatibleImage imageInfo={gall.photo} />
              </figure>
            </span>
          ))}
          {showLightboxState && (
            <DialogOverlay style={dialogStyles}>
              <DialogContent>
                <div className={galleryStyles.dialogInner}>
                  {/* img is {this.state.selectedImage} */}
                  <Img
                    fluid={
                      gallery[selectedImageState].photo.childImageSharp.fluid
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    onClick={hideLightboxHandler}
                    className={galleryStyles.closeicon}
                  >
                    <path
                      fill="#1a222d"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                    />
                  </svg>
                </div>
                <div className={galleryStyles.leftRightCont}>
                  <button onClick={goBack} disabled={selectedImageState === 0}>
                    Previous
                  </button>
                  <button
                    onClick={goForward}
                    disabled={selectedImageState === gallery.length - 1}
                  >
                    Next
                  </button>
                </div>
              </DialogContent>
            </DialogOverlay>
          )}
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,
    })
  ),
};

export default Gallery;
