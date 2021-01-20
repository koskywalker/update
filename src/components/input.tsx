import React from "react"

type IProps = {
  type: string
  name?: string
  autoComplete?: string
  placeholder?: string
  maxlength: number
  register?: any
  error?: any
}

export const Input: React.FC<IProps> = ({
  type,
  name,
  autoComplete,
  placeholder,
  maxlength,
  register,
  error = null,
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      autoComplete={autoComplete}
      placeholder={placeholder}
      maxLength={maxlength}
      className={`block w-full px-4 py-3 border outline-none shadow-sm focus:ring-1 ${
        error
          ? "pr-10 border-red-300 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
      }`}
      ref={register}
    />
  )
}
