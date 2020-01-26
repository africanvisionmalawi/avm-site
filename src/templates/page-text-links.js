import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";
import Content, { HTMLContent } from "../components/Content";
import FeaturedProjects from "../components/FeaturedProjects";
import PageLinks from "../components/PageLinks";
import CtaButton from "../components/CtaButton";

export const PageTextLinksTemplate = ({
  title,
  content,
  contentComponent,
  links
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-14 is-offset-1">
            <article className="content">
              <div className="columns">
                <main className="column is-8">
                  <h1 className="has-text-weight-semibold is-size-2">
                    {title}
                  </h1>
                  <PageContent className="content" content={content} />
                  <PageLinks pagelinks={links} />
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

PageTextLinksTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  links: PropTypes.array
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
      />
    </Layout>
  );
};

PageTextLinks.propTypes = {
  data: PropTypes.object.isRequired
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
