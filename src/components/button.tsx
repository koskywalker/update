import React from "react"

type IProps = {
  type: "submit" | "button" | "reset"
  text: string
  size: "sm" | "md" | "lg"
  accent?: boolean
  disabled?: boolean
  isLoading?: boolean
  className?: string
}

export const Button: React.FC<IProps> = ({
  type,
  text,
  size,
  accent = false,
  disabled = false,
  isLoading = false,
  className = "",
}) => {
  let sizeClassName: string
  switch (size) {
    case "sm":
      sizeClassName = "px-3 py-0.5 text-sm"
      break
    case "md":
      sizeClassName = "px-4 py-2 text-base"
      break
    case "lg":
      sizeClassName = "px-6 py-3 text-base w-full"
  }

  const statusClassName = isLoading
    ? "cursor-wait"
    : "disabled:cursor-not-allowed"
  const colorDefaultClassName = disabled
    ? `bg-cyan-500`
    : `bg-cyan-500 hover:bg-cyan-700 focus:bg-cyan-700 focus:ring-cyan-700`
  const colorAccentClassName = disabled
    ? `bg-fuchsia-500`
    : `bg-fuchsia-500 hover:bg-fuchsia-700 focus:bg-fuchsia-700 focus:ring-fuchsia-700`
  const colorClassName = accent ? colorAccentClassName : colorDefaultClassName

  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center font-bold text-white disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClassName} ${statusClassName} ${colorClassName} ${className}`}
    >
      {text}
    </button>
  )
}
