import type { PageProps } from "gatsby"
import { graphql, Link } from "gatsby"
import React from "react"

import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

export const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPostBySlugQuery>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark
  const siteTitle = data.site?.siteMetadata?.title || "Title"
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post?.frontmatter?.title || ""}
        description={post?.frontmatter?.description || post?.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post?.frontmatter?.title}</h1>
          <p>{post?.frontmatter?.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post?.html || "" }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields?.slug || ""} rel="prev">
                ← {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields?.slug || ""} rel="next">
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
