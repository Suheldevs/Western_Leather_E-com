import React from 'react'

import CategoryProductGrid from '../components/Home/CategoryProductGrid'
import SmallBannerSlider from '../components/Home/SmallBannerSlider'
import HomeCardSlide from '../components/Home/HomeCardSlider'

export default function Home() {
  return (
    <>
    <HomeCardSlide/>
    <CategoryProductGrid/>
    <SmallBannerSlider/>
    <HomeCardSlide/>
    </>
  )
}
