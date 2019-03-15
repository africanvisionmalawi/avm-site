import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import postStyles from './posts.module.css'
import BlogItem from './BlogRollItem'

class BlogRoll extends React.Component {

    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
          <section className={postStyles.cont}>
            {posts &&
              posts.map(({ node: post }) => (
                <div key={post.fields.slug}>
                  <BlogItem post={post} />
                </div>
              ))}
          </section>
        );
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
        render={(data, count) => (
            <BlogRoll data={data} count={count} />
        )}
    />
)
