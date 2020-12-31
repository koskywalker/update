import { Link } from "gatsby"
import React from "react"

import { Logo } from "./logo"

type IProps = {
  className: string
  color: string
}

export const LogoLink: React.FC<IProps> = ({ className, color }) => {
  return (
    <Link to="/" className="block">
      <Logo className={className} color={color} />
    </Link>
  )
}
