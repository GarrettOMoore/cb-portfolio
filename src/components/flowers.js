import React from 'react'
import getFlowerPics from '../hooks/get-flowers'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Flowers = () => {
  const flower = getFlowerPics()

  const flowerDisplay = flower.map((pic, id) => {
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

  return <div>{flowerDisplay}</div>
}

export default Flowers
