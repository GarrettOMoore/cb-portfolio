import React from 'react'
import getConsonantPics from '../hooks/get-consonant'
import { css } from '@emotion/core'

const Consonant = () => {
  const consonant = getConsonantPics()

  const consonantDisplay = consonant.map((pic, id) => {
    return (
      <img
        key={id}
        className="book-pic"
        src={pic.node.sharp.fluid.src}
        alt={'test'}
      />
    )
  })

  return <div className="single-book-box">{consonantDisplay}</div>
}

export default Consonant
