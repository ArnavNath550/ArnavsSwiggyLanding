import React from 'react'
import Header from '../components/Header/index.js'
import CuriousHeader from '../components/CuriousHeader/index.js'
import CuriousSearch from '../components/CuriousSearch/index.js'
import './home.css'
import CuriousSearchKeywords from '../components/CuriousSearchKeywords/index.js'

const HomePage = () => {
  return (
    <div className="swiggy-section-wrapper">
      <div className="swiggy-left-section">
        <Header />
        <CuriousHeader />
        <CuriousSearch />
        <CuriousSearchKeywords />
      </div>
      <div className="swiggy-right-section"></div>
    </div>
  )
}

export default HomePage