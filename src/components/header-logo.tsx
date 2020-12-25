import { Link } from "gatsby"
import React from "react"

import { Logo } from "./logo"

type IProps = {
  location: Location
}

export const HeaderLogo: React.FC<IProps> = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
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
}
