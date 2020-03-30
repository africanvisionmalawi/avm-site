import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import postStyles from "./posts.module.css";
import Img from "gatsby-image";
import DefaultImage from "./defaultImage";
import styled from "styled-components";

const ColLink = styled.span`
  border: 1px solid #3273dc;
  border-radius: 4px;
  color: #3273dc;
  display: block;
  font-weight: bold;
  padding: 8px;
  text-align: center;
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
          ) : null
          // <DefaultImage />
          }

          <span className={postStyles.postHeading}>
            {post.frontmatter.title}
          </span>
          <span className={postStyles.cardDate}>{post.frontmatter.date}</span>
          <p className={postStyles.cardExcerpt}>{post.excerpt}</p>
          <ColLink>find out more</ColLink>
        </Link>
      </article>
    )}
  </div>
);

BlogCard.propTypes = {
  post: PropTypes.object
};

export default BlogCard;
