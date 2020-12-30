import React from "react";
import CardDouble from "./card/CardDouble";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import postStyles from "./posts.module.css";
import pageLinksStyles from "./pagelinks.module.css";
import getEvents from "../utils/helpers";

import styled from "styled-components";
// import Img from "gatsby-image";
// import EventDate from "./EventDate";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const NoEventsNotice = (props) => {
  return <p>{props.msg}</p>;
};

const EventsRoll = (props) => {
  const { data } = props;
  const { edges: events } = data.allMarkdownRemark;

  let futureEvents = [];
  let pastEvents = [];
  const allEvents = events.map(({ node: event }) => {
    if (event.frontmatter.endDate) {
      if (
        dayjs(event.frontmatter.endDate, "MMMM DD, YYYY").isAfter(
          dayjs().format("MMMM DD, YYYY")
        )
      ) {
        futureEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    } else {
      if (
        dayjs(event.frontmatter.date, "MMMM DD, YYYY").isAfter(
          dayjs().format("MMMM DD, YYYY")
        )
      ) {
        futureEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    }
  });

  // let findAllEvents = getEvents(events);
  // console.log("allevents ", findAllEvents);

  // console.log("future ", futureEvents);

  // console.log(pastEvents);
  // console.log(futureEvents);

  return (
    <div>
      <Heading>Future events</Heading>
      <div className={pageLinksStyles.cardContWide}>
        {futureEvents.length ? (
          futureEvents.map((event) => (
            <div className={postStyles.events} key={event.id}>
              {/* <CardWide content={event} /> */}
              <CardDouble
                largeImage={event.frontmatter.photo}
                url={event.fields.slug}
                title={event.frontmatter.title}
                linkText={event.excerpt}
                showPageLink={true}
                date={event.frontmatter.date}
                endDate={event.frontmatter.endDate}
                displayDate={true}
                location={event.frontmatter.location}
                displayLocation={true}
              />
            </div>
          ))
        ) : (
          <NoEventsNotice msg="Sorry, no events available at present." />
        )}
      </div>
      <Heading>Past events</Heading>
      <div className={pageLinksStyles.cardContWide}>
        {pastEvents.length ? (
          pastEvents.map((event) => (
            <div className={postStyles.events} key={event.id}>
              <CardDouble
                largeImage={event.frontmatter.photo}
                url={event.fields.slug}
                title={event.frontmatter.title}
                linkText={event.excerpt}
                showPageLink={true}
                date={event.frontmatter.date}
                endDate={event.frontmatter.endDate}
                displayDate={true}
                location={event.frontmatter.location}
                displayLocation={true}
              />
            </div>
          ))
        ) : (
          <NoEventsNotice msg="Sorry, no events available at present." />
        )}
      </div>
    </div>
  );
};

EventsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const Heading = styled.h2`
  font-size: 3.4em;
  margin: 0;
  text-align: center;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query EventsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "events-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                layout
                title
                date
                endDate
                hideTime
                allDay
                location
                cost
                url
                description
                tags
                photo {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EventsRoll data={data} count={count} />}
  />
);
