import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { Row, Col } from "antd";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
import PageLinksWithPhotos from "../components/PageLinksWithPhotos";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
import Breadcrumbs from "../components/Breadcrumbs";
import EventsCardLayout from "../components/EventsCardLayout";
// import { Link } from 'gatsby'
import pageBasicStyles from "../components/pageBasic.module.css";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
`;

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

export const PagePhotoLinksEventsTemplate = ({
  title,
  content,
  links,
  contentComponent,
  path,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      className="section section--gradient"
      style={{
        paddingBottom: "0",
      }}
    >
      <Breadcrumbs path={path} />
      <div className="container">
        <article className="content">
          <div className="columns">
            <main className={`column is-9 ${pageBasicStyles.main}`}>
              <TextSection>
                <h1 className="has-text-weight-semibold is-size-2">{title}</h1>
                <PageContent className="content" content={content} />{" "}
              </TextSection>
            </main>
          </div>
          {links.length && (
            <Section
              className="full-width-container margin-top-0"
              style={{
                background: "#fff",
                // borderBottom: "1px solid #e5e5e5",
                marginBottom: "0",
                paddingBottom: "30px",
              }}
            >
              <PageLinksWithPhotos pagelinks={links} displayHeading={false} />
            </Section>
          )}
        </article>
        <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
        />
        <Section>
          <EventsCardLayout />
        </Section>
        <FeaturedProjectsTiles displayHeading={true} />
      </div>
    </div>
  );
};

const PagePhotoLinksEvents = ({ data }) => {
  const { markdownRemark: post } = data;
  const { siteUrl } = useSiteMetadata();
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <Seo
        title={`${post.frontmatter.title} - ${title}`}
        description={post.frontmatter.description}
        pathname={`${siteUrl}${post.fields.slug}`}
        article={false}
      />
      <PagePhotoLinksEventsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

export default PagePhotoLinksEvents;

export const PagePhotoLinksEventsQuery = graphql`
  query PagePhotoLinksEvents($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        links {
          linkTitle
          photo {
            childImageSharp {
              fluid(maxWidth: 250, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linkText
          url
        }
      }
    }
  }
`;
