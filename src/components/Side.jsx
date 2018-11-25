import React from 'react'
import Order from './Order'

const Side = ({ side }) => {
  return (
    <div className="Side">
      <h3>
        { side }
      </h3>
      <Order />
    </div>
  )
}

export default Side