import { ErrorMessage } from "@hookform/error-message"
import React from "react"

type IProps = {
  name: string
  errors: any
}

export const ErrorMessageList: React.FC<IProps> = ({ name, errors }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return (
          messages &&
          Object.entries(messages).map(([type, message]) => {
            return (
              <p key={type} className="mt-2 text-sm text-red-600">
                {message}
              </p>
            )
          })
        )
      }}
    />
  )
}
