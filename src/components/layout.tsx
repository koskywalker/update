import React from "react"

import { Header } from "./header"
import { Hero } from "./hero"

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
