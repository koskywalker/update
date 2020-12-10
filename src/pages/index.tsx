import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "src/components/bio"
import Layout from "src/components/layout"
import SEO from "src/components/seo"

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = `UPDATE`
  const posts = data.allContentfulBlogPost.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>No blog posts found. Add markdown posts.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const postNode = post.node

          return (
            <li key={postNode.slug}>
              <article className="post-list-item">
                <header>
                  <h2>
                    <Link to={postNode.slug || ``}>
                      <span>{postNode.title}</span>
                    </Link>
                  </h2>
                  <small>{postNode.publishDate}</small>
                  <small>{postNode.updatedAt}</small>
                  <img
                    src={postNode.heroImage?.file?.url}
                    alt={postNode.heroImage?.description}
                    width=""
                    height=""
                  />
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: postNode.description?.description || ``,
                    }}
                  />
                </section>
                <footer>
                  <ul style={{ listStyle: `none` }}>
                    {postNode.tags?.map((tag, index) => {
                      return (
                        <li key={index}>
                          <Link to={tag?.slug || ``}>{tag?.name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </footer>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          slug
          title
          updatedAt(formatString: "YYYY/MM/DD")
          description {
            description
          }
          heroImage {
            file {
              url
            }
            description
          }
          publishDate(formatString: "YYYY/MM/DD")
          tags {
            slug
            name
          }
        }
      }
    }
  }
`
