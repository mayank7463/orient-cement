import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Financial from '../../components/Financial/Financial'
import Quote from '../../components/Quote/Quote'
import Community from '../../components/Community/Community'
import OurBrands from '../../components/OurBrands/OurBrands'




function Homepage() {
  return (
    <div>
        <HeroSection/>
        <Quote/>
        <Financial/>
        <OurBrands/>
        <Community/>
    </div>
  )
}

export default Homepage
