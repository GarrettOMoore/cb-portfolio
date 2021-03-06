import React from 'react'
import getKitePics from '../hooks/get-kite'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Kite = () => {
  const kite = getKitePics()

  const kiteDisplay = kite.map((pic, id) => {
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

  return <div className="single-book-box">{kiteDisplay}</div>
}

export default Kite
