import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import postStyles from "./posts.module.css";
import Img from "gatsby-image";
import EventDate from "./EventDate";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const EventsRoll = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section className={postStyles.list}>
      {posts &&
        posts.map(({ node: post }) => (
          <div className={postStyles.events} key={post.id}>
            {dayjs(post.frontmatter.date, "MMMM DD, YYYY").isAfter(
              dayjs().format("MMMM DD, YYYY")
            ) && (
              <article className={postStyles.list__item}>
                {post.frontmatter.photo && (
                  <Img
                    fixed={post.frontmatter.photo.childImageSharp.fixed}
                    className={postStyles.list__aside}
                  />
                )}
                <div className={postStyles.list__main}>
                  <p>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      <EventDate
                        date={post.frontmatter.date}
                        endDate={post.frontmatter.endDate}
                      />
                    </span>
                    <span className="subtitle">
                      {post.frontmatter.location}
                    </span>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </article>
            )}
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
                date(formatString: "MMMM DD, YYYY")
                endDate(formatString: "MMMM DD, YYYY")
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
