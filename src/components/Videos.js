import React from "react";
import PropTypes from "prop-types";
import videoStyles from "./videos.module.css";
import ReactPlayer from "react-player";

const Videos = ({ videos }) => (
  <div className="columns">
    {videos.map(video => (
      <div key={video.videourl} className="column">
        <div className={videoStyles.playerWrapper}>
          <ReactPlayer
            url={video.videourl}
            width="100%"
            height="100%"
            className={videoStyles.reactPlayer}
            controls={true}
          />
        </div>
        <p className={videoStyles.vidText}>{video.videotext}</p>
      </div>
    ))}
  </div>
);

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      videourl: PropTypes.string,
      videotext: PropTypes.string
    })
  )
};

export default Videos;
