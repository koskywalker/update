import { Location } from "@reach/router"
import React, { useCallback, useEffect, useState } from "react"

import { toggleEnableScroll } from "../utils/utils"
import { IconMenu } from "./icons/icon-menu"
import { LogoLink } from "./logo-link"
import { Particles } from "./particles"
import { Sidebar } from "./sidebar"

export const Layout: React.FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  /**
   * モバイル用サイドバーを開く.
   */
  const openSidebar = () => {
    setIsSidebarOpen(true)
    toggleEnableScroll()
  }

  /**
   * モバイル用サイドバーを閉じる.
   */
  const closeSidebar = () => {
    toggleEnableScroll()
    setIsSidebarOpen(false)
  }

  /**
   * Esc キー押下でモバイル用サイドバーを閉じる.
   * @param event イベント.
   */
  const keydownEscAndCloseSidebar = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape") {
      closeSidebar()
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", keydownEscAndCloseSidebar)
    return () => {
      window.removeEventListener("keydown", keydownEscAndCloseSidebar)
    }
  }, [keydownEscAndCloseSidebar])

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
                        onClick={openSidebar}
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
                </div>
              </div>
              {/* side-menu-primary */}
              <Sidebar
                location={location}
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
              />
            </div>
          </>
        )
      }}
    </Location>
  )
}
