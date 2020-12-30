import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Layout from "../components/Layout";
import HeroImage from "../components/HeroImage";
import Content, { HTMLContent } from "../components/Content";
// import Img from "gatsby-image";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import NavbarLower from "../components/NavbarLower";
import EventDate from "../components/EventDate";
import { styled } from "linaria/react";

// const Section = styled.section`
//   margin: 0 auto;
//   max-width: 1180px;
//   width: 100%;
// `;

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: 24rem;
  margin: 0 auto;
  max-width: 1180px;
  padding: 1em 2em;
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    padding: 2em 4em;
  }
  @media (min-width: 1040px) {
    padding: 4em 8em;
  }
`;

const Main = styled.main`
  background: #fff;
  border-radius: 2px;
`;

export const EventsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  endDate,
  hideTime,
  allDay,
  location,
  cost,
  url,
  helmet,
  photo,
  path,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <NavbarLower path={path} />
      <div className="container content">
        <section>
          {photo && (
            <HeroImage
              heroImage={photo}
              displayHeroMsg={true}
              heroHeading={title}
              heroHeadingType="h1"
            />
          )}
        </section>
        <article>
          <Main>
            <TextSection>
              <p>
                <EventDate
                  date={date}
                  endDate={endDate}
                  hideTime={hideTime}
                  allDay={allDay}
                />
              </p>
              <p>Location: {location}</p>
              <p>contact: none telephone: 0 cost: &pound;{cost}</p>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <Link to="/events/">View all events</Link>
            </TextSection>
          </Main>
        </article>
      </div>
    </section>
  );
};

const EventsPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { siteUrl } = useSiteMetadata();
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        pathname={`${siteUrl}${post.fields.slug}`}
        article={true}
      />
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
        hideTime={post.frontmatter.hideTime}
        allDay={post.frontmatter.allDay}
        location={post.frontmatter.location}
        contact={post.frontmatter.number}
        telephone={post.frontmatter.number}
        cost={post.frontmatter.cost}
        url={post.frontmatter.url}
        photo={post.frontmatter.photo}
        path={post.fields.slug}
      />
    </Layout>
  );
};

EventsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default EventsPost;

export const pageQuery = graphql`
  query EventsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
            fluid(maxWidth: 1918, maxHeight: 540, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
