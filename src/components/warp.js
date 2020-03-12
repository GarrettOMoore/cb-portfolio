import React from 'react'
import getWarpPics from '../hooks/get-warp'
import { css } from '@emotion/core'

const Warp = () => {
  const warp = getWarpPics()
  const warpDisplay = warp.map((pic, id) => {
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

  return <div className="single-book-box">{warpDisplay}</div>
}

export default Warp
