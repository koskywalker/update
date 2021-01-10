import { Link } from "gatsby"
import React from "react"

import { IconChevronRight } from "./icons/icon-chevron-right"
import { IconHome } from "./icons/icon-home"

type IProps = {
  currentPageTitle: string
}

export const Breadcrumb: React.FC<IProps> = ({ currentPageTitle }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex w-full p-4 bg-white shadow-custom space-x-2 md:space-x-4">
        <li className="flex">
          <div className="flex items-center">
            <Link to="/">
              <IconHome className="w-5 h-5" ariaHidden={true} />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        <li className="flex">
          <div className="flex items-center">
            <IconChevronRight className="w-4 h-4" ariaHidden={true} />
            <p className="flex-1 ml-2 text-sm font-medium md:ml-4">
              {currentPageTitle}
            </p>
          </div>
        </li>
      </ol>
    </nav>
  )
}
