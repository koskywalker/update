import { Link } from "gatsby"
import React from "react"

import { HeaderLogo } from "./header-logo"

type IProps = {
  location: Location
}

export const Header: React.FC<IProps> = ({ location }) => {
  return (
    <header className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b border-gray-200 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <HeaderLogo location={location} />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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
              to="#"
              className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-purple-600 bg-purple-100 border border-transparent whitespace-nowrap rounded-md hover:bg-purple-200"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/*
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
      <div className="absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right md:hidden">
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-purple-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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
                  to="#"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: chart-bar */}
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
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Analytics
                  </span>
                </Link>

                <Link
                  to="#"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: cursor-click */}
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
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Engagement
                  </span>
                </Link>

                <Link
                  to="#"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: shield-check */}
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
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Security
                  </span>
                </Link>

                <Link
                  to="#"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: view-grid */}
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
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Integrations
                  </span>
                </Link>

                <Link
                  to="#"
                  className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  {/* Heroicon name: refresh */}
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
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Automations
                  </span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="px-5 py-6 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </Link>

              <Link
                to="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </Link>
            </div>
            <div className="space-y-6">
              <Link
                to="#"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700"
              >
                Sign up
              </Link>
              <p className="text-base font-medium text-center text-gray-500">
                Existing customer?
                <Link to="#" className="text-purple-600 hover:text-purple-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
