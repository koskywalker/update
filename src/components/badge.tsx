import React from "react"

import { ButtonLink } from "./button-link"

type IProps = {
  bgColor: string
  path: string
  text: string
}

export const Badge: React.FC<IProps> = ({ bgColor, path, text }) => {
  return (
    <ButtonLink path={path} size="sm" className="inline-block p-1">
      <span
        className={`inline-flex items-center px-3 text-sm font-medium text-white py-0.5 ${bgColor}`}
      >
        {text}
      </span>
    </ButtonLink>
  )
}
