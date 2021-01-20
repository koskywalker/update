import React from "react"

import { A } from "./a"

type IProps = {
  path: string
  size: "sm" | "md" | "lg"
  isExternalLink?: boolean
  accent?: boolean
  className?: string
}

export const ButtonLink: React.FC<IProps> = ({
  path,
  size,
  isExternalLink = false,
  accent = false,
  className = "",
  children,
}) => {
  let sizeClassName: string
  switch (size) {
    case "sm":
      sizeClassName = "px-3 py-0.5 text-sm"
      break
    case "md":
      sizeClassName = "px-4 py-2 text-base"
      break
    case "lg":
      sizeClassName = "px-6 py-3 text-base w-full"
  }

  const colorName = accent ? "fuchsia" : "cyan"
  const colorClassName = `bg-${colorName}-500 hover:bg-${colorName}-700 focus:bg-${colorName}-700 focus:ring-${colorName}-700`

  const totalClassName = `inline-flex items-center justify-center font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClassName} ${colorClassName} ${className}`

  return (
    <A path={path} isExternalLink={isExternalLink} className={totalClassName}>
      {children}
    </A>
  )
}
