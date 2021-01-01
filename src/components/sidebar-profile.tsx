import { Link } from "gatsby"
import React from "react"

export const SidebarProfile: React.FC = () => {
  return (
    <div className="flex flex-shrink-0 p-4 border-t border-gray-500">
      <Link to="#" className="flex-shrink-0 block w-full group">
        <div className="flex items-center">
          <img
            className="inline-block w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
            alt=""
          />
          <div className="ml-3">
            <p className="text-base font-medium text-white">こうすけ</p>
            <p className="text-sm font-medium text-white">
              詳しいプロフィールを見る
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
