import React from 'react'
import getBookOnePics from '../hooks/get-book-one'
import ImageGallery from 'react-image-gallery'

const BookOne = () => {
  const bookOne = getBookOnePics()
  console.log(bookOne)
  let images = []
  bookOne.forEach(pic => {
    images.push({
      original: pic.node.sharp.fluid.src,
      thumbnail: pic.node.sharp.fluid.srcSetWebp,
    })
  })
  // const bookOneDisplay = bookOne.map((pic, id) => {
  // <div key={id}>
  //   <img src={pic.node.sharp.fluid.src} alt="placeholder" />
  // </div>
  // })

  return <ImageGallery items={images} />
}

export default BookOne
