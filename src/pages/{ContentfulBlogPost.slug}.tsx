import { graphql, Link } from "gatsby"
import React from "react"

import { Bio } from "../components/bio"
import { IconHome } from "../components/icons/icon-home"
import { Layout } from "../components/layout"
import { PublishDate } from "../components/publish-date"
import { Seo } from "../components/seo"
import { TimeToRead } from "../components/time-to-read"
import { UpdateDate } from "../components/update-date"

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
  const tags = post?.tags ?? []
  const image = {
    src: post?.heroImage?.file?.url ?? "",
    alt: post?.heroImage?.description ?? "",
  }
  const bodyHtml = post?.body?.childMarkdownRemark?.html ?? ""

  const articleMetaClassName = "text-gray-500"
  const articleMetaList = [
    {
      name: "publishDate",
      content: <PublishDate date={publishDate} color={articleMetaClassName} />,
    },
    {
      name: "updateDate",
      content: <UpdateDate date={updateDate} color={articleMetaClassName} />,
    },
    {
      name: "timeToRead",
      content: (
        <TimeToRead time={timeToRead.toString()} color={articleMetaClassName} />
      ),
    },
  ]

  return (
    <Layout>
      <Seo pageTitle={title} pageDescription={description} />
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex w-full px-6 bg-white shadow rounded-md space-x-4">
          <li className="flex">
            <div className="flex items-center">
              <Link to="#">
                <IconHome className="w-5 h-5" ariaHidden={true} />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-300"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <p className="ml-4 text-sm font-medium">{title}</p>
            </div>
          </li>
        </ol>
      </nav>
      <article
        className="flex mt-6"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="overflow-hidden bg-white rounded-lg shadow divide-y divide-gray-300">
          <div className="px-4 py-5 sm:px-6">
            <h1
              className="text-2xl font-bold leading-7 sm:text-3xl"
              itemProp="headline"
            >
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
            <div className="mt-4">
              <img src={image.src} alt={image.alt} />
            </div>
            {tags.length && (
              <div className="pt-4 -m-1">
                {tags.map((tag, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/tags/${tag?.slug}/` || ""}
                      className="inline-block p-1"
                    >
                      <span className="inline-flex items-center px-3 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full py-0.5">
                        {tag?.name}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
          <div
            className="px-4 py-5 sm:p-6"
            dangerouslySetInnerHTML={{
              __html: bodyHtml,
            }}
            itemProp="articleBody"
          ></div>
          <div className="px-4 py-4 sm:px-6">
            <Bio />
          </div>
        </div>
        <aside className="relative flex-shrink-0 hidden border-l border-gray-200 xl:flex xl:flex-col w-96">
          <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
            <div className="h-full border-4 border-gray-200 border-dashed rounded-lg"></div>
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
    }
  }
`
