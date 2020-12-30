import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"

type IProps = {
  articleList: any
}

export const ArticleList: React.FC<IProps> = ({ articleList }) => {
  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-lg mx-auto mt-12 grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articleList.map((post: any) => {
            const { node } = post

            return (
              <div
                key={node.slug}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={node.heroImage?.file?.url}
                    alt={node.heroImage?.description}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 bg-white">
                  <div className="">
                    <Link to={`/${node.slug}`} className="block px-6 pt-6">
                      <div className="flex text-sm text-gray-500 space-x-1">
                        <time dateTime={node.publishDate}>
                          {dayjs(node.publishDate).format("YYYY年MM月DD日")}
                        </time>
                        <time dateTime={node.updatedAt}>
                          {dayjs(node.updatedAt).format("YYYY年MM月DD日")}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>
                          {node.body.childMarkdownRemark.timeToRead} min read
                        </span>
                      </div>
                      <p className="mt-2 text-xl font-semibold text-gray-900">
                        {node.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {node.description.description}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-wrap flex-1 p-6 gap-3">
                    {node.tags.map((tag: any) => {
                      return (
                        <p
                          key={`${node.slug}--${tag.slug}`}
                          className="text-sm font-medium text-indigo-600"
                        >
                          <Link to={`/${tag.slug}`} className="inline-block">
                            <span className="inline-flex items-center px-3 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full py-0.5">
                              {tag.name}
                            </span>
                          </Link>
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
