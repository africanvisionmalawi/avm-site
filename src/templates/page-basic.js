import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { graphql } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Seo from "../components/seo";
// import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
import Breadcrumbs from "../components/Breadcrumbs";
// import pageBasicStyles from "../components/pageBasic.module.css";
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

export const PageBasicTemplate = ({
  title,
  description,
  content,
  contentComponent,
  path,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section">
      {/* {helmet || ""} */}
      <Breadcrumbs path={path} />
      <div className="container">
        <article className="content">
          <main>
            <TextSection>
              <h1 className="has-text-weight-semibold is-size-2">{title}</h1>
              <PageContent className="content" content={content} />
            </TextSection>
          </main>
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

PageBasicTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageContext: PropTypes.object,
};

const PageBasic = ({ data }) => {
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
      <PageBasicTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        description={post.frontmatter.description}
        path={post.fields.slug}
      />
    </Layout>
  );
};

PageBasic.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageBasic;

export const pageBasicQuery = graphql`
  query PageBasic($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
  }
`;
