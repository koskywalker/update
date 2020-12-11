import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundPageQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || "UPDATE"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
