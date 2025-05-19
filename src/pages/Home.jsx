import React from 'react'
import HomeCardSlide from '../components/Home/homeCardSlide'
import CategoryProductGrid from '../components/Home/CategoryProductGrid'
import SmallBannerSlider from '../components/Home/SmallBannerSlider'

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
