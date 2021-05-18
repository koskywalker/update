import { graphql } from "gatsby"
import React from "react"

import { ArticleList } from "../components/article-list"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IProps = {
  data: GatsbyTypes.IndexArchiveQuery
  pageContext: any
  location: Location
}

const IndexArchive: React.FC<IProps> = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlogPost.edges
  const pageTitle = "フロントエンドエンジニアこうすけのクリエイターブログ"

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
      <ArticleList articleList={posts} pageContext={pageContext} />
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
          publishDate(formatString: "YYYY-MM-DD")
          updatedAt(formatString: "YYYY-MM-DD")
          heroImage {
            gatsbyImageData
            description
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
