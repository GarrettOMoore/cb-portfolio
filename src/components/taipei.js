import React from 'react'
import getTaipeiPics from '../hooks/get-taipei'
import { css } from '@emotion/core'

const Taipei = () => {
  const taipei = getTaipeiPics()
  const taipeiDisplay = taipei.map((pic, id) => {
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

  return <main>{taipeiDisplay}</main>
}

export default Taipei
