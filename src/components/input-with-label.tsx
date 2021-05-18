import React from "react"

import { IconExclamationCircle } from "./icons/icon-exclamation-circle"
import { Input } from "./input"

type IProps = {
  label: string
  type: string
  name?: string
  autoComplete?: string
  placeholder?: string
  maxlength: number
  required?: boolean
  error: any
  register?: any
  validation?: any
}

export const InputWithLabel: React.FC<IProps> = ({
  label,
  type,
  name,
  autoComplete,
  placeholder,
  maxlength,
  required = false,
  register,
  validation,
  error = null,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">※</span>}
      </label>
      <div className="relative mt-1">
        <Input
          type={type}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          maxlength={maxlength}
          register={register}
          validation={validation}
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
    </div>
  )
}
