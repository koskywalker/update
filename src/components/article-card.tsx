import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"

type IProps = {
  article: any
}

export const ArticleCard: React.FC<IProps> = ({ article }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
      <div>
        <Link to={`/${article.slug}`} className="block">
          <div className="flex-shrink-0">
            <img
              className="object-cover w-full h-48"
              src={article.heroImage?.file?.url}
              alt={article.heroImage?.description}
            />
          </div>
          <div className="flex items-center px-6 pt-6 text-sm text-gray-500 space-x-1">
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <time dateTime={article.publishDate}>
              {dayjs(article.publishDate).format("YYYY年MM月DD日")}
            </time>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <time dateTime={article.updatedAt}>
              {dayjs(article.updatedAt).format("YYYY年MM月DD日")}
            </time>
          </div>
          <h2 className="px-6 pt-3 text-xl font-semibold text-gray-900">
            {article.title}
          </h2>
        </Link>
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
