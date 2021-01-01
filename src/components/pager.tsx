import { Link } from "gatsby"
import React from "react"

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
    <>
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
              to={previousPagePath}
              className="inline-flex items-center p-2 text-sm font-medium text-black"
            >
              <svg
                className="w-5 h-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              前へ
            </Link>
          )}
          {nextPagePath && (
            <Link
              to={nextPagePath}
              className="inline-flex items-center p-2 ml-3 text-sm font-medium text-black"
            >
              次へ
              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}
