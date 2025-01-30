import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Product from '@/components/Product'
import WhyUs from '@/components/WhyUs'
import React from 'react'

export default function page() {
  return (
    <div className='px-32 py-10 2xl:px-80'>
      <Header />
      <Main />
      <Product />
      <WhyUs />
      <Faq />
      <Footer />
    </div>
  )
}
