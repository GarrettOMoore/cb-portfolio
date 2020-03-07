import React from 'react'
import getSpokanePics from '../hooks/get-spokane'
// import ImageGallery from 'react-image-gallery'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Spokane = () => {
  const spokane = getSpokanePics()

  const spokaneDisplay = spokane.map((pic, id) => {
    return (
      <img
        key={id}
        className="book-pic"
        src={pic.node.sharp.fluid.src}
        alt={'test'}
      />
    )
  })

  return <div className="single-book-box">{spokaneDisplay}</div>
}

export default Spokane
