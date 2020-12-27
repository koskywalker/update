import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const defaultState = {
  logoSrc: "",
  siteTitle: "",
  siteDescription: "",
  twitterId: "",
}

export const CommonContext = React.createContext(defaultState)

export const CommonProvider: React.FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.CommonContextQuery>(
    graphql`
      query CommonContext {
        file(relativePath: { eq: "logo.svg" }) {
          publicURL
        }
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

  const logoSrc = data.file?.publicURL ?? ""
  const siteTitle = data.site?.siteMetadata?.title ?? ""
  const siteDescription = data.site?.siteMetadata?.description ?? ""
  const twitterId = data.site?.siteMetadata?.social?.twitter ?? ""

  return (
    <CommonContext.Provider
      value={{
        logoSrc,
        siteTitle,
        siteDescription,
        twitterId,
      }}
    >
      {children}
    </CommonContext.Provider>
  )
}
