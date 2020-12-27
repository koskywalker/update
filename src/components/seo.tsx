import React from "react"
import { Helmet } from "react-helmet"

import { CommonContext } from "../contexts/CommonContext"

type IProps = {
  pageDescription?: string
  meta?: any[]
  pageTitle: string
}

export const Seo: React.FC<IProps> = ({
  pageDescription = "",
  meta = [],
  pageTitle,
}) => {
  return (
    <CommonContext.Consumer>
      {(common) => {
        const { siteTitle, siteDescription, twitterId } = common

        const title = `${pageTitle} - ${siteTitle}`
        const description = pageDescription || siteDescription

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
                  content: twitterId || "",
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
      }}
    </CommonContext.Consumer>
  )
}
