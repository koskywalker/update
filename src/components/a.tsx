import { Link } from "gatsby"
import React from "react"

type IProps = {
  path: string
  isExternalLink?: boolean
  className?: string
}

export const A: React.FC<IProps> = ({
  path,
  isExternalLink = false,
  className = "",
  children,
}) => {
  if (isExternalLink) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  )
}
