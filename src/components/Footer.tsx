import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-20'>
      <nav className='grid grid-cols-3 justify-center items-center gap-10'>
        <div id='footer-product'>
          <h6 className='font-overpass font-bold text-base'>Product</h6>
          <ul>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Overview</a>
            </li>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Pricing</a>
            </li>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Customer stories</a>
            </li>
          </ul>
        </div>
        <div id='footer-resources'>
          <h6 className='font-overpass font-bold text-base'>Resources</h6>
          <ul>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Blog</a>
            </li>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Guides & tutorials</a>
            </li>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Help center</a>
            </li>
          </ul>
        </div>
        <div id='footer-company'>
          <h6 className='font-overpass font-bold text-base'>Company</h6>
          <ul>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>About us</a>
            </li>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Careers</a>
            </li>
            <li>
              <a href="#" className='font-overpass font-normal text-sm py-1 block text-colorBase'>Media kit</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}
