import React from "react"
import { Helmet } from "react-helmet"

import { authorData, siteData } from "../constants/constants"

type IProps = {
  meta?: any[]
  pageTitle: string
  pageDescription?: string
}

export const Seo: React.FC<IProps> = ({
  meta = [],
  pageTitle,
  pageDescription = "",
}) => {
  const title = `${pageTitle} - ${siteData.title}`
  const description = pageDescription || siteData.description

  return (
    <Helmet
      htmlAttributes={{ lang: "ja" }}
      title={title}
      meta={[
        ...[
          {
            name: "description",
            content: description,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: description,
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
            content: authorData.social.twitter.user || "",
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: description,
          },
        ],
        ...meta,
      ]}
    />
  )
}
