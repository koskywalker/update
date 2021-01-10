import React from "react"

import { IconExclamationCircle } from "./icons/icon-exclamation-circle"
import { Input } from "./input"

type IProps = {
  label: string
  type: string
  id?: string
  name?: string
  autoComplete?: string
  placeholder?: string
  value?: string
  maxlength: number
  className?: string
  error: boolean
  errorMessageList: string[]
}

export const InputWithLabel: React.FC<IProps> = ({
  label,
  type,
  id,
  name,
  autoComplete,
  placeholder,
  value,
  maxlength,
  className = "",
  error = false,
  errorMessageList,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-1">
        <Input
          type={type}
          id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          maxlength={maxlength}
          className={`${className}`}
          error={error}
        />
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
      <div className={error ? "" : "hidden"}>
        {errorMessageList.map((error: string, index: number) => {
          return (
            <p key={`error-${index}`} className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )
        })}
      </div>
    </div>
  )
}
