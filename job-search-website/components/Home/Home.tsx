import React from 'react'
import Hero from './Hero/Hero'
import Category from './Category/Category'
import Job from './Job/Job'
import TopCompany from './TopCompany/TopCompany'
import Info from './Info/Info'
import Price from './Price/Price'
import Review from './Review/Review'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Category/>
      <Job/>
      <TopCompany/>
      <Info/>
      <Price/>
      <Review/>
    </div>
  )
}

export default Home