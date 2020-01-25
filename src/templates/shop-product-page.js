import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
// import { Location } from "@reach/router";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Content, { HTMLContent } from "../components/Content";
// import FeaturedProjects from "../components/FeaturedProjects";
import CtaButton from "../components/CtaButton";
import BuyButton from "../components/BuyButton";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import shopStyles from "../components/shop.module.css";

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
  weight,
  length,
  width,
  height,
  shippingClass,
  tags,
  productImage
}) => {
  // const { pathname = {} } = location;
  const PageContent = contentComponent || Content;
  const { siteUrl } = useSiteMetadata();

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-14 is-offset-1">
            <article className="content">
              <div className="columns">
                <main className="column is-6">
                  <div className={shopStyles.product}>
                    <div className={shopStyles.productMain}>
                      <PreviewCompatibleImage imageInfo={productImage} />
                    </div>
                  </div>
                  <CtaButton
                    link="https://www.charitycheckout.co.uk/1113786/"
                    text="Donate"
                  />
                </main>
                <aside className="column is-4">
                  <h1 className="has-text-weight-semibold is-size-2">
                    {title}
                  </h1>
                  <div className={shopStyles.productAside}>
                    <span className={shopStyles.price}>&pound;{price}</span>
                    <BuyButton
                      productId={productId}
                      name={title}
                      description={title}
                      price={price}
                      image={productImage.childImageSharp.fluid.src}
                      url={`${siteUrl}${slug}`}
                    />

                    <PageContent className="content" content={content} />

                    {tags && tags.length ? (
                      <ul className="taglist">
                        {tags.map(tag => (
                          <li key={tag + `tag`}>{tag}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </aside>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
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
        weight={post.frontmatter.weight}
        length={post.frontmatter.length}
        width={post.frontmatter.width}
        height={post.frontmatter.height}
        shippingClass={post.frontmatter.shippingClass}
        tags={post.frontmatter.tags}
        productImage={post.frontmatter.productImage}
      />
    </Layout>
  );
};

ShopProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
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
        weight
        length
        width
        height
        shippingClass
        tags
        productImage {
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
