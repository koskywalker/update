import { Link } from "gatsby"
import React from "react"

export const Pager = ({ pageContext }: any) => {
  const {
    humanPageNumber,
    numberOfPages,
    previousPagePath,
    nextPagePath,
  } = pageContext

  if (numberOfPages === 1) {
    return null
  }

  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      {previousPagePath && <Link to={previousPagePath}>&lt; Prev</Link>}
      <p>{`${humanPageNumber} / ${numberOfPages}`} Page</p>
      {nextPagePath && <Link to={nextPagePath}>Next &gt;</Link>}
    </nav>
  )
}
