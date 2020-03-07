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
        src={pic.node.sharp.fluid.src}
        alt={'test'}
        css={css`
          width: 100%;
          img {
            margin: 3rem;
            margin-top: 0;
          }
        `}
      />
    )
  })

  return <div>{spokaneDisplay}</div>
}

export default Spokane
