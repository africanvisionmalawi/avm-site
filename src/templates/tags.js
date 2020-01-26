import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import postStyles from "../components/posts.module.css";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug} className={postStyles.postExcerptCont}>
        <h2>
          <Link
            to={post.node.fields.slug}
            className="title has-text-primary is-size-4"
          >
            {post.node.frontmatter.title}
          </Link>
        </h2>
        <p>{post.node.excerpt}</p>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const tagMetaTitle = tag.charAt(0).toUpperCase() + tag.slice(1);
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } archive tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tagMetaTitle} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "6rem" }}
              >
                <h1 className="title is-bold-light">{tagHeader}</h1>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
