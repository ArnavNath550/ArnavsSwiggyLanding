import React from 'react'
import './curiousSearch.css'

const CuriousSearch = () => {
  return (
    <div className="curious-search-container">
        <input type="text" className="curious-search-input" placeholder="Enter your delivery location" />
        <a className="find-food-cta"><span>FIND FOOD</span></a>
    </div>
  )
}

export default CuriousSearch