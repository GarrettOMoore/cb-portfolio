import React from 'react'
import getTaipeiPics from '../hooks/get-taipei'
import { css } from '@emotion/core'

const Taipei = () => {
  const taipei = getTaipeiPics()
  const taipeiDisplay = taipei.map((pic, id) => {
    return (
      <img
        key={id}
        className="book-pic"
        src={pic.node.sharp.fluid.src}
        alt={'test'}
      />
    )
  })

  return <div className="single-book-box">{taipeiDisplay}</div>
}

export default Taipei
