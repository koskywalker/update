import React from "react"

type IProps = {
  className: string
  ariaHidden: boolean
}

/**
 * Heroicons
 * name: code
 */
export const IconCode: React.FC<IProps> = ({ className, ariaHidden }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden={ariaHidden}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  )
}
