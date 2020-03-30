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
  border: 1px solid #dee8fa;
  border-radius: 4px;
  color: #3273dc;
  display: block;
  font-weight: bold;
  padding: 8px;
  text-align: center;
`;

const EventsCol = ({ event }) => (
  <>
    {dayjs(event.frontmatter.date, "MMMM DD, YYYY").isAfter(
      dayjs().format("MMMM DD, YYYY")
    ) &&
      event.frontmatter.published && (
        <div className={postStyles.card} key={event.fields.slug}>
          <article className={postStyles.cardContent}>
            <Link to={event.fields.slug}>
              <div className={postStyles.imageCont}>
                <Img fixed={event.frontmatter.photo.childImageSharp.fixed} />
              </div>

              <span className={postStyles.postHeading}>
                {event.frontmatter.title}
              </span>
              <span className={postStyles.cardDate}>
                <EventDate
                  date={event.frontmatter.date}
                  endDate={event.frontmatter.endDate}
                />
              </span>
              <p className={postStyles.cardExcerpt}>{event.excerpt}</p>
              <ColLink>find out more</ColLink>
            </Link>
          </article>
        </div>
      )}
  </>
);

EventsCol.propTypes = {
  events: PropTypes.object
};

export default EventsCol;
