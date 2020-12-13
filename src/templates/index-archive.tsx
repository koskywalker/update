import { graphql, Link } from "gatsby"
import React from "react"

import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { Pager } from "../components/pager"
import { Seo } from "../components/seo"

type IContainerProps = {
  data: GatsbyTypes.IndexArchiveQuery
}

type IProps = IContainerProps & {
  pageContext: any
  location: Location
}

const IndexArchive: React.FC<IProps> = ({ data, pageContext, location }) => {
  const siteTitle = "UPDATE"
  const posts = data.allContentfulBlogPost.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found. Add markdown posts.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: "none" }}>
        {posts.map((post: any) => {
          const postNode = post.node

          return (
            <li key={postNode.slug}>
              <article className="post-list-item">
                <header>
                  <h2>
                    <Link to={postNode.slug || ""}>
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
                      __html: postNode.description?.description || "",
                    }}
                  />
                </section>
                <footer>
                  <ul style={{ listStyle: "none" }}>
                    {postNode.tags?.map((tag: any, index: number) => {
                      return (
                        <li key={index}>
                          <Link to={`/tags/${tag?.slug}` || ""}>
                            {tag?.name}
                          </Link>
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
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default IndexArchive

export const pageQuery = graphql`
  query IndexArchive($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      limit: $limit
      sort: { fields: publishDate, order: DESC }
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "YYYY/MM/DD")
          updatedAt(formatString: "YYYY/MM/DD")
          description {
            description
          }
          heroImage {
            description
            file {
              url
            }
          }
          tags {
            name
            slug
          }
        }
      }
    }
  }
`
