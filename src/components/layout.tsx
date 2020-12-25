import React from "react"

import { Header } from "./header"

type IProps = {
  location: Location
}

export const Layout: React.FC<IProps> = ({ location, children }) => {
  return (
    <div className="bg-white">
      <Header location={location} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
