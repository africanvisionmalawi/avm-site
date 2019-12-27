import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
// import Img from "gatsby-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import pageBasicStyles from "../components/pageBasic.module.css";
import EventDate from "../components/EventDate";

export const EventsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  endDate,
  allDay,
  location,
  cost,
  url,
  helmet,
  photo
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <main className={`column is-8 is-offset-1 ${pageBasicStyles.main}`}>
            {photo && Object.keys(photo.childImageSharp.fluid).length ? (
              <PreviewCompatibleImage imageInfo={photo} />
            ) : null}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>
              Date(s): <EventDate date={date} endDate={endDate} />
            </p>
            <p>Location: {location}</p>
            <p>contact: none telephone: 0 cost: &pound;{cost}</p>
            <p>{description}</p>
            <PostContent content={content} />

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </main>
          <aside className="column is-4">
            <ul>
              <li>
                <Link to="/events/">View all events</Link>
              </li>
              {/* component with latest 5 events goes here */}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

EventsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  endDate: PropTypes.string,
  allday: PropTypes.bool,
  location: PropTypes.string,
  contact: PropTypes.number,
  telephone: PropTypes.number,
  cost: PropTypes.number,
  url: PropTypes.string,
  tags: PropTypes.array,
  helmet: PropTypes.object,
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const EventsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <EventsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Events">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        endDate={post.frontmatter.endDate}
        allDay={post.frontmatter.allDay}
        location={post.frontmatter.location}
        contact={post.frontmatter.number}
        telephone={post.frontmatter.number}
        cost={post.frontmatter.cost}
        url={post.frontmatter.url}
        photo={post.frontmatter.photo}
      />
    </Layout>
  );
};

EventsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EventsPost;

export const pageQuery = graphql`
  query EventsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
            fluid(maxWidth: 450, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
