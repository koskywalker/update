import { Link } from "gatsby"
import React from "react"

import { pathObject } from "../constants/constants"
import { IconBookOpen } from "./icons/icon-book-open"
import { IconCode } from "./icons/icon-code"
import { IconFilm } from "./icons/icon-film"
import { IconHome } from "./icons/icon-home"
import { IconMail } from "./icons/icon-mail"

type IProps = {
  location: Location
}

export const SidebarMenu: React.FC<IProps> = ({ location }) => {
  const currentPath = location.pathname
  const currentPathFormatted = currentPath.endsWith("/")
    ? currentPath
    : `${currentPath}/`
  const iconClassName = "w-6 h-6 mr-4"
  const menuList = [
    {
      id: pathObject.home.id,
      name: pathObject.home.name,
      path: pathObject.home.path,
      icon: <IconHome className={iconClassName} ariaHidden={true} />,
    },
    {
      id: "programming",
      name: "プログラミング",
      path: "/tags/programming/",
      icon: <IconCode className={iconClassName} ariaHidden={true} />,
    },
    {
      id: "blog",
      name: "ブログ",
      path: "/tags/blog/",
      icon: <IconBookOpen className={iconClassName} ariaHidden={true} />,
    },
    {
      id: pathObject.portfolio.id,
      name: pathObject.portfolio.name,
      path: pathObject.portfolio.path,
      icon: <IconFilm className={iconClassName} ariaHidden={true} />,
    },
  ]

  return (
    <nav aria-label="Sidebar" className="mt-5">
      <div className="px-2 space-y-1">
        {menuList.map((menu) => {
          return (
            <Link
              key={menu.id}
              to={menu.path}
              className={`flex items-center px-2 py-2 text-base font-medium group rounded-md ${
                currentPathFormatted === menu.path
                  ? "text-white bg-gray-500"
                  : "text-gray-300 hover:bg-gray-500 hover:text-white"
              }`}
            >
              {menu.icon}
              {menu.name}
            </Link>
          )
        })}
        <Link
          to={pathObject.contact.path}
          className="flex items-center px-2 py-2 text-base font-medium text-white bg-indigo-600 group rounded-md hover:bg-indigo-700"
        >
          <IconMail className="w-6 h-6 mr-4 text-white" ariaHidden={true} />
          {pathObject.contact.name}
        </Link>
      </div>
    </nav>
  )
}
