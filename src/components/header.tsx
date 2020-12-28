import { Link } from "gatsby"
import React from "react"

import { toggleEnableScroll, wait } from "../utils/utils"
import { HeaderLogo } from "./header-logo"
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
    <header className="relative bg-white">
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
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
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
                  {/* Heroicon name: x */}
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: home */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    ホーム
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: film */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    ポートフォリオ
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: code */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    プログラミング
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: book-open */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    ブログ
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: scissors */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                    />
                  </svg>
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
