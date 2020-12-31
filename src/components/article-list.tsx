import React from "react"

import { ArticleCard } from "./article-card"

type IProps = {
  articleList: any
}

export const ArticleList: React.FC<IProps> = ({ articleList }) => {
  return (
    <div className="relative pb-20 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-lg mx-auto md:max-w-none grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
          {articleList.map((post: any) => {
            return <ArticleCard key={post.node.slug} article={post.node} />
          })}
        </div>
      </div>
    </div>
  )
}
