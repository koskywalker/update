import React from "react"

import { ArticleCard } from "./article-card"
import { Pager } from "./pager"

type IProps = {
  articleList: any
  pageContext: any
}

export const ArticleList: React.FC<IProps> = ({ articleList, pageContext }) => {
  return (
    <div className="lg:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
