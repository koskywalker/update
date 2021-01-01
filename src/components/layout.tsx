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
   * Esc キー押下でモバイル用サイドメニューを閉じる.
   * @param event イベント.
   */
  const keyDownEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape" && isSideMenuOpen) {
        toggleSideMenu(isSideMenuOpen)
      }
    },
    [isSideMenuOpen]
  )

  /**
   * モバイル用サイドメニューの開閉状態を切り替え, 背景のスクロール可否を切り替える.
   * @param isSideMenuOpen モバイル用サイドメニューの開閉状態.
   */
  const toggleSideMenu = (isSideMenuOpen: boolean) => {
    setIsSideMenuOpen(!isSideMenuOpen)
    toggleEnableScroll()
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDownEsc)
    return () => {
      window.removeEventListener("keydown", keyDownEsc)
    }
  }, [keyDownEsc])

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
                        onClick={() => {
                          return toggleSideMenu(isSideMenuOpen)
                        }}
                      >
                        <span className="sr-only">Open sidebar</span>
                        <IconMenu className="w-6 h-6" ariaHidden={true} />
                      </button>
                    </div>
                  </div>
                </header>
                <div className="relative z-0 flex flex-1 overflow-hidden">
                  {/* main */}
                  <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
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
                toggleSideMenu={() => {
                  return toggleSideMenu(isSideMenuOpen)
                }}
              />
            </div>
          </>
        )
      }}
    </Location>
  )
}
