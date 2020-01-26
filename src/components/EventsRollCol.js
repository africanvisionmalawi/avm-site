import React from "react";
import PropTypes from "prop-types";
// import { v4 } from 'uuid'
import { Link } from "gatsby";
import eventsColStyles from "./eventsCol.module.css";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
import EventDate from "./EventDate";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const EventsCol = ({ events }) => (
  <div className={eventsColStyles.cardCont}>
    {events &&
      events.map(({ node: event }) => (
        <div className={eventsColStyles.eventsColInner}>
          {dayjs(event.frontmatter.date, "MMMM DD, YYYY").isAfter(
            dayjs().format("MMMM DD, YYYY")
          ) &&
            event.frontmatter.published && (
              <div className={eventsColStyles.card} key={event.fields.slug}>
                <div className="card-image">
                  <Link to={event.fields.slug}>
                    <span className={eventsColStyles.cardImage}>
                      <Img
                        fixed={event.frontmatter.photo.childImageSharp.fixed}
                      />
                    </span>
                  </Link>
                </div>
                <div className={eventsColStyles.cardContent}>
                  <div className="content">
                    <h3>{event.frontmatter.title}</h3>
                    <p>
                      <EventDate
                        date={event.frontmatter.date}
                        endDate={event.frontmatter.endDate}
                      />
                    </p>
                    <p>{event.excerpt}</p>
                    <Link
                      to={event.fields.slug}
                      className={eventsColStyles.btn}
                    >
                      find out more
                    </Link>
                  </div>
                </div>
              </div>
            )}
        </div>
      ))}
  </div>
);

EventsCol.propTypes = {
  events: PropTypes.object
};

export default EventsCol;
