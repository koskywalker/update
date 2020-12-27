import React from "react"

import { CommonContext } from "../contexts/CommonContext"

export const Logo: React.FC = () => {
  return (
    <CommonContext.Consumer>
      {(common) => {
        const { logoSrc, siteTitle } = common

        return (
          <>
            <span className="sr-only">{siteTitle}</span>
            <img className="w-auto h-8 sm:h-10" src={logoSrc} alt={siteTitle} />
          </>
        )
      }}
    </CommonContext.Consumer>
  )
}
