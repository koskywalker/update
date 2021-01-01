import { Link } from "gatsby"
import React from "react"

import { pathObject } from "../constants/constants"
import { Logo } from "./logo"

type IProps = {
  className: string
  color: string
}

export const LogoLink: React.FC<IProps> = ({ className, color }) => {
  return (
    <Link to={pathObject.home.path} className="block">
      <Logo className={className} color={color} />
    </Link>
  )
}
