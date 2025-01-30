'use client'

import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <div className='opacity-0 animate-animateFromDownToUp'>
        <h1 className='text-2xl font-bold text-black font-fira-sans-condensed'>
          Synny Blotto
        </h1>
      </div>
      <nav className='opacity-0 animate-animateFromUpToDown'>
        <ul className='flex items-center gap-10'>
          <li>
            <a href="#" className='block p-3 font-overpass font-normal text-colorBase text-base'>Shop</a>
          </li>
          <li>
            <a href="#" className='block p-3 font-overpass font-normal text-colorBase text-base'>About</a>
          </li>
          <li>
            <a href="#" className='block p-3 font-overpass font-normal text-colorBase text-base'>Blog</a>
          </li>
          <li>
            <a href="#" className='block p-3 font-overpass font-normal text-colorBase text-base'>FAQ</a>
          </li>
          <li className='block p-1.5 bg-[#F26666] rounded-lg cursor-pointer'>
            <MagnifyingGlass size={20} weight='bold' color="#fff" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
