import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
import PageLinksWithPhotos from "../components/PageLinksWithPhotos";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
import NavbarLower from "../components/NavbarLower";
// import { Link } from 'gatsby'
import HeadingH1 from "../components/HeadingH1";
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
    padding: 1em 4em;
  }
  @media (min-width: 1040px) {
    padding: 1em 8em;
  }
`;

export const PagePhotoLinksTemplate = ({
  title,
  content,
  links,
  contentComponent,
  path,
  displayOptions,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      className="section section--gradient"
      style={{
        paddingBottom: "0",
      }}
    >
      <NavbarLower path={path} />
      <div className="container">
        <article className="content">
          <div className="columns">
            <main className={`column is-9 ${pageBasicStyles.main}`}>
              <TextSection>
                <HeadingH1 text={title} />
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
              <PageLinksWithPhotos
                pagelinks={links}
                displayHeading={false}
                displayOptions={displayOptions}
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

const PagePhotoLinks = ({ data }) => {
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
      <PagePhotoLinksTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

export default PagePhotoLinks;

export const PagePhotoLinksQuery = graphql`
  query PagePhotoLinks($id: String!) {
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
          smallImage: photo {
            childImageSharp {
              fixed(width: 250, height: 125) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
