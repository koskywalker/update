import React from "react"

type IProps = {
  name?: string
  rows?: number
  maxlength: number
  register?: any
  error?: any
}

export const Textarea: React.FC<IProps> = ({
  name,
  rows = 8,
  maxlength,
  register,
  error = null,
}) => {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      maxLength={maxlength}
      className={`block w-full px-4 py-3 border outline-none shadow-sm focus:ring-1 ${
        error
          ? "pr-10 border-red-300 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
      }`}
      ref={register}
    ></textarea>
  )
}
