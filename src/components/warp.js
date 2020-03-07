import React from 'react'
import getWarpPics from '../hooks/get-warp'
import { css } from '@emotion/core'

const Warp = () => {
  const warp = getWarpPics()
  const warpDisplay = warp.map((pic, id) => {
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

  return <main>{warpDisplay}</main>
}

export default Warp
