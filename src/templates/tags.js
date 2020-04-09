import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
// import postStyles from "../components/posts.module.css";
import styled from "styled-components";

// const Section = styled.section`
//   margin: 0 auto;
//   max-width: 1050px;
//   width: 100%;
// `;

const TextSection = styled.section`
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  min-height: 24rem;
  margin: 0 auto;
  max-width: 750px;
  padding: 3em 2em 2em;
  position: relative;
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #494949;
  margin: 0;
  padding: 2.4em 0;
`;

const BrowseAll = styled.div`
  margin: 2.4em 0;
  text-align: center;
`;

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <ListItem key={post.node.fields.slug}>
        <h3>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </h3>
        <p>
          {post.node.excerpt} <Link to={post.node.fields.slug}>Read more</Link>
        </p>
      </ListItem>
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
        <Helmet title={`${tagMetaTitle} | ${title}`} />
        <article>
          <TextSection>
            <h1 className="title is-bold-light">{tagHeader}</h1>
            <List>{postLinks}</List>
            <BrowseAll>
              <Link to="/tags/">Browse all tags</Link>
            </BrowseAll>
          </TextSection>
        </article>
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
