import React from "react"

type IProps = {
  className: string
  ariaHidden: boolean
}

/**
 * Heroicons
 * name: chevron-right
 */
export const IconChevronRight: React.FC<IProps> = ({
  className,
  ariaHidden,
}) => {
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
}
