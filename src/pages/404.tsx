import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const NotFoundPage: React.FC = () => {
  const pageTitle = "404: Not Found"
  return (
    <Layout>
      <Seo pageTitle={pageTitle} />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default NotFoundPage
