import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FeaturedProjects from "../components/FeaturedProjects";
import Gallery from "../components/Gallery";
import CtaButton from "../components/CtaButton";

export const PageGalleryTemplate = ({
  title,
  content,
  contentComponent,
  gallery
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
                  {gallery.length && (
                    <section
                      className=""
                      style={{
                        background: "#f2f2f2",
                        borderBottom: "1px solid #e5e5e5",
                        marginBottom: "0",
                        paddingBottom: "30px"
                      }}
                    >
                      <h2>Photo updates</h2>
                      <Gallery
                        gallery={gallery}
                        initialState={{ showDialog: false }}
                      />
                    </section>
                  )}
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

PageGalleryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  gallery: PropTypes.array
};

const PageGallery = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageGalleryTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        gallery={post.frontmatter.gallery}
      />
    </Layout>
  );
};

PageGallery.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageGallery;

export const pageBasicQuery = graphql`
  query PageGallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
