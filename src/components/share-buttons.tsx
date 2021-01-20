import React from "react"
import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  PocketShareButton,
  TwitterShareButton,
} from "react-share"

import { authorData } from "../constants/constants"
import { IconFacebook } from "./icons/icon-facebook"
import { IconHatena } from "./icons/icon-hatena"
import { IconLine } from "./icons/icon-line"
import { IconPocket } from "./icons/icon-pocket"
import { IconTwitter } from "./icons/icon-twitter"

type IProps = {
  location: Location
  title: string
}

export const ShareButtons: React.FC<IProps> = ({ location, title }) => {
  const shareUrl = location.href

  const buttonClassName = "flex flex-col items-center"
  const iconClassName = "w-8 h-8 md:w-12 md:h-12"
  const iconTextClassName = "text-xs md:text-sm font-bold mt-2"

  const socialList = [
    {
      name: "twitter",
      html: (
        <TwitterShareButton
          url={shareUrl}
          title={title}
          via={authorData.social.twitter.user}
          className={buttonClassName}
        >
          <IconTwitter className={iconClassName} ariaHidden={true} />
          <span className={`${iconTextClassName} text-twitter`}>ツイート</span>
        </TwitterShareButton>
      ),
    },
    {
      name: "facebook",
      html: (
        <FacebookShareButton url={shareUrl} className={buttonClassName}>
          <IconFacebook className={iconClassName} ariaHidden={true} />
          <span className={`${iconTextClassName} text-facebook`}>シェア</span>
        </FacebookShareButton>
      ),
    },
    {
      name: "hatena",
      html: (
        <HatenaShareButton
          url={shareUrl}
          title={title}
          className={buttonClassName}
        >
          <IconHatena className={iconClassName} ariaHidden={true} />
          <span className={`${iconTextClassName} text-hatena`}>はてブ</span>
        </HatenaShareButton>
      ),
    },
    {
      name: "pocket",
      html: (
        <PocketShareButton
          url={shareUrl}
          title={title}
          className={buttonClassName}
        >
          <IconPocket className={iconClassName} ariaHidden={true} />
          <span className={`${iconTextClassName} text-pocket`}>Pocket</span>
        </PocketShareButton>
      ),
    },
    {
      name: "line",
      html: (
        <LineShareButton
          url={shareUrl}
          title={title}
          className={buttonClassName}
        >
          <IconLine className={iconClassName} ariaHidden={true} />
          <span className={`${iconTextClassName} text-line`}>LINE</span>
        </LineShareButton>
      ),
    },
  ]

  return (
    <div className="flex flex-wrap">
      <p className="w-full text-xl font-bold text-center md:text-2xl">
        \ この記事をシェア！ /
      </p>
      <div className="flex items-center justify-center w-full mt-4 space-x-4 xs:space-x-6 md:space-x-16">
        {socialList.map((item) => {
          return <div key={item.name}>{item.html}</div>
        })}
      </div>
    </div>
  )
}
