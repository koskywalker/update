/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: object[];
  title: string;
}

const SEO: React.FC<SEOProps> = ({
  description = ``,
  lang = `ja`,
  meta = [],
  title
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site?.siteMetadata?.description
  const defaultTitle = site?.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null!}
      meta={[
        ...[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site?.siteMetadata?.social?.twitter || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ],
        ...meta
      ]}
    />
  )
}

export default SEO
