import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col } from "antd";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import HeroImage from "../components/HeroImage";
import videoStyles from "../components/videos.module.css";
import ReactPlayer from "react-player";
import BlogRollCard from "../components/BlogRollCard";
import EventsRollCard from "../components/EventsRollCard";
import homepageStyles from "../components/homepage.module.css";
import { Link } from "gatsby";
import styled from "styled-components";

const IndexPage = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const { edges: events } = data.eventsPosts;
  const { edges: homeContent } = data.homePage;
  const { edges: homeMeta } = data.homePage;
  const heroImage = data.heroImage;
  // const heroMsg =
  //   "The people of Malawi want to help themselves. We can empower them to become self-sufficient and independent.";
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
            <TopHeroText sm={16}>
              <H1Heading>Welcome to African Vision Malawi</H1Heading>
              <SubHeading>(known as The Landirani Trust in Malawi).</SubHeading>
              <H2HeadingTop>Our vision</H2HeadingTop>
              <Statement>
                Since 2005 African Vision Malawi has been helping children and
                vulnerable people in Malawi, one of the poorest countries in the
                world.
              </Statement>
              <Statement>
                Our vision is to see a "healthy, educated and self-sufficient
                community in Malawi".
              </Statement>
            </TopHeroText>
          </Row>
          <HeroImage heroImage={heroImage} heroMsg="" />
          {/* <TopHero></TopHero> */}

          <AltTopSection>
            <TopVideoSection>
              <Col xs={24} md={8}>
                <SectionHeading>
                  The people of Malawi want to help themselves.
                </SectionHeading>
                <SectionSubHeading>
                  We can empower them to become self-sufficient and independent.
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
            </TopVideoSection>
          </AltTopSection>

          <LowerSection>
            <FeaturedProjectsTiles
              currentProject="home"
              displayHeading={true}
            />
          </LowerSection>

          <AltTopSection>
            <div className={`${homepageStyles.latestNewsBox}`}>
              <H2Heading>Latest news</H2Heading>
              <div
                className={homepageStyles.latestNews}
                dangerouslySetInnerHTML={{
                  __html: homeContent[0].node.html,
                }}
              />
            </div>
          </AltTopSection>
          <section>
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
          <PostsFooter>
            <PostsFooterLink to="/news">View all news</PostsFooterLink>
          </PostsFooter>
          {events && events.length ? (
            <section>
              <H2Heading>Latest events</H2Heading>
              <div className={homepageStyles.newsCont}>
                <div className={homepageStyles.cardCont}>
                  {events &&
                    events.map(({ node: event }) => (
                      <EventsRollCard event={event} key={event.fields.slug} />
                    ))}
                </div>
              </div>

              <PostsFooter>
                <PostsFooterLink to="/events">View all events</PostsFooterLink>
              </PostsFooter>
            </section>
          ) : null}
        </div>
      </HomepageMain>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const HomepageMain = styled.section`
  background: #fff;
`;

const TopSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: 0 auto;
  max-width: 1180px;
  padding: 3em 2em;
  position: relative;
  width: 100%;
`;

const AltTopSection = styled.section`
  background: #f7f7f7;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: 0 auto;
  max-width: 1180px;
  padding: 2.5em 2em 1em;
  position: relative;
  width: 100%;
`;

const LowerSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: 0 auto;
  max-width: 1180px;
  padding: 3em 0;
  position: relative;
  width: 100%;
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

const H2Heading = styled.h2`
  font-family: "Clicker Script", Cursive;
  font-size: 3.2em;
  margin: 0 0 0.5em;
  text-align: center;
`;

const H2HeadingTop = styled.h2`
  font-size: 2.3em;
`;
const Statement = styled.p`
  font-size: 1.3em;
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
  margin-bottom: 2.5em;
  padding-right: 12px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const TopVideoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 120px;
  max-width: 1080px;
  text-align: center;
  @media (min-width: 778px) {
    text-align: left;
  }
`;

const PostsFooter = styled.div`
  height: 50px;
  margin: 0 auto 5rem;
  max-width: 1180px;
  position: relative;
  &::before {
    bottom: 50%;
    content: "";
    border-bottom: 1px solid #3273dc;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
`;

const PostsFooterLink = styled(Link)`
  background: #fff;
  border: 2px solid #3273dc;
  border-radius: 12px;
  color: #3273dc;
  display: inline-block;
  font-size: 0.8em;
  left: 50%;
  margin-left: -80px;
  padding: 4px 24px;
  position: absolute;
  text-align: center;
  top: 10%;
  width: 160px;
  z-index: 20;
`;

export default IndexPage;

export const lgRectImage = graphql`
  fragment photoTileFixedLgRect on File {
    childImageSharp {
      fluid(maxWidth: 980, maxHeight: 300) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

export const mdRectImage = graphql`
  fragment photoTileFixedMdRect on File {
    childImageSharp {
      fluid(maxWidth: 480, maxHeight: 300) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

// export const mobileCardImage = graphql`
//   fragment fixedMobileCardIMage on File {
//     childImageSharp {
//       fixed(width: 280) {
//         ...GatsbyImageSharpFixed_withWebp_tracedSVG
//       }
//     }
//   }
// `;

// export const desktopCardImage = graphql`
//   fragment desktopCardImage on File {
//     childImageSharp {
//       fixed(width: 371, height: 222) {
//         ...GatsbyImageSharpFixed_withWebp_tracedSVG
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query IndexQuery {
    heroImage: file(relativePath: { eq: "hero/homepage-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1918, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
                fixed(width: 371, height: 222) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
            date
            endDate
            photo {
              childImageSharp {
                fixed(width: 371, height: 222) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
