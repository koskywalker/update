import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import React from "react"

import { IconBookOpen } from "./icons/icon-book-open"
import { IconCode } from "./icons/icon-code"
import { IconFilm } from "./icons/icon-film"
import { IconHome } from "./icons/icon-home"
import { IconMail } from "./icons/icon-mail"
import { IconScissors } from "./icons/icon-scissors"
import { IconX } from "./icons/icon-x"
import { LogoLink } from "./logo-link"

type IProps = {
  location: Location
  isSideMenuOpen: boolean
  toggleSideMenu: any
}

export const SideMenu: React.FC<IProps> = ({
  location,
  isSideMenuOpen,
  toggleSideMenu,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const currentPath = location.pathname
  const isRoot = currentPath === rootPath
  const logo = isRoot ? (
    <h1>
      <LogoLink className="w-auto h-8 sm:h-10" color="white" />
    </h1>
  ) : (
    <LogoLink className="w-auto h-8 sm:h-10" color="white" />
  )
  const currentPathFormatted = currentPath.endsWith("/")
    ? currentPath.slice(0, -1)
    : currentPath

  return (
    <>
      <Transition show={isSideMenuOpen}>
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0">
                <div
                  className="absolute inset-0 bg-black opacity-50"
                  onClick={toggleSideMenu}
                  role="none"
                ></div>
              </div>
            </Transition.Child>
            <Transition.Child
              enter="transition ease-in-out duration-1000 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-1000 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              {(ref) => {
                return (
                  <div
                    ref={ref}
                    className="relative flex flex-col flex-1 w-full max-w-xs bg-black focus:outline-none"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={toggleSideMenu}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <IconX
                          className="w-6 h-6 text-white"
                          ariaHidden={true}
                        />
                      </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                      <div className="flex items-center flex-shrink-0 h-16 px-4">
                        <LogoLink
                          className="w-auto h-8 sm:h-10"
                          color="white"
                        />
                      </div>
                      <nav aria-label="Sidebar" className="mt-5">
                        <div className="px-2 space-y-1">
                          <Link
                            to="/"
                            className={`flex items-center px-2 py-2 text-base font-medium group rounded-md ${
                              currentPathFormatted === ""
                                ? "text-white bg-gray-500"
                                : "text-gray-300 hover:bg-gray-500 hover:text-white"
                            }`}
                          >
                            <IconHome
                              className={`w-6 h-6 mr-4 ${
                                currentPathFormatted === ""
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                              }`}
                              ariaHidden={true}
                            />
                            ホーム
                          </Link>

                          <Link
                            to="/tags/programming"
                            className={`flex items-center px-2 py-2 text-base font-medium group rounded-md ${
                              currentPathFormatted === "/tags/programming"
                                ? "text-white bg-gray-500"
                                : "text-gray-300 hover:bg-gray-500 hover:text-white"
                            }`}
                          >
                            <IconCode
                              className={`w-6 h-6 mr-4 ${
                                currentPathFormatted === "/tags/programming"
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                              }`}
                              ariaHidden={true}
                            />
                            プログラミング
                          </Link>

                          <Link
                            to="/tags/blog"
                            className={`flex items-center px-2 py-2 text-base font-medium group rounded-md ${
                              currentPathFormatted === "/tags/blog"
                                ? "text-white bg-gray-500"
                                : "text-gray-300 hover:bg-gray-500 hover:text-white"
                            }`}
                          >
                            <IconBookOpen
                              className={`w-6 h-6 mr-4 ${
                                currentPathFormatted === "/tags/blog"
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                              }`}
                              ariaHidden={true}
                            />
                            ブログ
                          </Link>

                          <Link
                            to="/tags/tool"
                            className={`flex items-center px-2 py-2 text-base font-medium group rounded-md ${
                              currentPathFormatted === "/tags/tool"
                                ? "text-white bg-gray-500"
                                : "text-gray-300 hover:bg-gray-500 hover:text-white"
                            }`}
                          >
                            <IconScissors
                              className={`w-6 h-6 mr-4 ${
                                currentPathFormatted === "/tags/tool"
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                              }`}
                              ariaHidden={true}
                            />
                            ツール
                          </Link>

                          <Link
                            to="/portfolio"
                            className={`flex items-center px-2 py-2 text-base font-medium group rounded-md ${
                              currentPathFormatted === "/portfolio"
                                ? "text-white bg-gray-500"
                                : "text-gray-300 hover:bg-gray-500 hover:text-white"
                            }`}
                          >
                            <IconFilm
                              className={`w-6 h-6 mr-4 ${
                                currentPathFormatted === "/portfolio"
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                              }`}
                              ariaHidden={true}
                            />
                            ポートフォリオ
                          </Link>

                          <Link
                            to="/contact"
                            className="flex items-center px-2 py-2 text-base font-medium text-white bg-indigo-600 group rounded-md hover:bg-indigo-700"
                          >
                            <IconMail
                              className="w-6 h-6 mr-4 text-white"
                              ariaHidden={true}
                            />
                            お問い合わせ
                          </Link>
                        </div>
                      </nav>
                    </div>
                    <div className="flex flex-shrink-0 p-4 border-t border-gray-700">
                      <Link to="#" className="flex-shrink-0 block group">
                        <div className="flex items-center">
                          <div>
                            <img
                              className="inline-block w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                              Whitney Francis
                            </p>
                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                              View profile
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }}
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </div>
        </div>
      </Transition>

      <div className="order-1 hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-1 h-0 bg-black">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 h-16 px-4">
                {logo}
              </div>
              <nav className="flex-1 mt-5" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <Link
                    to="/"
                    className={`flex items-center px-2 py-2 text-sm font-medium group rounded-md ${
                      currentPathFormatted === ""
                        ? "text-white bg-gray-500"
                        : "text-gray-300 hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    <IconHome
                      className={`w-6 h-6 mr-3 ${
                        currentPathFormatted === ""
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      ariaHidden={true}
                    />
                    ホーム
                  </Link>

                  <Link
                    to="/tags/programming"
                    className={`flex items-center px-2 py-2 text-sm font-medium group rounded-md ${
                      currentPathFormatted === "/tags/programming"
                        ? "text-white bg-gray-500"
                        : "text-gray-300 hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    <IconCode
                      className={`w-6 h-6 mr-3 ${
                        currentPathFormatted === "/tags/programming"
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      ariaHidden={true}
                    />
                    プログラミング
                  </Link>

                  <Link
                    to="/tags/blog"
                    className={`flex items-center px-2 py-2 text-sm font-medium group rounded-md ${
                      currentPathFormatted === "/tags/blog"
                        ? "text-white bg-gray-500"
                        : "text-gray-300 hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    <IconBookOpen
                      className={`w-6 h-6 mr-3 ${
                        currentPathFormatted === "/tags/blog"
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      ariaHidden={true}
                    />
                    ブログ
                  </Link>

                  <Link
                    to="/tags/tool"
                    className={`flex items-center px-2 py-2 text-sm font-medium group rounded-md ${
                      currentPathFormatted === "/tags/tool"
                        ? "text-white bg-gray-500"
                        : "text-gray-300 hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    <IconScissors
                      className={`w-6 h-6 mr-3 ${
                        currentPathFormatted === "/tags/tool"
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      ariaHidden={true}
                    />
                    ツール
                  </Link>

                  <Link
                    to="/portfolio"
                    className={`flex items-center px-2 py-2 text-sm font-medium group rounded-md ${
                      currentPathFormatted === "/portfolio"
                        ? "text-white bg-gray-500"
                        : "text-gray-300 hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    <IconFilm
                      className={`w-6 h-6 mr-3 ${
                        currentPathFormatted === "/portfolio"
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      ariaHidden={true}
                    />
                    ポートフォリオ
                  </Link>

                  <Link
                    to="/contact"
                    className="flex items-center px-2 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 group rounded-md"
                  >
                    <IconMail
                      className="w-6 h-6 mr-3 text-white"
                      ariaHidden={true}
                    />
                    お問い合わせ
                  </Link>
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-gray-500">
              <Link to="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block rounded-full h-9 w-9"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">こうすけ</p>
                    <p className="text-xs font-medium text-white">
                      詳しいプロフィールはこちら
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
