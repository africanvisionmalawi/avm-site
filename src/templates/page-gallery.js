import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
import Gallery from "../components/Gallery";
import Breadcrumbs from "../components/Breadcrumbs";
import pageBasicStyles from "../components/pageBasic.module.css";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  max-width: 1050px;
  width: 100%;
`;

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: 24rem;
  margin: 0 auto;
  max-width: 750px;
  padding: 3em 2em 2em;
  position: relative;
  width: 100%;
`;

export const PageGalleryTemplate = ({
  title,
  content,
  contentComponent,
  gallery,
  path,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section section--gradient">
      <div className="container">
        <Breadcrumbs path={path} />
        <article className="content">
          <main className={`column is-8 ${pageBasicStyles.main}`}>
            <TextSection>
              <h1 className="has-text-weight-semibold is-size-2">{title}</h1>
              <PageContent className="content" content={content} />
            </TextSection>
            <Donate
              link="https://www.charitycheckout.co.uk/1113786/"
              text="Donate"
            />
          </main>
          {gallery.length && (
            <Gallery gallery={gallery} initialState={{ showDialog: false }} />
          )}
        </article>
        <FeaturedProjectsTiles currentProject="default" displayHeading={true} />
      </div>
    </div>
  );
};

PageGalleryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  gallery: PropTypes.array,
};

const PageGallery = ({ data }) => {
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
      <PageGalleryTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        gallery={post.frontmatter.gallery}
        path={post.fields.slug}
      />
    </Layout>
  );
};

PageGallery.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageGallery;

export const pageBasicQuery = graphql`
  query PageGallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        gallery {
          photo {
            childImageSharp {
              fluid(maxWidth: 800, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`;
