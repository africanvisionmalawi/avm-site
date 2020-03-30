import React from "react";
import { Link, graphql } from "gatsby";
import { Row, Col } from "antd";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Donate from "../components/Donate";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import shopStyles from "../components/shop.module.css";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
`;

const ShopSection = styled.section`
  margin: 0 auto;
  max-width: 980px;
  padding: 5em 1em;
  width: 100%;
`;

const ShopIndex = ({ data }) => {
  const { siteUrl } = useSiteMetadata();
  const title = "Shop - African Vision Malawi";
  const description = "Welcome to our online shop.";
  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        pathname={`${siteUrl}/shop/`}
        article={false}
      />
      <ShopSection>
        <article className="content">
          <h1 className="has-text-weight-semibold is-size-2">
            African Vision Malawi Online Shop
          </h1>
          <ul className={shopStyles.shopIndexList}>
            {data.allMarkdownRemark.edges.map(document => (
              <li key={document.node.id}>
                <Link to={document.node.fields.slug}>
                  <Img
                    fixed={
                      document.node.frontmatter.productImage.childImageSharp
                        .fixed
                    }
                  />

                  <h2 className={shopStyles.itemTitle}>
                    {document.node.frontmatter.title}
                  </h2>
                  <span className={shopStyles.tag}>
                    {document.node.frontmatter.tags}
                  </span>
                  <span className={shopStyles.listItemPrice}>
                    &pound;{document.node.frontmatter.price}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </ShopSection>
      <Donate link="https://www.charitycheckout.co.uk/1113786/" text="Donate" />
      <Section>
        <FeaturedProjectsTiles currentProject="default" displayHeading={true} />
      </Section>
    </Layout>
  );
};

export default ShopIndex;

export const pageQuery = graphql`
  query ShopIndex {
    allMarkdownRemark(
      sort: { order: DESC, fields: [id] }
      filter: { frontmatter: { templateKey: { eq: "shop-product-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            price
            salePrice
            inStock
            weight
            length
            width
            height
            shippingClass
            tags
            productImage {
              childImageSharp {
                fixed(width: 240, height: 240) {
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
