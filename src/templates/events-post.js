import { graphql, Link } from "gatsby";
import { styled } from "linaria/react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import EventDate from "../components/EventDate";
import HeroImage from "../components/HeroImage";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";

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

const EventDetails = styled.div`
  background: #f7f7f7;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 16px 16px 4px;
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
  multidate_event,
  contact,
  telephone,
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
              <EventDetails>
                <p>
                  <EventDate
                    date={date}
                    endDate={endDate}
                    hideTime={hideTime}
                    allDay={allDay}
                  />
                </p>
                {location && <p>Location: {location}</p>}
                {contact && <p>Contact: {contact}</p>}
                {telephone && <p>Telephone: {telephone}</p>}
                {cost && <p>&pound;{cost}</p>}
              </EventDetails>
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
        multidate_event={post.frontmatter.multidate_event}
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
        contact
        telephone
        published
        title
        date
        multidate_event
        allDay
        endDate
        location
        cost
        url
        description
        tags
        photo {
          childImageSharp {
            fluid(maxWidth: 1918, maxHeight: 540, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
