import React from "react"

import { IconClock } from "./icons/icon-clock"

type IProps = {
  time: string
  color: string
}

export const TimeToRead: React.FC<IProps> = ({ time, color }) => {
  return (
    <div className={`flex items-center text-sm ${color}`}>
      <IconClock className="w-5 h-5 mr-1.5" ariaHidden={true} />
      <p>{time} min to read</p>
    </div>
  )
}
