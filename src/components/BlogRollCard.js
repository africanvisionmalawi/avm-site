import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import postStyles from "./posts.module.css";
import Img from "gatsby-image";

const BlogCard = ({ post }) => (
  <div className={postStyles.card} key={post.id}>
    {post.frontmatter.published && (
      <article className={postStyles.cardContent}>
        <Link to={post.fields.slug}>
          {post.frontmatter.featuredImage && (
            <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />
          )}

          <span className={postStyles.postHeading}>
            {post.frontmatter.title}
          </span>
          <span className={postStyles.cardDate}>{post.frontmatter.date}</span>
        </Link>
      </article>
    )}
  </div>
);

BlogCard.propTypes = {
  post: PropTypes.object
};

export default BlogCard;
