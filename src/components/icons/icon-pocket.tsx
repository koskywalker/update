import React from "react"

type IProps = {
  className: string
  ariaHidden: boolean
}

/**
 * name: Pocket
 */
export const IconPocket: React.FC<IProps> = ({ className, ariaHidden }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden={ariaHidden}
    >
      <path
        d="M480,32H32C14.368,32,0,46.368,0,64v176c0,132.352,107.648,240,240,240h32
  c132.352,0,240-107.648,240-240V64C512,46.368,497.664,32,480,32z"
        fill="#d81b60"
      />
      <path
        d="M256,352c-8.192,0-16.384-3.136-22.624-9.376l-128-128c-12.512-12.512-12.512-32.736,0-45.248
	s32.736-12.512,45.248,0L256,274.752l105.376-105.376c12.512-12.512,32.736-12.512,45.248,0s12.512,32.736,0,45.248l-128,128
  C272.384,348.864,264.192,352,256,352z"
        fill="#fafafa"
      />
    </svg>
  )
}
