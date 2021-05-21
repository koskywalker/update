import dayjs from "dayjs"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { Bio } from "../components/bio"
import { Breadcrumb } from "../components/breadcrumb"
import { ButtonLink } from "../components/button-link"
import { Layout } from "../components/layout"
import { PublishDate } from "../components/publish-date"
import { Seo } from "../components/seo"
import { ShareButtons } from "../components/share-buttons"
import { TimeToRead } from "../components/time-to-read"
import { UpdateDate } from "../components/update-date"

type IProps = {
  data: GatsbyTypes.PostBySlugQuery
  location: Location
}

const BlogPost: React.FC<IProps> = ({ data, location }) => {
  const post = data.contentfulBlogPost

  const title = post?.title ?? ""
  const description = post?.description?.description ?? ""
  const publishDate = post?.publishDate ?? ""
  const updateDate = post?.updatedAt ?? ""
  const timeToRead = post?.body?.childMarkdownRemark?.timeToRead ?? ""
  const tags = post?.tags ?? []
  const image = post?.heroImage?.gatsbyImageData
  const imageSrc = post?.heroImage?.file?.url ?? ""
  const imageAlt = post?.heroImage?.description ?? ""
  const bodyHtml = post?.body?.childMarkdownRemark?.html ?? ""
  const toc = post?.body?.childMarkdownRemark?.tableOfContents ?? ""

  const articleMetaClassName = "text-gray-500"
  const publishDateObject = {
    name: "publishDate",
    content: <PublishDate date={publishDate} color={articleMetaClassName} />,
  }
  const updateDateObject = {
    name: "updateDate",
    content: <UpdateDate date={updateDate} color={articleMetaClassName} />,
  }
  const timeToReadObject = {
    name: "timeToRead",
    content: (
      <TimeToRead time={timeToRead.toString()} color={articleMetaClassName} />
    ),
  }
  const publishDateFormatted = dayjs(publishDate).format("YYYY年MM月DD日")
  const updateDateFormatted = dayjs(updateDate).format("YYYY年MM月DD日")
  const articleMetaList =
    publishDateFormatted === updateDateFormatted
      ? [publishDateObject, timeToReadObject]
      : [publishDateObject, updateDateObject, timeToReadObject]

  return (
    <Layout location={location}>
      <Seo
        pageTitle={title}
        pageDescription={description}
        pageImage={imageSrc}
        type="article"
        publishDate={publishDate}
        updateDate={updateDate}
        location={location}
      />
      <Breadcrumb currentPageTitle={title} />
      <article className="flex pb-8 my-8">
        <div className="overflow-hidden bg-white shadow-custom">
          <div className="px-4 pt-8 sm:px-6">
            <h1 className="text-2xl font-bold leading-7 sm:text-3xl">
              {title}
            </h1>
            <div className="mt-4">
              <div className="flex flex-wrap -m-1">
                {articleMetaList.map((item) => {
                  return (
                    <div key={item.name} className="p-1">
                      {item.content}
                    </div>
                  )
                })}
              </div>
            </div>
            {tags.length && (
              <div className="pt-4 -m-1">
                {tags.map((tag, index) => {
                  return (
                    <ButtonLink
                      key={index}
                      path={`/tags/${tag?.slug}/`}
                      size="sm"
                      className="m-1"
                    >
                      {tag?.name || ""}
                    </ButtonLink>
                  )
                })}
              </div>
            )}
            <div className="mt-6">
              {image && <GatsbyImage image={image} alt={imageAlt} />}
            </div>
          </div>
          <div
            className="max-w-full px-4 pt-8 sm:px-6 prose"
            dangerouslySetInnerHTML={{
              __html: bodyHtml,
            }}
          ></div>
          <div className="px-4 pt-16 sm:px-6">
            <ShareButtons location={location} title={title} />
          </div>
          <div className="px-4 py-16 sm:px-6">
            <Bio />
          </div>
        </div>
        <aside className="relative flex-shrink-0 hidden xl:flex xl:flex-col w-96">
          <div className="absolute inset-0 ml-8">
            <div className="h-full">
              <div className="sticky max-w-full px-6 py-8 text-sm bg-white shadow-custom top-8 prose">
                <div
                  className="toc toc-side"
                  dangerouslySetInnerHTML={{
                    __html: toc,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </aside>
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
      updatedAt
      tags {
        slug
        name
      }
      publishDate
      heroImage {
        description
        file {
          url
        }
        gatsbyImageData
      }
      description {
        description
      }
      body {
        childMarkdownRemark {
          timeToRead
          tableOfContents(maxDepth: 3)
          html
        }
      }
    }
  }
`
