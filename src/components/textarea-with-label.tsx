import React from "react"

import { IconExclamationCircle } from "./icons/icon-exclamation-circle"
import { Textarea } from "./textarea"

type IProps = {
  label: string
  name?: string
  rows?: number
  maxlength: number
  required?: boolean
  register?: any
  error?: any
}

export const TextareaWithLabel: React.FC<IProps> = ({
  label,
  name,
  rows = 8,
  maxlength,
  required = false,
  register,
  error = null,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">※</span>}
      </label>
      <div className="relative">
        <Textarea
          name={name}
          rows={rows}
          maxlength={maxlength}
          register={register}
          error={error}
        ></Textarea>
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
