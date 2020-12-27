import React from "react"

import { Header } from "./header"

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
