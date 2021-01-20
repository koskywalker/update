import React from "react"

import { pathObject } from "../constants/constants"
import { A } from "./a"
import { Logo } from "./logo"

type IProps = {
  className: string
  color: string
}

export const LogoLink: React.FC<IProps> = ({ className, color }) => {
  return (
    <A path={pathObject.home.path} className="block">
      <Logo className={className} color={color} />
    </A>
  )
}
