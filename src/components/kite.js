import React from 'react'
import getKitePics from '../hooks/get-kite'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Kite = () => {
  const kite = getKitePics()

  const kiteDisplay = kite.map((pic, id) => {
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

  return <div>{kiteDisplay}</div>
}

export default Kite
