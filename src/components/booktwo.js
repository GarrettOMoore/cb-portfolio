import React from 'react'
import getBookTwoPics from '../hooks/get-book-two'

const BookTwo = () => {
  const bookTwo = getBookTwoPics()
  console.log(bookTwo)
  const bookTwoDisplay = bookTwo.map((pic, id) => {
    return (
      <div key={id}>
        <img src={pic.node.sharp.fluid.src} alt="placeholder" />
      </div>
    )
  })

  return <main>{bookTwoDisplay}</main>
}

export default BookTwo
