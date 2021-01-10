import React from "react"

import { IconExclamationCircle } from "./icons/icon-exclamation-circle"

type IProps = {
  id?: string
  name?: string
  rows?: number
  className?: string
  error?: boolean
}

export const Textarea: React.FC<IProps> = ({
  id,
  name,
  rows = 8,
  className = "",
  error = false,
}) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows={rows}
        className={`block w-full px-4 py-3 border outline-none shadow-sm focus:ring-1 ${
          error
            ? "pr-10 border-red-300 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
        } ${className}`}
      ></textarea>
      <div
        className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ${
          error ? "" : "hidden"
        }`}
      >
        <IconExclamationCircle
          className="w-5 h-5 text-red-500"
          ariaHidden={true}
        />
      </div>
    </div>
  )
}
