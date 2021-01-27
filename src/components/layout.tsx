import React, { useCallback, useEffect, useState } from "react"

import { disableScroll, enableScroll, wait } from "../utils/utils"
import { IconMenu } from "./icons/icon-menu"
import { LogoLink } from "./logo-link"
import { Particles } from "./particles"
import { Sidebar } from "./sidebar"

type IProps = {
  location: Location
}

export const Layout: React.FC<IProps> = ({ children, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRoot = location.pathname === rootPath
  const logo = isRoot ? (
    <h1>
      <LogoLink className="w-auto h-8 sm:h-10" color="black" />
    </h1>
  ) : (
    <LogoLink className="w-auto h-8 sm:h-10" color="black" />
  )

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  /**
   * モバイル用サイドバーを開く.
   */
  const openSidebar = () => {
    setIsSidebarOpen(true)
    disableScroll()
  }

  /**
   * モバイル用サイドバーを閉じる.
   */
  const closeSidebar = async () => {
    setIsSidebarOpen(false)
    await wait(1000)
    enableScroll()
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
    <>
      <Particles />
      <div className="flex">
        {/* main */}
        <div className="order-2 w-full lg:ml-64 lg:w-container-lg">
          {/* main */}
          <main className="mt-16 lg:m-0">
            <div className="px-4 py-8 mx-auto md:max-w-7xl sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          {/* header */}
          <header className="fixed top-0 w-full bg-white lg:hidden">
            <div className="flex items-center justify-between h-16 mx-4 border-b border-gray-300 py-1.5">
              {logo}
              <button
                type="button"
                className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-black"
                onClick={openSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <IconMenu className="w-6 h-6" ariaHidden={true} />
              </button>
            </div>
          </header>
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
}
