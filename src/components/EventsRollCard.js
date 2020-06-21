import React from "react";
import PropTypes from "prop-types";
// import { v4 } from 'uuid'
import { Link } from "gatsby";
// import eventsColStyles from "./eventsCol.module.css";
import postStyles from "./posts.module.css";
import styled from "styled-components";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
import EventDate from "./EventDate";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const ColLink = styled.span`
  // color: #3273dc;
  display: block;
  // font-weight: bold;
`;

const ImgCont = styled.div`
  border: 1px solid #cacaca;
  & .gatsby-image-wrapper {
    display: block !important;
  }
  margin-bottom: 0.8em;
`;

const EventsCol = ({ event }) => {
  const sources = [
    event.frontmatter.eventMobileImage.childImageSharp.fixed,
    {
      ...event.frontmatter.eventDesktopImage.childImageSharp.fixed,
      media: `(min-width: 414px)`,
    },
  ];
  return (
    <div className={postStyles.card} key={event.fields.slug}>
      <article className={postStyles.cardContent}>
        <Link to={event.fields.slug}>
          <ImgCont>
            <Img fixed={sources} />
          </ImgCont>

          <h3>{event.frontmatter.title}</h3>
          <span className={postStyles.cardDate}>
            <EventDate
              date={event.frontmatter.date}
              endDate={event.frontmatter.endDate}
            />
          </span>
          <p className={postStyles.cardExcerpt}>{event.excerpt}</p>
          <ColLink>Find out more</ColLink>
        </Link>
      </article>
    </div>
  );
};

EventsCol.propTypes = {
  events: PropTypes.object,
};

export default EventsCol;
