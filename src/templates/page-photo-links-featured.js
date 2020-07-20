import React from "react";
// import PropTypes from "prop-types";
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
// import EventsCardLayout from "../components/EventsCardLayout";
// import { Link } from 'gatsby'
import pageBasicStyles from "../components/pageBasic.module.css";
import styled from "styled-components";
import { getFeaturedLinks } from "../utils/helpers";

const Section = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  padding-bottom: 30px;
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

export const PagePhotoLinksFeaturedTemplate = (props) => {
  const {
    title,
    content,
    links,
    contentComponent,
    path,
    displayOptions,
  } = props;
  const PageContent = contentComponent || Content;

  const featuredLinks = getFeaturedLinks(links, true);
  const otherLinks = getFeaturedLinks(links, false);

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
          {featuredLinks.length && (
            <Section>
              <PageLinksWithPhotos
                pagelinks={featuredLinks}
                displayHeading={displayOptions.displayHeadings}
                showPageLink={displayOptions.showPageLink}
                heading={displayOptions.heading1}
                featured={true}
              />
            </Section>
          )}
          {otherLinks.length && (
            <Section className="full-width-container margin-top-0">
              <PageLinksWithPhotos
                pagelinks={otherLinks}
                displayHeading={displayOptions.displayHeadings}
                showPageLink={displayOptions.showPageLink}
                heading={displayOptions.heading2}
                featured={false}
              />
            </Section>
          )}
        </article>
        <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
        />

        <FeaturedProjectsTiles displayHeading={true} />
      </div>
    </div>
  );
};

const PagePhotoLinksFeatured = ({ data }) => {
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
      <PagePhotoLinksFeaturedTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        displayOptions={post.frontmatter.displayOptions}
        content={post.html}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

export default PagePhotoLinksFeatured;

export const PagePhotoLinksFeaturedQuery = graphql`
  query PagePhotoLinksFeatured($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        displayOptions {
          showPageLink
          displayHeadings
          heading1
          heading2
        }
        description
        links {
          linkTitle
          largeImage: photo {
            childImageSharp {
              fluid(maxWidth: 560, maxHeight: 280) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          smallImage: photo {
            childImageSharp {
              fixed(width: 250, height: 125) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          linkText
          url
          featured
        }
      }
    }
  }
`;
