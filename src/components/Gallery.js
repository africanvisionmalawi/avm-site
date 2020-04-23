import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import galleryStyles from "./gallery.module.css";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
// import { renderComponent } from "recompose";

class Gallery extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  };

  showLightboxHandler = (event) => {
    console.log("show lightbox");
    this.setState({
      showLightbox: true,
    });
  };

  hideLightboxHandler = (event) => {
    console.log("hide lightbox");
    this.setState({
      showLightbox: false,
    });
  };

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 });
  };

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 });
  };

  render() {
    const { gallery } = this.props;
    const { showLightbox, selectedImage } = this.state;
    const dialogStyles = {
      zIndex: 1000,
    };

    return (
      <div className={galleryStyles.container}>
        <div className={galleryStyles.galleryInner}>
          <h2>Photo updates</h2>
          <div className={galleryStyles.gallery}>
            {gallery.map((gall, i) => (
              <span
                className={galleryStyles.gridCell}
                onClick={() =>
                  this.setState({
                    showLightbox: true,
                    selectedImage: i,
                  })
                }
                key={v4()}
                onKeyPress={this.handleKeyPress}
                role="button"
                tabIndex={0}
              >
                <figure className="image">
                  <PreviewCompatibleImage imageInfo={gall.photo} />
                </figure>
              </span>
            ))}
            {showLightbox && (
              <DialogOverlay style={dialogStyles}>
                <DialogContent>
                  <div className={galleryStyles.dialogInner}>
                    {/* img is {this.state.selectedImage} */}
                    <Img
                      fluid={gallery[selectedImage].photo.childImageSharp.fluid}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      onClick={this.hideLightboxHandler}
                      className={galleryStyles.closeicon}
                    >
                      <path
                        fill="#1a222d"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                      />
                    </svg>
                  </div>
                  <div className={galleryStyles.leftRightCont}>
                    <button
                      onClick={this.goBack}
                      disabled={selectedImage === 0}
                    >
                      Previous
                    </button>
                    <button
                      onClick={this.goForward}
                      disabled={selectedImage === gallery.length - 1}
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
  }
}

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,
    })
  ),
};

export default Gallery;
