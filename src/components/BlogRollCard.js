import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import postStyles from "./posts.module.css";
import Img from "gatsby-image";
import DefaultImage from "./defaultImage";
import styled from "styled-components";

const ColLink = styled.span`
  color: #3273dc;
  display: block;
  font-weight: bold;
`;

const BlogCard = ({ post }) => (
  <div className={postStyles.card} key={post.id}>
    {post.frontmatter.published && (
      <article className={postStyles.cardContent}>
        <Link to={post.fields.slug}>
          {post.frontmatter.featuredImage != null ? (
            <div className={postStyles.imageCont}>
              <Img
                fixed={post.frontmatter.featuredImage.childImageSharp.fixed}
              />
            </div>
          ) : (
            <DefaultImage />
          )}

          <span className={postStyles.postHeading}>
            {post.frontmatter.title}
          </span>
          <span className={postStyles.cardDate}>{post.frontmatter.date}</span>
          <p className={postStyles.cardExcerpt}>{post.excerpt}</p>
          <ColLink>Find out more</ColLink>
        </Link>
      </article>
    )}
  </div>
);

BlogCard.propTypes = {
  post: PropTypes.object,
};

export default BlogCard;
