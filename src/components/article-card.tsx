import dayjs from "dayjs"
import Image from "gatsby-image"
import React from "react"

import { A } from "./a"
import { ButtonLink } from "./button-link"
import { IconCalendar } from "./icons/icon-calendar"
import { IconRefresh } from "./icons/icon-refresh"

type IProps = {
  article: {
    slug: string
    heroImage: {
      fluid: any
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
        <A path={`/${article.slug}/`} className="block">
          <div className="flex-shrink-0">
            {article.heroImage?.fluid && (
              <Image
                className="object-cover w-full h-48"
                fixed={article.heroImage?.fluid}
                alt={article.heroImage?.description}
              />
            )}
          </div>
          <div className="flex items-center px-6 pt-6 text-sm text-gray-400 space-x-1">
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
        </A>
        <div className="flex flex-wrap px-6 pt-4 pb-6 -m-1">
          {article.tags.map((tag: any) => {
            return (
              <ButtonLink
                key={`${article.slug}--${tag.slug}`}
                path={`/tags/${tag.slug}/`}
                size="sm"
                className="m-1"
              >
                {tag.name}
              </ButtonLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
