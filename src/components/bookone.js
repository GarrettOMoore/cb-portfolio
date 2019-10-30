import React from 'react'
import getBookOnePics from '../hooks/get-book-one'

const BookOne = () => {
  const bookOne = getBookOnePics()
  const bookOneDisplay = bookOne.map((pic, id) => {
    return (
      <div key={id}>
        <img src={pic.node.sharp.fluid.src} alt="placeholder" />
      </div>
    )
  })

  return <main>{bookOneDisplay}</main>
}

export default BookOne
