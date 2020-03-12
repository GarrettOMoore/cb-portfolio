import React from 'react'
import getFlowerPics from '../hooks/get-flowers'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Flowers = () => {
  const flower = getFlowerPics()

  const flowerDisplay = flower.map((pic, id) => {
    return (
      <div className="single-photo" key={id}>
        <img
          key={id}
          className="book-pic"
          src={pic.node.sharp.fluid.src}
          alt={'test'}
        />
      </div>
    )
  })

  return <div className="single-book-box">{flowerDisplay}</div>
}

export default Flowers
