import { navigate } from "gatsby"
import React from "react"

import { pathObject } from "../constants/constants"
import { enableScroll } from "../utils/utils"
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
      icon: (
        <IconHome
          className={`${iconClassName} text-amber-400`}
          ariaHidden={true}
        />
      ),
    },
    {
      id: "blog",
      name: "ブログ",
      path: "/tags/blog/",
      icon: (
        <IconBookOpen
          className={`${iconClassName} text-emerald-400`}
          ariaHidden={true}
        />
      ),
    },
    {
      id: "programming",
      name: "プログラミング",
      path: "/tags/programming/",
      icon: (
        <IconCode
          className={`${iconClassName} text-cyan-400`}
          ariaHidden={true}
        />
      ),
    },
    {
      id: pathObject.portfolio.id,
      name: pathObject.portfolio.name,
      path: pathObject.portfolio.path,
      icon: (
        <IconFilm
          className={`${iconClassName} text-violet-400`}
          ariaHidden={true}
        />
      ),
    },
    {
      id: pathObject.contact.id,
      name: pathObject.contact.name,
      path: pathObject.contact.path,
      icon: (
        <IconMail
          className={`${iconClassName} text-rose-400`}
          ariaHidden={true}
        />
      ),
    },
  ]

  /**
   * スクロールを有効にして指定のページへ遷移.
   */
  const goToNextPage = (path: string): void => {
    enableScroll()
    navigate(path)
  }

  return (
    <nav aria-label="Sidebar" className="mt-5">
      <div className="space-y-1">
        {menuList.map((menu) => {
          return (
            <button
              type="button"
              key={menu.id}
              className={`flex items-center w-full px-4 py-2 text-base font-medium group ${
                currentPathFormatted === menu.path
                  ? "text-white bg-gray-500"
                  : "text-gray-300 hover:bg-gray-500 hover:text-white"
              }`}
              onClick={() => {
                goToNextPage(menu.path)
              }}
            >
              {menu.icon}
              {menu.name}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
