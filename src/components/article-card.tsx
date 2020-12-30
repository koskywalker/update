import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"

import { IconCalendar } from "./icons/icon-calendar"
import { IconRefresh } from "./icons/icon-refresh"

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
            <IconCalendar className="flex-shrink-0 w-4 h-4" ariaHidden={true} />
            <time dateTime={article.publishDate}>
              {dayjs(article.publishDate).format("YYYY年MM月DD日")}
            </time>
            <IconRefresh className="flex-shrink-0 w-4 h-4" ariaHidden={true} />
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