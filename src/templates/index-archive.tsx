import { graphql } from "gatsby"
import React from "react"

import { ArticleList } from "../components/article-list"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { Pager } from "../components/pager"
import { Seo } from "../components/seo"

type IContainerProps = {
  data: GatsbyTypes.IndexArchiveQuery
}

type IProps = IContainerProps & {
  pageContext: any
}

const IndexArchive: React.FC<IProps> = ({ data, pageContext }) => {
  const posts = data.allContentfulBlogPost.edges

  const pageTitle = "フロントエンドエンジニアこうすけのクリエイターブログ"

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo pageTitle={pageTitle} />
        <Bio />
        <p>No blog posts found. Add markdown posts.</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <ArticleList articleList={posts} />
      <Bio />
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
          publishDate(formatString: "YYYY-MM-DD")
          updatedAt(formatString: "YYYY-MM-DD")
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
