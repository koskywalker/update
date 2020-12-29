import { Location } from "@reach/router"
import React from "react"

import { Header } from "./header"
import { Hero } from "./hero"
import { Particles } from "./particles"

export const Layout: React.FC = ({ children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
      <Particles />
      <Header />
      <Location>
        {({ location }) => {
          return location.pathname === rootPath && <Hero />
        }}
      </Location>
      <main>{children}</main>
      <footer>© 2018 Kosuke Muraka</footer>
    </>
  )
}
