import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { authorData } from "../constants/constants"
import { A } from "./a"
import { IconGithub } from "./icons/icon-github"
import { IconTwitter } from "./icons/icon-twitter"

export const Bio: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(
    graphql`
      query Bio {
        avatar: file(absolutePath: { regex: "/profile.png/" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const image = data?.avatar?.childImageSharp?.fixed

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
        {image && (
          <Image
            className="object-cover rounded-full"
            fixed={image}
            alt={authorData.name}
          />
        )}
      </div>
      <div className="flex-1 md:ml-4">
        <div className="space-y-4">
          <div className="font-bold text-center md:text-left">
            <p>{authorData.name}</p>
            <p className="text-gray-400">{authorData.label}</p>
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
