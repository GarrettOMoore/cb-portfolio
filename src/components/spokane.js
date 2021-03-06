import React from 'react'
import getSpokanePics from '../hooks/get-spokane'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Spokane = () => {
  const spokane = getSpokanePics()
  const spokaneDisplay = spokane.map((pic, id) => {
    console.log('PIIIICCCCC: ', pic)
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

  return <div>{spokaneDisplay}</div>
}

export default Spokane
