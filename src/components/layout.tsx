import { Location } from "@reach/router"
import React, { useCallback, useEffect, useState } from "react"

import { toggleEnableScroll } from "../utils/utils"
import { IconMenu } from "./icons/icon-menu"
import { LogoLink } from "./logo-link"
import { Particles } from "./particles"
import { SideMenu } from "./side-menu"

type IProps = {
  isThreeColumn: boolean
}

export const Layout: React.FC<IProps> = ({ children, isThreeColumn }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  /**
   * モバイル用サイドメニューを開く.
   */
  const openSideMenu = () => {
    setIsSideMenuOpen(true)
    toggleEnableScroll()
  }

  /**
   * モバイル用サイドメニューを閉じる.
   */
  const closeSideMenu = () => {
    toggleEnableScroll()
    setIsSideMenuOpen(false)
  }

  /**
   * Esc キー押下でモバイル用サイドメニューを閉じる.
   * @param event イベント.
   */
  const keydownEscAndCloseSideMenu = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape") {
      closeSideMenu()
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", keydownEscAndCloseSideMenu)
    return () => {
      window.removeEventListener("keydown", keydownEscAndCloseSideMenu)
    }
  }, [keydownEscAndCloseSideMenu])

  return (
    <Location>
      {({ location }) => {
        const rootPath = `${__PATH_PREFIX__}/`
        const isRoot = location.pathname === rootPath
        const logo = isRoot ? (
          <h1>
            <LogoLink className="w-auto h-8 sm:h-10" color="black" />
          </h1>
        ) : (
          <LogoLink className="w-auto h-8 sm:h-10" color="black" />
        )

        return (
          <>
            <Particles />
            <div className="flex h-screen overflow-hidden">
              {/* main */}
              <div className="flex flex-col flex-1 order-2 min-w-0 overflow-hidden">
                {/* header */}
                <header className="lg:hidden">
                  <div className="flex items-center justify-between mx-4 border-b border-gray-200 py-1.5">
                    {logo}
                    <div>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-black rounded-md"
                        onClick={openSideMenu}
                      >
                        <span className="sr-only">Open sidebar</span>
                        <IconMenu className="w-6 h-6" ariaHidden={true} />
                      </button>
                    </div>
                  </div>
                </header>
                <div className="relative flex flex-1 overflow-hidden">
                  {/* main */}
                  <main className="relative flex-1 overflow-y-auto focus:outline-none">
                    <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
                      <div className="h-full">
                        <div>{children}</div>
                      </div>
                    </div>
                  </main>
                  {isThreeColumn && (
                    // side-menu-secondary
                    <aside className="relative flex-shrink-0 hidden border-l border-gray-200 xl:flex xl:flex-col w-96">
                      <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
                        <div className="h-full border-4 border-gray-200 border-dashed rounded-lg"></div>
                      </div>
                    </aside>
                  )}
                </div>
              </div>
              {/* side-menu-primary */}
              <SideMenu
                location={location}
                isSideMenuOpen={isSideMenuOpen}
                closeSideMenu={closeSideMenu}
              />
            </div>
          </>
        )
      }}
    </Location>
  )
}
