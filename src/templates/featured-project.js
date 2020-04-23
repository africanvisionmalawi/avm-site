import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col } from "antd";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
import HeroImage from "../components/HeroImage";
import Gallery from "../components/Gallery";
// import Lightbox from "../components/lightbox"
import PageLinksWithPhotos from "../components/PageLinksWithPhotos";
import Videos from "../components/Videos";
// import FeaturedProjects from "../components/FeaturedProjects";
import Breadcrumbs from "../components/Breadcrumbs";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import Donate from "../components/Donate";
// import { Link } from 'gatsby'
// import pageBasicStyles from "../components/pageBasic.module.css";
// import styled from "styled-components";
import { styled } from "linaria/react";

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

const Main = styled.main`
  background: #fff;
  border-radius: 2px;
`;

const Container = styled.div``;

// const GalleryCont = styled.section`
// background: #f7f7f7;
//   border-top: 1px solid #d7dade;
//   border-bottom: 1px solid #d7dade;
//   width: 100%;
// `;

// const GalleryInner = styled.div`
//   margin: 0 auto;
//   max-width: 1050px;
//   width: 100%;
// `

export const FeaturedProjectsTemplate = ({
  heroImage,
  heroMsg,
  title,
  currentProject,
  columns,
  content,
  videos,
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
      <Breadcrumbs path={path} />
      <Container>
        <section>
          <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
        </section>

        <article className="content">
          <Main>
            <TextSection>
              <h1 className="has-text-weight-semibold is-size-2">{title}</h1>
              <PageContent className="content" content={content} />{" "}
            </TextSection>
            <Donate
              link="https://www.charitycheckout.co.uk/1113786/"
              text="Donate"
            />
          </Main>
          {columns === 2 ? (
            <aside className="column is-4">side col goes here</aside>
          ) : (
            ""
          )}

          {videos.length && (
            <Section
              className="full-width-container margin-top-0"
              style={{
                background: "#fff",
                // borderBottom: "1px solid #e5e5e5",
                marginBottom: "0",
                paddingBottom: "30px",
              }}
            >
              <div className="column is-10">
                <h2>Videos</h2>
                <Videos videos={videos} />
              </div>
            </Section>
          )}
          {gallery.length && (
            <Gallery gallery={gallery} initialState={{ showDialog: false }} />
          )}
          {links.length && (
            <Section
              className="full-width-container margin-top-0"
              style={{
                background: "#fff",
                // borderBottom: "1px solid #e5e5e5",
                marginBottom: "0",
                paddingBottom: "90px",
              }}
            >
              <div className="column is-10">
                <h2>Find out more...</h2>
                <PageLinksWithPhotos pagelinks={links} />
              </div>
            </Section>
          )}
        </article>
        <FeaturedProjectsTiles currentProject="default" displayHeading={true} />
      </Container>
    </div>
  );
};

FeaturedProjectsTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroMsg: PropTypes.string,
  title: PropTypes.string,
  currentProject: PropTypes.string,
  columns: PropTypes.number,
  content: PropTypes.string,
  videos: PropTypes.array,
  gallery: PropTypes.array,
  links: PropTypes.array,
};

const FeaturedProjectsPage = ({ data }) => {
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
      <FeaturedProjectsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        currentProject={post.frontmatter.currentProject}
        columns={post.frontmatter.columns}
        content={post.html}
        heroImage={post.frontmatter.heroImage}
        heroMsg={post.frontmatter.heroMsg}
        videos={post.frontmatter.videos}
        gallery={post.frontmatter.gallery}
        links={post.frontmatter.links}
        path={post.fields.slug}
      />
    </Layout>
  );
};

FeaturedProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FeaturedProjectsPage;

export const FeaturedProjectsPageQuery = graphql`
  query FeaturedProjectsPage($id: String!) {
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
        videos {
          videourl
          videotext
        }
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
