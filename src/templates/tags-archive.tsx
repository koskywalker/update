import { graphql, Link } from "gatsby"
import React from "react"

import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { Pager } from "../components/pager"
import { Seo } from "../components/seo"

type IContainerProps = {
  data: GatsbyTypes.TagsArchiveQuery
}

type IProps = IContainerProps & {
  pageContext: any
}

const TagsArchive: React.FC<IProps> = ({ data, pageContext }) => {
  const posts = data.allContentfulBlogPost.edges
  const { tagName } = pageContext

  const pageTitle = `${tagName}に関する記事一覧`

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo pageTitle={pageTitle} />
        <Hero />
        <p>No blog posts found. Add markdown posts.</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <Hero />
      <ol style={{ listStyle: "none" }}>
        {posts.map((post: any) => {
          const postNode = post.node

          return (
            <li key={postNode.slug}>
              <article className="post-list-item">
                <header>
                  <h2>
                    <Link to={`/${postNode.slug}` || ""}>
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
export default TagsArchive

export const pageQuery = graphql`
  query TagsArchive($skip: Int!, $limit: Int!, $tagSlug: String) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      limit: $limit
      skip: $skip
      filter: { tags: { elemMatch: { slug: { eq: $tagSlug } } } }
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
