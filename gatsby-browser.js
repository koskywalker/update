import "./src/styles/global.css"
import "prismjs/themes/prism-okaidia.css"

import React from "react"

import { CommonProvider } from "./src/contexts/CommonContext"

export const wrapRootElement = ({ element }) => {
  return <CommonProvider>{element}</CommonProvider>
}
