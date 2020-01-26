import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Seo from "../components/seo";
import FeaturedProjects from "../components/FeaturedProjects";
import CtaButton from "../components/CtaButton";
import pageBasicStyles from "../components/pageBasic.module.css";

export const PageBasicTemplate = ({
  title,
  description,
  content,
  contentComponent,
  pageContext
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      {/* {helmet || ""} */}

      <div className="container">
        <div className="columns">
          <div className="column is-14 is-offset-1">
            <article className="content">
              <div className="columns">
                <main className={`column is-8 ${pageBasicStyles.main}`}>
                  <h1 className="has-text-weight-semibold is-size-2">
                    {title}
                  </h1>
                  <PageContent className="content" content={content} />
                  <CtaButton
                    link="https://www.charitycheckout.co.uk/1113786/"
                    text="Donate"
                  />
                </main>
                <aside className="column is-4">
                  <FeaturedProjects
                    currentProject="default"
                    displayHeading={true}
                  />
                </aside>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

PageBasicTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageContext: PropTypes.object
};

const PageBasic = ({ data, pathContext }) => {
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
      />
    </Layout>
  );
};

PageBasic.propTypes = {
  data: PropTypes.object.isRequired
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
