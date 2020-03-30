import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col } from "antd";
// import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import HeroImage from "../components/HeroImage";
import videoStyles from "../components/videos.module.css";
import ReactPlayer from "react-player";
import BlogRollCard from "../components/BlogRollCard";
// import BlogRollLandscape from "../components/BlogRollLandscape";
import EventsRollCard from "../components/EventsRollCard";
import postStyles from "../components/posts.module.css";
import homepageStyles from "../components/homepage.module.css";
import { Link } from "gatsby";
import styled from "styled-components";

const HomepageMain = styled.section`
  background: #fff;
`;

const TopSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: 0 auto;
  max-width: 980px;
  padding: 3em 2em;
  position: relative;
  width: 100%;
`;

const TopHero = styled.div`
  background-image: url(/img/hero/homepage-hero.jpg);
  background-position: 50% 0;
  background-size: cover;
  min-height: 600px;
`;

const TopHeroText = styled(Col)`
  padding: 30px 0 0;
  text-align: center;
`;

const H1Heading = styled.h1`
  font-family: "Clicker Script", Cursive;
  font-size: 3.4em;
  text-align: center;
`;

const SubHeading = styled.p`
  text-align: center;
`;

const ContentSection = styled.section`
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
`;

const SectionHeading = styled.span`
  display: block;
  font-family: "Raleway";
  font-size: 1.8em;
  font-weight: bold;
  padding-right: 12px;
`;

const SectionSubHeading = styled.span`
  display: block;
  font-family: "Raleway";
  font-size: 1.4em;
  padding-right: 12px;
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
            <Row type="flex" justify="center">
              <TopHeroText sm={14}>
                <H1Heading>Welcome to African Vision Malawi</H1Heading>
                <SubHeading>
                  (known as The Landirani Trust in Malawi).
                </SubHeading>
                <h2>Our vision</h2>
                <p>
                  Since 2005 African Vision Malawi has been helping children and
                  vulnerable people in Malawi, one of the poorest countries in
                  the world.
                </p>
                <p>
                  Our vision is to see a "healthy, educated and self-sufficient
                  community in Malawi".
                </p>
              </TopHeroText>
            </Row>
            <HeroImage heroImage={heroImage} heroMsg="" />
            {/* <TopHero></TopHero> */}

            <TopSection>
              <Row type="flex" justify="center">
                <Col xs={24} md={8}>
                  <SectionHeading>
                    The people of Malawi want to help themselves.
                  </SectionHeading>
                  <SectionSubHeading>
                    We can empower them to become self-sufficient and
                    independent.
                  </SectionSubHeading>
                </Col>
                <Col xs={24} md={16}>
                  <div className={videoStyles.playerWrapper}>
                    <ReactPlayer
                      url={promoVideo}
                      width="100%"
                      height="100%"
                      className={videoStyles.reactPlayer}
                      controls={true}
                    />
                  </div>
                </Col>
              </Row>
            </TopSection>

            <ContentSection>
              <FeaturedProjectsTiles
                currentProject="home"
                displayHeading={true}
              />
            </ContentSection>

            <section>
              {homeContent.map(({ node: home }) => (
                <div className={`${homepageStyles.latestNewsBox}`}>
                  <h2 className={homepageStyles.latestNewsHeading}>
                    Latest news
                  </h2>
                  <div
                    className={homepageStyles.latestNews}
                    dangerouslySetInnerHTML={{ __html: home.html }}
                  />
                </div>
              ))}
              <div className={homepageStyles.newsCont}>
                <div className={homepageStyles.cardCont}>
                  {posts &&
                    posts.map(({ node: post }) => (
                      <div key={post.fields.slug}>
                        <BlogRollCard post={post} />
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
                className={`has-text-weight-bold is-size-3 ${homepageStyles.eventsHeading}`}
              >
                Latest events
              </h2>
              <div className={homepageStyles.newsCont}>
                <div className={homepageStyles.cardCont}>
                  {events &&
                    events.map(({ node: event }) => (
                      <EventsRollCard event={event} key={event.fields.slug} />
                    ))}
                </div>
              </div>

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

export const lgRectImage = graphql`
  fragment photoTileFixedLgRect on File {
    childImageSharp {
      fixed(width: 980, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const mdRectImage = graphql`
  fragment photoTileFixedMdRect on File {
    childImageSharp {
      fixed(width: 480, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const pageQuery = graphql`
  query IndexQuery {
    heroImage: file(relativePath: { eq: "hero/homepage-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1918, quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
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
            published
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fixed(width: 300, height: 180) {
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
            published
            templateKey
            date(formatString: "MMMM DD, YYYY")
            photo {
              childImageSharp {
                fixed(width: 300, height: 180) {
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
