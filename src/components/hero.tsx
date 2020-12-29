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
    <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <p className="mt-5 text-xl text-gray-500 sm:text-center">
          Hello, I am Kosuke.
        </p>
        <p className="text-5xl font-extrabold text-gray-900 sm:text-center">
          I&#39;m <span id="typing"></span>
        </p>
      </div>
    </div>
  )
}
