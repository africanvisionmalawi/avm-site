import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
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
import HeroMsg from "../components/HeroMsg";
import NavbarLower from "../components/NavbarLower";
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
  // min-height: 24rem;
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

export const FeaturedProjectsSimpleTemplate = ({
  heroImage,
  heroMsg,
  heroMsgSource,
  title,
  currentProject,
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
      <NavbarLower path={path} />
      <div className="container">
        <section>
          <HeroImage
            heroImage={heroImage}
            displayHeroMsg={true}
            heroHeading={title}
            heroHeadingType="h1"
          />
        </section>

        <article className="content">
          <div className="columns">
            <main className={`column is-9 ${pageBasicStyles.main}`}>
              <TextSection>
                {heroMsg && (
                  <HeroMsg heroMsg={heroMsg} heroMsgSource={heroMsgSource} />
                )}
                <PageContent className="content" content={content} />{" "}
              </TextSection>
              <Donate
                link="https://www.charitycheckout.co.uk/1113786/"
                text="Donate"
              />
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
              <div className="column is-10 is-offset-1">
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
  heroMsgSource: PropTypes.string,
  title: PropTypes.string,
  currentProject: PropTypes.string,
  content: PropTypes.string,
  links: PropTypes.array,
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
        content={post.html}
        heroImage={post.frontmatter.heroImage}
        heroMsg={post.frontmatter.heroMsg}
        heroMsgSource={post.frontmatter.heroMsgSource}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

FeaturedProjectsPageSimple.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
            fluid(maxWidth: 1918, maxHeight: 540, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroMsg
        heroMsgSource
        currentProject
        links {
          linkTitle
          smallImage: photo {
            childImageSharp {
              fixed(width: 250, height: 125) {
                ...GatsbyImageSharpFixed_withWebp
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
