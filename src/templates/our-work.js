import { graphql } from "gatsby";
// import Donate from "../components/Donate";
import { styled } from "linaria/react";
import React from "react";
import Content, { HTMLContent } from "../components/Content";
import HomepageProjectsCols from "../components/HomepageProjectsCols";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/use-site-metadata";

const OurWorkPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { siteUrl } = useSiteMetadata();
  const PageContent = HTMLContent || Content;
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        pathname={`${siteUrl}${post.fields.slug}`}
        article={false}
      />
      <NavbarLower />
      <Section>
        <Heading>Our work</Heading>
        <PageContent className="content" content={post.html} />
        <HomepageProjectsCols
          currentProject="home"
          displayHeading={false}
          ourWork={post.frontmatter.ourWork}
        />
      </Section>
    </Layout>
  );
};

const Heading = styled.h1`
  margin-left: 16px;
  margin-right: 16px;
`;

const Section = styled.section`
  background: #fff;
  padding-top: 2.6rem;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 2.6rem 1rem;
  }
`;

// const Heading = styled.h1`
//   background: #246a73;
//   color: #fff;
//   display: inline-block;
//   font-size: 2em;
//   margin: 0px 0px 0.5em;
//   padding: 8px 16px;
//   text-align: center;
// `;

export default OurWorkPage;

export const OurWorkQuery = graphql`
  query OurWork($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        ourWork {
          id
          name
          url
          imageId
          excerpt
          featured
        }
      }
    }
  }
`;
