import { Link } from "gatsby"
import React from "react"

import { pathObject } from "../constants/constants"
import { IconChevronLeft } from "./icons/icon-chevron-left"
import { IconChevronRight } from "./icons/icon-chevron-right"

export const Pager = ({ pageContext }: any) => {
  const {
    humanPageNumber,
    previousPagePath,
    nextPagePath,
    lastPageNumber,
  } = pageContext

  if (lastPageNumber === 1) {
    return null
  }

  return (
    <nav
      className="flex items-center justify-between py-3"
      aria-label="Pagination"
    >
      <p className="text-sm text-black">
        <span className="font-medium">{humanPageNumber}</span> /{" "}
        <span className="font-medium">{lastPageNumber}</span> ページ
      </p>
      <div className="flex justify-end flex-1">
        {previousPagePath && (
          <Link
            to={
              previousPagePath === pathObject.home.path
                ? previousPagePath
                : `${previousPagePath}/`
            }
            className="inline-flex items-center p-2 text-sm font-medium text-black"
          >
            <IconChevronLeft className="w-5 h-5 mr-3" ariaHidden={true} />
            前へ
          </Link>
        )}
        {nextPagePath && (
          <Link
            to={`${nextPagePath}/`}
            className="inline-flex items-center p-2 ml-3 text-sm font-medium text-black"
          >
            次へ
            <IconChevronRight className="w-5 h-5 ml-3" ariaHidden={true} />
          </Link>
        )}
      </div>
    </nav>
  )
}
