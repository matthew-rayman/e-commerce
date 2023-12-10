import React, { useEffect } from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSpread from './LocationSpread'
import Appsection from './Appsection'
import Sponsor from './Sponsor'



const Home = () => {
  useEffect(() => {
   window.scrollTo({ top: 0, left: 0 })
}, [])
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSpread/>
      <Appsection/>
      <Sponsor/>
    </div>
  )
}

export default Home
