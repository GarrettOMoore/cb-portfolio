import React from 'react'
import getConsonantPics from '../hooks/get-consonant'
import { css } from '@emotion/core'

const Consonant = () => {
  const consonant = getConsonantPics()

  const consonantDisplay = consonant.map((pic, id) => {
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

  return <div>{consonantDisplay}</div>
}

export default Consonant
