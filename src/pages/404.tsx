import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundPageQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `UPDATE`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

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
