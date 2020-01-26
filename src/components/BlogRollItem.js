import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import postStyles from "./posts.module.css";
// import Img from "gatsby-image";

const BlogItem = ({ post }) => (
  <div className={postStyles.list} key={post.id}>
    {post.frontmatter.published && (
      <article className={postStyles.listContent}>
        <p>
          <Link
            className="title has-text-primary is-size-4"
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <span className={postStyles.date}>{post.frontmatter.date}</span>
        </p>
        <p>
          {post.excerpt}
          <br />
          <br />
          <Link className="button" to={post.fields.slug}>
            Keep Reading →
          </Link>
        </p>
      </article>
    )}
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.object
};

export default BlogItem;
