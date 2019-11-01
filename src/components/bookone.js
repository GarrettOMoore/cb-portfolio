import React from 'react'
import getBookOnePics from '../hooks/get-book-one'
// import ImageGallery from 'react-image-gallery'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const BookOne = () => {
  const bookOne = getBookOnePics()

  const bookOneDisplay = bookOne.map((pic, id) => {
    return (
      <Image
        key={id}
        fluid={pic.node.sharp.fluid}
        alt={'test'}
        css={css`
          width: 100%;
          border: 2px solid black;
          * {
            margin-top: 0;
          }
        `}
      />
    )
  })

  return <div>{bookOneDisplay}</div>
}

export default BookOne
