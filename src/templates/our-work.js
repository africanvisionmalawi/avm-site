import React from "react";
import { graphql } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
import NavbarLower from "../components/NavbarLower";
import HomepageProjectsCols from "../components/HomepageProjectsCols";
// import Donate from "../components/Donate";
import styled from "styled-components";

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
        <h1>Our work</h1>
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

const Section = styled.section`
  background: #fff;
  padding-top: 2.6em;
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
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
