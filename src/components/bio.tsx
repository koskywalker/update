import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { authorData } from "../constants/constants"

export const Bio: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(
    graphql`
      query Bio {
        avatar: file(absolutePath: { regex: "/profile.png/" }) {
          childImageSharp {
            fixed(width: 50, height: 50, quality: 95) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={authorData.name || ""}
          className="bio-avatar"
          imgStyle={{
            borderRadius: "50%",
          }}
        />
      )}
      <p>
        Written by <strong>{authorData.name}</strong>{" "}
        {authorData.description[0] || null}{" "}
        <a href={authorData.social.twitter.url}>
          You should follow them on Twitter
        </a>
      </p>
    </div>
  )
}
