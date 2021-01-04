import dayjs from "dayjs"
import React from "react"

import { IconCalendar } from "./icons/icon-calendar"

type IProps = {
  date: string
  color: string
}

export const PublishDate: React.FC<IProps> = ({ date, color }) => {
  return (
    <div className={`flex items-center text-sm ${color}`}>
      <IconCalendar className="w-5 h-5 mr-1.5" ariaHidden={true} />
      <time dateTime={date}>{dayjs(date).format("YYYY年MM月DD日")}</time>
    </div>
  )
}
