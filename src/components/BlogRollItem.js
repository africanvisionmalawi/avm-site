import { Link } from "gatsby";
// import postStyles from "./posts.module.css";
import { styled } from "linaria/react";
import PropTypes from "prop-types";
import React from "react";
// import Img from "gatsby-image";

const Article = styled.article`
  border-bottom: 1px solid #494949;
  margin: 0;
  padding: 2.4em 0;
`;

const PostDate = styled.div`
  color: #ababad;
  font-size: 0.9rem;
  margin-top: 0.5em;
  padding: 0 2px 8px;
`;

const BlogItem = ({ post }) => (
  <>
    {post.frontmatter.published && (
      <Article key={post.id}>
        <h3>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          <PostDate>{post.frontmatter.date}</PostDate>
        </h3>
        <p>
          {post.excerpt}{" "}
          <Link className="button" to={post.fields.slug}>
            Read more
          </Link>
        </p>
      </Article>
    )}
  </>
);

BlogItem.propTypes = {
  post: PropTypes.object,
};

export default BlogItem;
