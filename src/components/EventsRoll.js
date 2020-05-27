import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import postStyles from "./posts.module.css";
import EventsRollRow from "./EventsRollRow";
// import Img from "gatsby-image";
// import EventDate from "./EventDate";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const EventsRoll = (props) => {
  const { data } = props;
  const { edges: events } = data.allMarkdownRemark;

  let futureEvents = [];
  let pastEvents = [];
  const allEvents = events.map(({ node: event }) => {
    if (
      dayjs(event.frontmatter.date, "MMMM DD, YYYY").isAfter(
        dayjs().format("MMMM DD, YYYY")
      )
    ) {
      futureEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  console.log(pastEvents);
  console.log(futureEvents);

  return (
    <section className={postStyles.list}>
      <h2>Future events</h2>
      {futureEvents &&
        futureEvents.map((event) => (
          <div className={postStyles.events} key={event.id}>
            <EventsRollRow event={event} />
          </div>
        ))}
      <h2>Past events</h2>
      {pastEvents &&
        pastEvents.map((event) => (
          <div className={postStyles.events} key={event.id}>
            <EventsRollRow event={event} />
          </div>
        ))}
    </section>
  );
};

EventsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query EventsRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
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
                    fixed(width: 240, height: 240) {
                      ...GatsbyImageSharpFixed
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
