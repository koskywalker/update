import React from "react"

import { ArticleCard } from "./article-card"

type IProps = {
  articleList: any
}

export const ArticleList: React.FC<IProps> = ({ articleList }) => {
  return (
    <div className="relative px-4 pb-20 sm:px-6 lg:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articleList.map((post: any) => {
            return <ArticleCard key={post.node.slug} article={post.node} />
          })}
        </div>
      </div>
    </div>
  )
}
