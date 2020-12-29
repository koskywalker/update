import React from "react"

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Hello, I am Kosuke.
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            I&#39;m A Developer.
          </h1>
        </div>
      </div>
    </div>
  )
}
