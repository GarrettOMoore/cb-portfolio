import React from 'react'
import getBookOnePics from '../hooks/get-book-one'
// import ImageGallery from 'react-image-gallery'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const BookOne = () => {
  const bookOne = getBookOnePics()

  const bookOneDisplay = bookOne.map((pic, id) => {
    return (
      <img
        key={id}
        src={pic.node.sharp.fluid.src}
        alt={'test'}
        css={css`
          width: 100%;
          * {
            margin: 1rem;
            ${'' /* margin-top: 0; */}
          }
        `}
      />
    )
  })

  return <div>{bookOneDisplay}</div>
}

export default BookOne
