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
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      {previousPagePath && <Link to={previousPagePath}>&lt; Prev</Link>}
      <p>{`${humanPageNumber} / ${lastPageNumber}`} Page</p>
      {humanPageNumber !== lastPageNumber && (
        <Link to={nextPagePath}>Next &gt;</Link>
      )}
    </nav>
  )
}
