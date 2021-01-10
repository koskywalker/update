import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"

import { Badge } from "./badge"
import { IconCalendar } from "./icons/icon-calendar"
import { IconRefresh } from "./icons/icon-refresh"

type IProps = {
  article: {
    slug: string
    heroImage: {
      file: {
        url: string
      }
      description: string
    }
    publishDate: string
    updatedAt: string
    title: string
    tags: {
      name: string
      slug: string
    }[]
  }
}

export const ArticleCard: React.FC<IProps> = ({ article }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white shadow-custom">
      <div>
        <Link to={`/${article.slug}/`} className="block">
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
          <h2 className="px-6 pt-3 text-xl font-semibold">{article.title}</h2>
        </Link>
        <div className="flex flex-wrap flex-1 px-6 pt-4 pb-6 -m-1">
          {article.tags.map((tag: any) => {
            return (
              <Badge
                key={`${article.slug}--${tag.slug}`}
                bgColor="bg-cyan-500"
                path={`/tags/${tag.slug}/`}
                text={tag.name}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
