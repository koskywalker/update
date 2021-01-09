import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { authorData } from "../constants/constants"
import { IconGithub } from "./icons/icon-github"
import { IconTwitter } from "./icons/icon-twitter"

export const SidebarProfile: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.SidebarProfileQuery>(
    graphql`
      query SidebarProfile {
        avatar: file(absolutePath: { regex: "/profile.png/" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const image = data?.avatar?.childImageSharp?.fixed

  const socialIconClassName = "w-6 h-6 sm:w-8 sm:h-8"
  const socialList = [
    {
      name: authorData.social.github.name,
      url: authorData.social.github.url,
      icon: (
        <IconGithub
          className={socialIconClassName}
          ariaHidden={true}
          color="white"
        />
      ),
    },
    {
      name: authorData.social.twitter.name,
      url: authorData.social.twitter.url,
      icon: (
        <IconTwitter
          className={socialIconClassName}
          ariaHidden={true}
          color="white"
        />
      ),
    },
  ]

  return (
    <div className="py-4 mx-4 text-white border-t border-gray-300 xs:py-6 sm:py-8">
      <div>
        {image && (
          <div className="justify-center hidden xs:flex">
            <Image
              fixed={image}
              alt={authorData.name}
              className="block rounded-full"
            />
          </div>
        )}
        <div className="xs:mt-2 sm:mt-6 space-y-4">
          <div className="font-medium text-center sm:text-lg leading-6 space-y-1">
            <h3>{authorData.name}</h3>
            <p className="text-cyan-300">{authorData.label}</p>
          </div>
          <div className="hidden md:block space-y-2">
            {authorData.description.map((sentence, index) => {
              return (
                <p key={`sentence-${index}`} className="text-sm font-medium">
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
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
