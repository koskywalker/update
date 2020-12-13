import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
  description?: string
  lang?: string
  meta?: any[]
  title: string
}

export const Seo: React.FC<SeoProps> = ({
  description = "",
  lang = "ja",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
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
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
      meta={[
        ...[
          {
            name: "description",
            content: metaDescription,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: metaDescription,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: site?.siteMetadata?.social?.twitter || "",
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: metaDescription,
          },
        ],
        ...meta,
      ]}
    />
  )
}
