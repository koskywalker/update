import React from "react"

type IProps = {
  type: string
  id?: string
  name?: string
  autoComplete?: string
  placeholder?: string
  value?: string
  maxlength: number
  className?: string
  error?: boolean
}

export const Input: React.FC<IProps> = ({
  type,
  id,
  name,
  autoComplete,
  placeholder,
  value,
  maxlength,
  className,
  error = false,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      maxLength={maxlength}
      className={`block w-full px-4 py-3 border outline-none shadow-sm focus:ring-1 ${className} ${
        error
          ? "pr-10 border-red-300 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
      }`}
    />
  )
}
