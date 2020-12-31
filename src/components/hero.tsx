import React, { useEffect, useState } from "react"
import Typed from "typed.js"

import { heroSentenceList } from "../constants/constants"

export const Hero: React.FC = () => {
  const [sentenceList] = useState(heroSentenceList)
  useEffect(() => {
    const options = {
      strings: sentenceList,
      typeSpeed: 100,
      startDelay: 1000,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
    }
    const typed = new Typed("#typing", options)
    return () => {
      typed.destroy()
    }
  }, [sentenceList])

  return (
    <div className="pt-32 pb-56 mx-auto max-w-7xl">
      <div className="sm:flex sm:flex-col sm:align-center">
        <p className="text-xl text-center font-sub md:text-3xl">
          Hello, I am Kosuke.
        </p>
        <p className="mt-3 text-3xl text-center md:text-5xl font-accent">
          <span id="typing"></span>
        </p>
      </div>
    </div>
  )
}
