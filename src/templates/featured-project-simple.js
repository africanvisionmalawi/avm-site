import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col } from "antd";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
import HeroImage from "../components/HeroImage";
// import Gallery from "../components/Gallery";
// import Lightbox from "../components/lightbox"
import PageLinksWithPhotos from "../components/PageLinksWithPhotos";
// import Videos from '../components/Videos'
// import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
// import { Link } from 'gatsby'
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
  padding: 2em;
  position: relative;
  width: 100%;
`;

export const FeaturedProjectsSimpleTemplate = ({
  heroImage,
  heroMsg,
  title,
  currentProject,
  columns,
  content,
  links,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      className="section section--gradient"
      style={{
        paddingBottom: "0"
      }}
    >
      <div className="container">
        <section>
          <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
        </section>

        <article className="content">
          <div className="columns">
            <main className={`column is-9 ${pageBasicStyles.main}`}>
              <TextSection>
                <h1 className="has-text-weight-semibold is-size-2">{title}</h1>
                <PageContent className="content" content={content} />{" "}
              </TextSection>
              <Donate
                link="https://www.charitycheckout.co.uk/1113786/"
                text="Donate"
              />
            </main>
            {columns === 2 ? (
              <aside className="column is-5">side col goes here</aside>
            ) : (
              ""
            )}
          </div>
          {links.length && (
            <Section
              className="full-width-container margin-top-0"
              style={{
                background: "#fff",
                // borderBottom: "1px solid #e5e5e5",
                marginBottom: "0",
                paddingBottom: "30px"
              }}
            >
              <div className="column is-10 is-offset-1">
                <h2>Find out more...</h2>
                <PageLinksWithPhotos pagelinks={links} />
              </div>
            </Section>
          )}
        </article>

        <FeaturedProjectsTiles
          currentProject={currentProject}
          displayHeading={true}
        />
      </div>
    </div>
  );
};

FeaturedProjectsSimpleTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroMsg: PropTypes.string,
  title: PropTypes.string,
  currentProject: PropTypes.string,
  columns: PropTypes.number,
  content: PropTypes.string,
  links: PropTypes.array
};

const FeaturedProjectsPageSimple = ({ data }) => {
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
      <FeaturedProjectsSimpleTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        currentProject={post.frontmatter.currentProject}
        columns={post.frontmatter.columns}
        content={post.html}
        heroImage={post.frontmatter.heroImage}
        heroMsg={post.frontmatter.heroMsg}
        links={post.frontmatter.links}
      />
    </Layout>
  );
};

FeaturedProjectsPageSimple.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default FeaturedProjectsPageSimple;

export const FeaturedProjectsPageSimpleQuery = graphql`
  query FeaturedProjectsPageSimple($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroMsg
        currentProject
        columns
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
