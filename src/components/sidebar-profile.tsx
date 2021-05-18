import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { authorData } from "../constants/constants"
import { A } from "./a"
import { IconGithub } from "./icons/icon-github"
import { IconTwitter } from "./icons/icon-twitter"

export const SidebarProfile: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.SidebarProfileQuery>(
    graphql`
      query SidebarProfile {
        avatar: file(absolutePath: { regex: "/profile.png/" }) {
          childImageSharp {
            gatsbyImageData(width: 150, placeholder: NONE, layout: FIXED)
          }
        }
      }
    `
  )

  const image = data?.avatar?.childImageSharp?.gatsbyImageData

  const socialIconClassName = "w-6 h-6 sm:w-8 sm:h-8 text-white"
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
    <div className="py-4 mx-4 text-white border-t border-gray-300 xs:py-6 sm:py-8">
      <div>
        {image && (
          <div className="justify-center hidden xs:flex">
            <GatsbyImage
              image={image}
              alt={authorData.name}
              className="block rounded-full"
            />
          </div>
        )}
        <div className="xs:mt-2 sm:mt-6 space-y-4">
          <div className="font-bold text-center leading-6 space-y-1">
            <h3>{authorData.name}</h3>
            <p className="text-gray-400">{authorData.label}</p>
          </div>
          <div className="hidden md:block space-y-2">
            {authorData.description.map((sentence, index) => {
              return (
                <p key={`sentence-${index}`} className="text-sm">
                  {sentence}
                </p>
              )
            })}
          </div>
        </div>
      </div>
      <ul className="flex justify-center mt-2 sm:mt-6 space-x-6">
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
  )
}
