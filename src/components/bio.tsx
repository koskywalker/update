import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { authorData } from "../constants/constants"
import { A } from "./a"
import { IconGithub } from "./icons/icon-github"
import { IconTwitter } from "./icons/icon-twitter"

export const Bio: React.FC = () => {
  const socialIconClassName = "w-8 h-8"
  const socialList = [
    {
      name: authorData.social.github.name,
      url: authorData.social.github.url,
      icon: <IconGithub className={socialIconClassName} ariaHidden={true} />,
    },
    {
      name: authorData.social.twitter.name,
      url: authorData.social.twitter.url,
      icon: <IconTwitter className={socialIconClassName} ariaHidden={true} />,
    },
  ]

  return (
    <div className="pt-8 border-t border-gray-300 md:flex space-y-4 md:space-y-0">
      <div className="flex justify-center">
        <StaticImage
          src="../images/profile.png"
          className="object-cover rounded-full"
          alt={authorData.name}
          width={150}
          layout="fixed"
        />
      </div>
      <div className="flex-1 md:ml-4">
        <div className="space-y-4">
          <div className="font-bold text-center md:text-left">
            <p>{authorData.name}</p>
          </div>
          <div className="space-y-2">
            {authorData.description.map((sentence, index) => {
              return (
                <p key={`sentence-${index}`} className="text-sm">
                  {sentence}
                </p>
              )
            })}
          </div>
          <ul className="flex justify-center space-x-5 md:justify-start">
            {socialList.map((social) => {
              return (
                <li key={social.name}>
                  <A path={social.url} isExternalLink={true}>
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </A>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
