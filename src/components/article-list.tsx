import React from "react"

import { ArticleCard } from "./article-card"
import { Pager } from "./pager"

type IProps = {
  articleList: any
  pageContext: any
}

export const ArticleList: React.FC<IProps> = ({ articleList, pageContext }) => {
  return (
    <div className="relative lg:pb-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-lg mx-auto md:max-w-none grid gap-5 md:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
          {articleList.map((post: any) => {
            return <ArticleCard key={post.node.slug} article={post.node} />
          })}
        </div>
        <div className="mt-8">
          <Pager pageContext={pageContext} />
        </div>
      </div>
    </div>
  )
}
