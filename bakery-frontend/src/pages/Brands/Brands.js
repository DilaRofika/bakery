import React from 'react'
import { Outlet } from 'react-router-dom'

const Brands = () => {
  
  return (
    <div className="my-3">
      <div className="w-100 my-3 text-center">
        <div className="flex">
          <h3>Brands</h3>
          <p>Brands list of this bakery</p>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Brands