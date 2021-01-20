import { Box, Flex } from "@chakra-ui/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import BuyButton from "../components/BuyButton";
import { Carousel } from "../components/Carousel";
import Content, { HTMLContent } from "../components/Content";
import Donate from "../components/Donate";
// import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedProjectsTiles from "../components/FeaturedProjectsTiles";
import HeadingH1 from "../components/HeadingH1";
import Layout from "../components/Layout";
import NavbarLower from "../components/NavbarLower";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Seo from "../components/seo";
import shopStyles from "../components/shop.module.css";
// import { Location } from "@reach/router";
import { TagsList } from "../components/shop/tagsList";
import useSiteMetadata from "../hooks/use-site-metadata";
import { priceFormatted } from "../utils/helpers";

const Section = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
`;

const ShopSection = styled.section`
  margin: 0 auto;
  max-width: 1180px;
  padding: 5em 2em;
  width: 100%;
`;

const TagHeading = styled.h3`
  display: inline-block;
  font-size: 0.9em;
  margin-right: 5px;
`;

const TagItem = styled.span`
  display: inline-block;
  font-size: 0.8em;
`;

const displayButtonCheck = (stock, publish) => {
  if (stock > 0 || publish !== false) {
    return true;
  }
};

export const ShopProductTemplate = ({
  slug,
  id,
  productId,
  title,
  content,
  contentComponent,
  price,
  salePrice,
  inStock,
  size,
  weight,
  length,
  width,
  height,
  shippingClass,
  tags,
  relatedProducts,
  galleryPhotos,
  publish,
  path,
}) => {
  // const { pathname = {} } = location;
  const PageContent = contentComponent || Content;
  const { siteUrl } = useSiteMetadata();
  // if (galleryPhotos.length) {
  //   console.log(galleryPhotos[0]);
  // }
  return (
    <div>
      <NavbarLower path={path} />
      <ShopSection>
        <article className={shopStyles.product}>
          <HeadingH1 text={title} />
          <Flex flexWrap="wrap">
            <Box width={["100%", "100%", "66.66666%"]}>
              {galleryPhotos && galleryPhotos.length > 1 && (
                <Box maxW="600px">
                  <Carousel allSizesImages={galleryPhotos} />
                </Box>
              )}
              {galleryPhotos && galleryPhotos.length === 1 && (
                <Box maxW="600px">
                  <PreviewCompatibleImage imageInfo={galleryPhotos[0]} />
                </Box>
              )}
            </Box>
            <Box width={["100%", "100%", "33.333333%"]}>
              <div className={shopStyles.productAside}>
                <span className={shopStyles.price}>
                  &pound;{priceFormatted(price)}
                </span>
                {displayButtonCheck(inStock, publish) ? (
                  <BuyButton
                    productId={productId}
                    name={title}
                    description={title}
                    price={price}
                    image={
                      galleryPhotos && galleryPhotos.length
                        ? galleryPhotos[0].childImageSharp.fluid.src
                        : null
                    }
                    url={`${siteUrl}${slug}`}
                    weight={weight}
                    length={length}
                    width={width}
                    height={height}
                  />
                ) : (
                  <p>
                    <strong>Out of stock</strong>
                  </p>
                )}

                {tags && tags.length ? <TagsList tags={tags} /> : null}

                <div className={shopStyles.productDetails}>
                  <PageContent className="content" content={content} />
                </div>
                {/* {relatedProducts[0]} */}
              </div>
            </Box>
          </Flex>
        </article>
      </ShopSection>
      <Donate link="https://www.charitycheckout.co.uk/1113786/" text="Donate" />
      <Section>
        <FeaturedProjectsTiles currentProject="default" displayHeading={true} />
      </Section>
    </div>
  );
};

const ShopProductPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { siteUrl } = useSiteMetadata();
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        pathname={`${siteUrl}${post.fields.slug}`}
        article={false}
      />
      <ShopProductTemplate
        id={post.id}
        slug={post.fields.slug}
        productId={post.frontmatter.productId}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        price={post.frontmatter.price}
        salePrice={post.frontmatter.salePrice}
        inStock={post.frontmatter.inStock}
        size={post.frontmatter.size}
        weight={post.frontmatter.weight}
        length={post.frontmatter.length}
        width={post.frontmatter.width}
        height={post.frontmatter.height}
        shippingClass={post.frontmatter.shippingClass}
        tags={post.frontmatter.shoptags}
        relatedProducts={post.frontmatter.relatedProducts}
        galleryPhotos={post.frontmatter.galleryPhotos}
        publish={post.frontmatter.publish}
        path={post.fields.slug}
        // productImages={post.frontmatter.productImages}
      />
    </Layout>
  );
};

ShopProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ShopProductPage;

export const pageBasicQuery = graphql`
  query ShopProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      fields {
        slug
      }
      frontmatter {
        productId
        title
        price
        salePrice
        inStock
        size
        shippingClass
        weight
        length
        width
        height
        shoptags
        publish
        relatedProducts
        galleryPhotos {
          childImageSharp {
            fluid(maxWidth: 450, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
