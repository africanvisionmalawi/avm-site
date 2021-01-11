import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import useSiteMetadata from "../hooks/use-site-metadata";
import Seo from "../components/seo";
import Donate from "../components/Donate";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import NavbarLower from "../components/NavbarLower";
import TagsList from "../components/shop/tagsList";
import shopStyles from "../components/shop.module.css";
import HeadingH1 from "../components/HeadingH1";
import styled from "styled-components";
import { priceFormatted } from "../utils/helpers";

const Section = styled.section`
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
`;

const ShopSection = styled.section`
  margin: 0 auto;
  max-width: 1180px;
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
      <NavbarLower path={`/shop/`} />
      <ShopSection>
        <article className="content">
          <HeadingH1 text="African Vision Malawi Online Shop" />
          <ul className={shopStyles.shopIndexList}>
            {data.allMarkdownRemark.edges.map((document) => (
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
                  {document.node.frontmatter.tags &&
                  document.node.frontmatter.tags.length ? (
                    <TagsList tags={document.node.frontmatter.tags} />
                  ) : null}
                  <span className={shopStyles.listItemPrice}>
                    &pound;
                    {priceFormatted(document.node.frontmatter.price)}
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
      filter: {
        frontmatter: {
          templateKey: { eq: "shop-product-page" }
          publish: { eq: true }
        }
      }
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
            size
            shippingClass
            tags
            productImage {
              childImageSharp {
                fixed(width: 280, height: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            productImages {
              photo {
                childImageSharp {
                  fixed(width: 280, quality: 50) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
