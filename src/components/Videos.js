import React from "react";
import PropTypes from "prop-types";
import videoStyles from "./videos.module.css";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(326px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 15px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Videos = ({ videos }) => (
  <div>
    <Heading>Videos</Heading>
    <Container>
      {videos.map((video) => (
        <div key={video.videourl}>
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
    </Container>
  </div>
);

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      videourl: PropTypes.string,
      videotext: PropTypes.string,
    })
  ),
};

export default Videos;
