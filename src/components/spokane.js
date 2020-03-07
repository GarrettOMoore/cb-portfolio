import React from 'react'
import getSpokanePics from '../hooks/get-spokane'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const Spokane = () => {
  const spokane = getSpokanePics()
  const spokaneDisplay = spokane.map((pic, id) => {
    return (
      <Image
        key={id}
        className="book-pic"
        fluid={pic.node.sharp.fluid}
        alt={'test'}
      />
    )
  })

  return <div>{spokaneDisplay}</div>
}

export default Spokane
