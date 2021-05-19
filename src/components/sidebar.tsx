import { Transition } from "@headlessui/react"
import React from "react"

import { IconX } from "./icons/icon-x"
import { LogoLink } from "./logo-link"
import { SidebarMenu } from "./sidebar-menu"
import { SidebarProfile } from "./sidebar-profile"

type IProps = {
  location: Location
  isSidebarOpen: boolean
  closeSidebar: any
}

export const Sidebar: React.FC<IProps> = ({
  location,
  isSidebarOpen,
  closeSidebar,
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

  return (
    <>
      <Transition show={isSidebarOpen}>
        <div className="lg:hidden">
          <div className="fixed inset-0 flex w-full">
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
                  onClick={closeSidebar}
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
              className="w-full"
            >
              <div className="relative flex flex-col flex-1 w-full h-screen max-w-xs bg-black focus:outline-none">
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 ml-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={closeSidebar}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <IconX className="w-6 h-6 text-white" ariaHidden={true} />
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 h-16 px-4">
                    <LogoLink className="w-auto h-8 sm:h-10" color="white" />
                  </div>
                  <SidebarMenu location={location} />
                </div>
                <SidebarProfile />
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </div>
        </div>
      </Transition>

      <div className="fixed order-1 hidden h-screen lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-1 h-0 bg-black">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 h-16 px-4">
                {logo}
              </div>
              <SidebarMenu location={location} />
            </div>
            <SidebarProfile />
          </div>
        </div>
      </div>
    </>
  )
}
