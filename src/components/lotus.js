import React from 'react'
import getLotusPics from '../hooks/use-lotus'

const Lotus = () => {
  const lotus = getLotusPics()
  const lotusDisplay = lotus.map((pic, id) => {
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

  return <div>{lotusDisplay}</div>
}

export default Lotus
