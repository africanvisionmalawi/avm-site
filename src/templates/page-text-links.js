import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Content, { HTMLContent } from "../components/Content";
import Donate from "../components/Donate";
// import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import PageLinks from "../components/PageLinks";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: 24rem;
  margin: 0 auto;
  max-width: 885px;
  padding: 3em 2em 2em;
  position: relative;
  width: 100%;
`;

export const PageTextLinksTemplate = ({
  title,
  content,
  contentComponent,
  links,
  path,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* {helmet || ""} */}
      <NavbarLower path={path} />
      <div className="container">
        <article className="content">
          <TextSection>
            <h1 className="has-text-weight-semibold is-size-2">{title}</h1>
            <PageContent className="content" content={content} />
            <PageLinks pagelinks={links} />
          </TextSection>
        </article>

        <Donate
          link="https://www.charitycheckout.co.uk/1113786/"
          text="Donate"
        />
        <FeaturedProjectsTiles currentProject="default" displayHeading={true} />
      </div>
    </div>
  );
};

PageTextLinksTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  links: PropTypes.array,
};

const PageTextLinks = ({ data }) => {
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
      <PageTextLinksTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

PageTextLinks.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageTextLinks;

export const pageBasicQuery = graphql`
  query PageTextLinks($id: String!) {
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
          linkText
          url
        }
      }
    }
  }
`;
