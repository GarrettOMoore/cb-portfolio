import React from 'react'
import getBookThreePics from '../hooks/get-book-three'

const BookThree = () => {
  const bookThree = getBookThreePics()
  const bookThreeDisplay = bookThree.map((pic, id) => {
    return (
      <div key={id}>
        <img src={pic.node.sharp.fluid.src} alt="placeholder" />
      </div>
    )
  })

  return <main>{bookThreeDisplay}</main>
}

export default BookThree
