import { graphql, Link } from "gatsby"
import React from "react"

import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

type IContainerProps = {
  data: GatsbyTypes.PostBySlugQuery
}

type IProps = IContainerProps & {
  location: Location
}

const BlogPost: React.FC<IProps> = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const siteTitle = "UPDATE"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post?.title || ""}
        description={post?.description?.description || ""}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post?.title}</h1>
          <p>{post?.publishDate}</p>
          <p>{post?.updatedAt}</p>
          <p>{post?.body?.childMarkdownRemark?.timeToRead}分</p>
          <p>{post?.author?.name}</p>
          <ul>
            {post?.tags?.map((tag, index) => {
              return (
                <li key={index}>
                  <Link to={`/tags/${tag?.slug}` || ""}>{tag?.name}</Link>
                </li>
              )
            })}
          </ul>
          <img
            src={post?.heroImage?.file?.url}
            alt={post?.heroImage?.description}
          />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post?.body?.body || "" }}
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
        }
        body
      }
      author {
        name
      }
    }
  }
`
