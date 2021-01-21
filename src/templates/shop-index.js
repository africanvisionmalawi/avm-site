import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Donate from "../components/Donate";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import HeadingH1 from "../components/HeadingH1";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import Seo from "../components/seo";
import shopStyles from "../components/shop.module.css";
import { ShopListItem } from "../components/shop/shop-list-item";
import { TagsNav } from "../components/shop/tags-nav";
import useSiteMetadata from "../hooks/use-site-metadata";

const Section = styled.section`
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
`;

const ShopSection = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  padding: 2rem 1rem;
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
          <TagsNav />
          <ul className={shopStyles.shopIndexList}>
            {data.allMarkdownRemark.edges.map((document) => (
              <ShopListItem
                id={document.node.id}
                slug={document.node.fields.slug}
                photos={document.node.frontmatter.galleryPhotos}
                title={document.node.frontmatter.title}
                tags={document.node.frontmatter.shopTags}
                price={document.node.frontmatter.price}
              />
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
            shoptags
            galleryPhotos {
              childImageSharp {
                fixed(width: 280, height: 280) {
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
