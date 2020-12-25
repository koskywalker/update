import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Logo: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.LogoQuery>(
    graphql`
      query Logo {
        file(relativePath: { eq: "logo.svg" }) {
          publicURL
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const logoSrc = data.file?.publicURL
  const siteTitle = data.site?.siteMetadata?.title

  return (
    <>
      <span className="sr-only">{siteTitle}</span>
      <img className="w-auto h-8 sm:h-10" src={logoSrc} alt={siteTitle} />
    </>
  )
}
