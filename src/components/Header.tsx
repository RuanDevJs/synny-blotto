'use client'
import { MagnifyingGlass } from 'phosphor-react'

export default function Header() {
  function handleBehaviorScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    const getHref = event.currentTarget.getAttribute('href')!;
    const getSectionFromHref = document.getElementById(getHref.replace('#', ''));

    if (getSectionFromHref) {
      const getSectionDistance = getSectionFromHref.offsetTop;
      window.scrollBy({ top: getSectionDistance, behavior: 'smooth' });
    }


  }

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
            <a href="#product" className='block p-3 font-overpass font-normal text-colorBase text-base' onClick={event => handleBehaviorScroll(event)}>Shop</a>
          </li>
          <li>
            <a href="#why-us" className='block p-3 font-overpass font-normal text-colorBase text-base' onClick={event => handleBehaviorScroll(event)}>About</a>
          </li>
          <li>
            <a href="#blog" className='block p-3 font-overpass font-normal text-colorBase text-base' onClick={event => handleBehaviorScroll(event)}>Blog</a>
          </li>
          <li>
            <a href="#faq" className='block p-3 font-overpass font-normal text-colorBase text-base' onClick={event => handleBehaviorScroll(event)}>FAQ</a>
          </li>
          <li className='block p-1.5 bg-[#F26666] rounded-lg cursor-pointer'>
            <MagnifyingGlass size={20} weight='bold' color="#fff" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
