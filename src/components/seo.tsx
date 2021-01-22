import React from "react"
import { Helmet } from "react-helmet"

import { authorData, siteData } from "../constants/constants"

type IProps = {
  meta?: any[]
  pageTitle: string
  pageDescription?: string
  pageImage?: string
  type?: string
  publishDate?: string
  updateDate?: string
  location: Location
}

export const Seo: React.FC<IProps> = ({
  meta = [],
  pageTitle,
  pageDescription = "",
  pageImage = "",
  type = "",
  publishDate = "",
  updateDate = "",
  location,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRoot = location.pathname === rootPath
  const pageType = isRoot ? "WebSite" : "WebPage"

  const siteUrl = process.env.GATSBY_BASE_URL
  const siteName = siteData.title
  const siteDescription = siteData.description
  const siteIconUrl = `${siteUrl}images/icon-update.png`

  const pageUrl = location.href
  const pageTitleFormatted = `${pageTitle} - ${siteData.title}`
  const pageDescriptionFormatted = pageDescription || siteData.description
  const pageImageFormatted = pageImage ? pageImage : siteIconUrl

  const authorName = authorData.name
  const authorDescription = authorData.description
  const authorTwitterUrl = authorData.social.twitter.url
  const authorGithubUrl = authorData.social.github.url

  const author = [
    {
      "@type": "Person",
      name: authorName,
      description: authorDescription,
      url: siteUrl,
      sameAs: [authorTwitterUrl, authorGithubUrl],
    },
  ]

  const publisher = {
    "@type": "Organization",
    name: siteName,
    description: siteDescription,
    logo: {
      "@type": "ImageObject",
      url: siteIconUrl,
      width: 72,
      height: 72,
    },
  }

  const jsonLdBaseConfig = {
    "@context": "http://schema.org",
    "@type": pageType,
    name: siteName,
    inLanguage: "ja",
    url: pageUrl,
    headline: pageTitleFormatted,
    publisher,
    image: pageImageFormatted,
    description: pageDescriptionFormatted,
  }

  const jsonLdBlogConfig = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: pageTitleFormatted,
    description: pageDescriptionFormatted,
    image: pageImageFormatted,
    dataPublished: publishDate,
    dateModified: updateDate,
    author,
    publisher,
  }

  const jsonLdConfigList =
    type === "article" ? jsonLdBlogConfig : jsonLdBaseConfig

  return (
    <Helmet
      htmlAttributes={{ lang: "ja" }}
      title={pageTitleFormatted}
      meta={[
        ...[
          {
            name: "description",
            content: pageDescriptionFormatted,
          },
          {
            property: "og:title",
            content: pageTitleFormatted,
          },
          {
            property: "og:description",
            content: pageDescriptionFormatted,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "og:image",
            content: pageImageFormatted,
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "thumbnail",
            content: pageImageFormatted,
          },
          {
            name: "twitter:image",
            content: pageImageFormatted,
          },
          {
            name: "twitter:creator",
            content: authorData.social.twitter.user || "",
          },
          {
            name: "twitter:title",
            content: pageTitleFormatted,
          },
          {
            name: "twitter:description",
            content: pageDescriptionFormatted,
          },
        ],
        ...meta,
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify(jsonLdConfigList)}
      </script>
    </Helmet>
  )
}
