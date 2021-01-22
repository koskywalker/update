import { graphql } from "gatsby"
import React from "react"

import { ArticleList } from "../components/article-list"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IProps = {
  data: GatsbyTypes.TagsArchiveQuery
  pageContext: any
  location: Location
}

const TagsArchive: React.FC<IProps> = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlogPost.edges
  const { tagName } = pageContext

  const pageTitle = `${tagName}に関する記事一覧`

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Seo pageTitle={pageTitle} location={location} />
        <Hero />
        <p>No blog posts found. Add markdown posts.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <Seo pageTitle={pageTitle} location={location} />
      <Hero />
      <h1 className="text-2xl font-bold leading-7 sm:text-3xl">{pageTitle}</h1>
      <div className="mt-8">
        <ArticleList articleList={posts} pageContext={pageContext} />
      </div>
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
