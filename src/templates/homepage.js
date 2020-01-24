import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import FeaturedProjects from "../components/FeaturedProjects";
import HeroImage from "../components/HeroImage";
import videoStyles from "../components/videos.module.css";
import ReactPlayer from "react-player";
// import BlogRollCard from "../components/BlogRollCard";
import BlogRollLandscape from "../components/BlogRollLandscape";
import EventsRollCol from "../components/EventsRollCol";
import postStyles from "../components/posts.module.css";
import homepageStyles from "../components/homepage.module.css";
import { Link } from "gatsby";
import styled from "styled-components";

const HomepageMain = styled.section`
  background: #fff;
  margin-top: 3rem;
  padding: 0 1.5rem 3rem;
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { edges: events } = data.eventsPosts;
    const { edges: homeContent } = data.homePage;
    const { edges: homeMeta } = data.homePage;
    const heroImage = this.props.data.heroImage;
    const heroMsg =
      "The people of Malawi want to help themselves. We can empower them to become self-sufficient and independent.";
    const promoVideo = homeContent[0].node.frontmatter.promoVideo;
    // const { siteUrl } = useSiteMetadata();

    return (
      <Layout>
        <Seo
          title={homeMeta[0].node.frontmatter.title}
          description={homeMeta[0].node.frontmatter.description}
          pathname={"/"}
          article={false}
        />
        <HomepageMain>
          <div className="container">
            <section>
              <HeroImage heroImage={heroImage} heroMsg={heroMsg} />
            </section>
            <FeaturedProjects currentProject="home" />
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                Welcome to African Vision Malawi (known as The Landirani Trust
                in Malawi).
              </h1>
            </div>
            <section className={homepageStyles.topSection}>
              <div className="column">
                <div className={homepageStyles.box}>
                  <h2 className="has-text-weight-bold is-size-3">Our vision</h2>
                  <p>
                    Since 2005 African Vision Malawi has been helping children
                    and vulnerable people in Malawi, one of the poorest
                    countries in the world.
                  </p>
                  <p>
                    Our vision is to see a "healthy, educated and
                    self-sufficient community in Malawi".
                  </p>
                </div>
              </div>
              <div className="column">
                <div className={videoStyles.playerWrapper}>
                  <ReactPlayer
                    url={promoVideo}
                    width="100%"
                    height="100%"
                    className={videoStyles.reactPlayer}
                  />
                </div>
              </div>
            </section>
            <section>
              <div className={homepageStyles.latestNewsCont}>
                {homeContent.map(({ node: home }) => (
                  <div className={`${homepageStyles.latestNewsBox}`}>
                    <h2 className="has-text-weight-bold is-size-3">
                      Latest news
                    </h2>
                    <div
                      className={homepageStyles.latestNews}
                      dangerouslySetInnerHTML={{ __html: home.html }}
                    />
                  </div>
                ))}
                <div className={postStyles.contLandscape}>
                  {posts &&
                    posts.map(({ node: post }) => (
                      <div key={post.fields.slug}>
                        <BlogRollLandscape post={post} />
                      </div>
                    ))}
                </div>
              </div>
            </section>
            {/* <div className={postStyles.cont}>
              {posts &&
                posts.map(({ node: post }) => (
                  <div key={post.fields.slug}>
                    <BlogRollCard post={post} />
                  </div>
                ))}
            </div> */}
            <div className={homepageStyles.allPostsFooter}>
              <Link to="/news" className={homepageStyles.allPostsLink}>
                View all news
              </Link>
            </div>
            <section>
              <h2
                className={`has-text-weight-bold is-size-3 ${homepageStyles.sectionHeading}`}
              >
                Latest events
              </h2>
              <EventsRollCol events={events} />

              <div className={homepageStyles.allPostsFooter}>
                <Link to="/events" className={homepageStyles.allPostsLink}>
                  View all events
                </Link>
              </div>
            </section>
          </div>
        </HomepageMain>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    heroImage: file(relativePath: { eq: "mainphoto_home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 110)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fixed(width: 280, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    homePage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homepage" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            promoVideo
          }
          html
        }
      }
    }
    eventsPosts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "events-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 110)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            photo {
              childImageSharp {
                fixed(width: 280, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
