import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"

type IProps = {
  article: any
}

export const ArticleCard: React.FC<IProps> = ({ article }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full h-48"
          src={article.heroImage?.file?.url}
          alt={article.heroImage?.description}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 bg-white">
        <div className="">
          <Link to={`/${article.slug}`} className="block px-6 pt-6">
            <div className="flex text-sm text-gray-500 space-x-1">
              <time dateTime={article.publishDate}>
                {dayjs(article.publishDate).format("YYYY年MM月DD日")}
              </time>
              <time dateTime={article.updatedAt}>
                {dayjs(article.updatedAt).format("YYYY年MM月DD日")}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>
                {article.body.childMarkdownRemark.timeToRead} min read
              </span>
            </div>
            <p className="mt-2 text-xl font-semibold text-gray-900">
              {article.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {article.description.description}
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap flex-1 p-6 gap-3">
          {article.tags.map((tag: any) => {
            return (
              <p
                key={`${article.slug}--${tag.slug}`}
                className="text-sm font-medium text-indigo-600"
              >
                <Link to={`/tags/${tag.slug}`} className="inline-block">
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
}
