import { Location } from "@reach/router"
import { Link } from "gatsby"
import React from "react"

import { Logo } from "./logo"

export const HeaderLogo: React.FC = () => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Location>
      {({ location }) => {
        const isRootPath = location.pathname === rootPath

        if (isRootPath) {
          return (
            <h1>
              <Link to="/" className="block">
                <Logo />
              </Link>
            </h1>
          )
        }

        return (
          <Link to="/" className="block">
            <Logo />
          </Link>
        )
      }}
    </Location>
  )
}
