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

  const colorName = accent ? "fuchsia" : "cyan"
  const colorClassName = disabled
    ? `bg-${colorName}-500`
    : `bg-${colorName}-500 hover:bg-${colorName}-700 focus:bg-${colorName}-700 focus:ring-${colorName}-700`

  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center font-bold text-white disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClassName} ${
        isLoading ? "cursor-wait" : "disabled:cursor-not-allowed"
      } ${colorClassName} ${className}`}
    >
      {text}
    </button>
  )
}
