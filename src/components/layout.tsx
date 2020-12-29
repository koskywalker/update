import { Location } from "@reach/router"
import React from "react"

import { Header } from "./header"
import { Hero } from "./hero"

export const Layout: React.FC = ({ children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div className="bg-white">
      <Header />
      <Location>
        {({ location }) => {
          return location.pathname === rootPath && <Hero />
        }}
      </Location>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
