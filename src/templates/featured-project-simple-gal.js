import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Content, { HTMLContent } from "../components/Content";
import Donate from "../components/Donate";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Gallery from "../components/Gallery";
import HeroImage from "../components/HeroImage";
import HeroMsg from "../components/HeroMsg";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import pageBasicStyles from "../components/pageBasic.module.css";
import PageLinksWithPhotos from "../components/PageLinksWithPhotos";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";

const Section = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
`;

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: 24rem;
  margin: 0 auto;
  max-width: 1180px;
  padding: 1rem;
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    padding: 1em 4em;
  }
  @media (min-width: 1040px) {
    padding: 1em 8em;
  }
`;

export const FeaturedProjectsSimpleGalTemplate = ({
  heroImage,
  heroMsg,
  heroMsgSource,
  title,
  currentProject,
  content,
  gallery,
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

        <article>
          <main className={`${pageBasicStyles.main}`}>
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

          {links.length && (
            <Section
              className="full-width-container margin-top-0"
              style={{
                background: "#fff",
                marginBottom: "0",
                paddingBottom: "30px",
              }}
            >
              <div className="column is-10 is-offset-1">
                <PageLinksWithPhotos pagelinks={links} />
              </div>
            </Section>
          )}
          {gallery.length && (
            <Gallery gallery={gallery} initialState={{ showDialog: false }} />
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

FeaturedProjectsSimpleGalTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroMsg: PropTypes.string,
  heroMsgSource: PropTypes.string,
  title: PropTypes.string,
  currentProject: PropTypes.string,
  content: PropTypes.string,
  gallery: PropTypes.array,
  links: PropTypes.array,
};

const FeaturedProjectsPageSimpleGal = ({ data }) => {
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
      <FeaturedProjectsSimpleGalTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        currentProject={post.frontmatter.currentProject}
        content={post.html}
        heroImage={post.frontmatter.heroImage}
        heroMsg={post.frontmatter.heroMsg}
        heroMsgSource={post.frontmatter.heroMsgSource}
        gallery={post.frontmatter.gallery}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

FeaturedProjectsPageSimpleGal.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FeaturedProjectsPageSimpleGal;

export const FeaturedProjectsPageSimpleGalQuery = graphql`
  query FeaturedProjectsPageSimpleGal($id: String!) {
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
        gallery {
          photo {
            childImageSharp {
              fluid(maxWidth: 800, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          alt
        }
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
