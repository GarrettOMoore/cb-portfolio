import React from 'react'
import getSpokaneTwoPics from '../hooks/use-spokanetwo'
import Image from 'gatsby-image'

const SpokaneTwo = () => {
  const spokaneTwo = getSpokaneTwoPics()
  const spokaneTwoDisplay = spokaneTwo.map((pic, id) => {
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

  return <div>{spokaneTwoDisplay}</div>
}

export default SpokaneTwo
