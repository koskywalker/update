import React from "react"

import { CommonContext } from "../contexts/CommonContext"

type IProps = {
  className: string
  color: string
}

export const Logo: React.FC<IProps> = ({ className, color }) => {
  return (
    <CommonContext.Consumer>
      {(common) => {
        const { siteTitle } = common

        return (
          <>
            <span className="sr-only">{siteTitle}</span>
            <svg
              className={className}
              width="364"
              height="79"
              viewBox="0 0 364 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.84 1.68L55.448 1.2L54.488 70.8L50.936 77.616L8.408 77.904L2.072 74.256L0.92 0.911997H17.432L21.08 4.272L22.232 59.664L34.808 60.528L35.384 5.328L38.84 1.68ZM118.643 6.96L118.739 53.04L114.707 57.744L84.947 58.608L84.659 76.368L64.595 78V1.2L114.803 3.216L118.643 6.96ZM98.579 19.248L85.907 18L85.427 41.424L98.483 40.464L98.579 19.248ZM175.225 3.31199L182.713 13.008L181.753 68.112L174.361 76.944L127.801 78L128.377 1.2L175.225 3.31199ZM148.633 61.584L162.265 59.088L162.841 20.784L148.825 17.712L148.633 61.584ZM226.818 78.096L226.338 54.48L211.362 54.864L210.21 77.616L190.914 78L193.89 7.536L197.634 3.024L239.49 1.2L245.346 9.84L246.786 77.712L226.818 78.096ZM212.13 38.64L226.05 39.6L225.666 20.496L212.994 21.552L212.13 38.64ZM254.964 1.008H308.916L308.052 19.728L292.788 20.4L290.676 75.984L270.9 77.904L271.38 20.304L255.06 19.536L254.964 1.008ZM363.391 60.72L363.679 77.904H317.983V1.10399L362.815 2.544L362.623 20.112L337.279 19.824V30.48L353.503 31.152V46.992L337.471 46.32L337.375 59.28L363.391 60.72Z"
                fill={color}
              />
            </svg>
          </>
        )
      }}
    </CommonContext.Consumer>
  )
}
