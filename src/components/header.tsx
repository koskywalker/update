import { Link } from "gatsby"
import React from "react"

import { toggleEnableScroll, wait } from "../utils/utils"
import { HeaderLogo } from "./header-logo"
import { IconBookOpen } from "./icons/icon-book-open"
import { IconCode } from "./icons/icon-code"
import { IconFilm } from "./icons/icon-film"
import { IconHome } from "./icons/icon-home"
import { IconMenu } from "./icons/icon-menu"
import { IconScissors } from "./icons/icon-scissors"
import { IconX } from "./icons/icon-x"
import { Logo } from "./logo"

export const Header: React.FC = () => {
  /**
   * モバイルメニューの表示状態.
   */
  const [stateMobileMenuDisplay, setStateMobileMenuDisplay] = React.useState(
    false
  )

  /**
   * モバイルメニューの opacity の状態
   */
  const [stateMobileMenuOpacity, setStateMobileMenuOpacity] = React.useState(
    false
  )

  /**
   * モバイルメニューの表示非表示を切り替える.
   */
  const toggleMobileMenu = async () => {
    if (stateMobileMenuOpacity) {
      setStateMobileMenuOpacity(false)
      await wait(500)
      setStateMobileMenuDisplay(false)
      toggleEnableScroll()
    } else {
      setStateMobileMenuDisplay(true)
      await wait(100)
      setStateMobileMenuOpacity(true)
      toggleEnableScroll()
    }
  }

  return (
    <header className="relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b border-gray-200 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <HeaderLogo />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              <IconMenu className="w-6 h-6" ariaHidden={true} />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              to="/tags/programming"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <span>プログラミング</span>
            </Link>

            <Link
              to="/tags/blog"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <span>ブログ</span>
            </Link>
            <Link
              to="/tags/tool"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <span>ツール</span>
            </Link>
            <Link
              to="/portfolio"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <span>ポートフォリオ</span>
            </Link>
          </nav>
          <div className="items-center justify-end hidden md:flex space-x-8 md:flex-1 lg:w-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-purple-600 bg-purple-100 border border-transparent whitespace-nowrap rounded-md hover:bg-purple-200"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right duration-500 md:hidden ${
          stateMobileMenuDisplay ? "block" : "hidden"
        } ${stateMobileMenuOpacity ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6 space-y-6">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <IconX className="w-6 h-6" ariaHidden={true} />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <IconHome
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    ariaHidden={true}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    ホーム
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <IconFilm
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    ariaHidden={true}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    ポートフォリオ
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <IconCode
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    ariaHidden={true}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    プログラミング
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <IconBookOpen
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    ariaHidden={true}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    ブログ
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <IconScissors
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    ariaHidden={true}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    便利ツール
                  </span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="px-5 py-6 space-y-6">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
