import { graphql, Link } from "gatsby"
import React from "react"

import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IProps = {
  data: GatsbyTypes.PostBySlugQuery
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  const post = data.contentfulBlogPost

  const title = post?.title ?? ""
  const description = post?.description?.description ?? ""
  const publishDate = post?.publishDate ?? ""
  const updateDate = post?.updatedAt ?? ""
  const timeToRead = post?.body?.childMarkdownRemark?.timeToRead ?? ""
  const authorName = post?.author?.name ?? ""
  const tags = post?.tags ?? []
  const image = {
    src: post?.heroImage?.file?.url ?? "",
    alt: post?.heroImage?.description ?? "",
  }
  const bodyHtml = post?.body?.childMarkdownRemark?.html ?? ""

  return (
    <Layout isThreeColumn={true}>
      <Seo pageTitle={title} pageDescription={description} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p>{publishDate}</p>
          <p>{updateDate}</p>
          <p>{timeToRead}分</p>
          <p>{authorName}</p>
          {tags.length && (
            <ul>
              {tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Link to={`/tags/${tag?.slug}` || ""}>{tag?.name}</Link>
                  </li>
                )
              })}
            </ul>
          )}
          <img src={image.src} alt={image.alt} />
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: bodyHtml,
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default BlogPost

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      updatedAt(formatString: "YYYY/MM/DD")
      tags {
        slug
        name
      }
      publishDate(formatString: "YYYY/MM/DD")
      heroImage {
        description
        file {
          url
        }
      }
      description {
        description
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
        }
      }
      author {
        name
      }
    }
  }
`
