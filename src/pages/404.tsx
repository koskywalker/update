import React from "react"

import { Breadcrumb } from "../components/breadcrumb"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const NotFoundPage: React.FC = () => {
  const pageTitle = "404: Not Found"
  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <Breadcrumb currentPageTitle={pageTitle} />
      <div className="py-8">
        <div className="px-4 py-8 overflow-hidden bg-white shadow-custom sm:px-6 lg:px-8 lg:py-16">
          <div className="relative max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {pageTitle}
              </h1>
            </div>
            <div className="mt-8 lg:mt-12">
              <p>お探しのページは存在しません.</p>
              <p className="mt-4">URL が間違っていないかご確認ください.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default NotFoundPage
