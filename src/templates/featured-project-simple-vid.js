import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
import HeroImage from "../components/HeroImage";
// import Gallery from '../components/Gallery'
// import Lightbox from "../components/lightbox"
import PageLinksWithPhotos from "../components/PageLinksWithPhotos";
import Videos from "../components/Videos";
import FeaturedProjects from "../components/FeaturedProjects";
import CtaButton from "../components/CtaButton";
// import { Link } from 'gatsby'
import pageBasicStyles from "../components/pageBasic.module.css";

export const FeaturedProjectsSimpleVidTemplate = ({
  heroImage,
  heroMsg,
  title,
  currentProject,
  columns,
  content,
  videos,
  links,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section
      className="section section--gradient"
      style={{
        paddingBottom: "0"
      }}
    >
      <div className="container">
        <div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <section>
                <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
              </section>
              <FeaturedProjects currentProject={currentProject} />
              <article className="content">
                <div className="columns">
                  <main className={`column is-10 ${pageBasicStyles.main}`}>
                    <h1 className="has-text-weight-semibold is-size-2">
                      {title}
                    </h1>
                    <PageContent className="content" content={content} />{" "}
                    <CtaButton
                      link="https://www.charitycheckout.co.uk/1113786/"
                      text="Donate"
                    />
                  </main>
                  {columns === 2 ? (
                    <aside className="column is-4">side col goes here</aside>
                  ) : (
                    ""
                  )}
                </div>
                {videos.length && (
                  <section
                    className="full-width-container margin-top-0"
                    style={{
                      background: "#f2f2f2",
                      borderBottom: "1px solid #e5e5e5",
                      marginBottom: "0",
                      paddingBottom: "30px"
                    }}
                  >
                    <div className="column is-10">
                      <h2>Videos</h2>
                      <Videos videos={videos} />
                    </div>
                  </section>
                )}
                {links.length && (
                  <section
                    className="full-width-container margin-top-0"
                    style={{
                      background: "#f2f2f2",
                      borderBottom: "1px solid #e5e5e5",
                      marginBottom: "0",
                      paddingBottom: "30px"
                    }}
                  >
                    <div className="column is-10">
                      <h2>Find out more...</h2>
                      <PageLinksWithPhotos pagelinks={links} />
                    </div>
                  </section>
                )}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturedProjectsSimpleVidTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroMsg: PropTypes.string,
  title: PropTypes.string,
  currentProject: PropTypes.string,
  columns: PropTypes.number,
  content: PropTypes.string,
  videos: PropTypes.array,
  links: PropTypes.array
};

const FeaturedProjectsPageSimpleVid = ({ data }) => {
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
      <FeaturedProjectsSimpleVidTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        currentProject={post.frontmatter.currentProject}
        columns={post.frontmatter.columns}
        content={post.html}
        heroImage={post.frontmatter.heroImage}
        heroMsg={post.frontmatter.heroMsg}
        videos={post.frontmatter.videos}
        links={post.frontmatter.links}
      />
    </Layout>
  );
};

FeaturedProjectsPageSimpleVid.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default FeaturedProjectsPageSimpleVid;

export const FeaturedProjectsPageSimpleVidQuery = graphql`
  query FeaturedProjectsPageSimpleVid($id: String!) {
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
