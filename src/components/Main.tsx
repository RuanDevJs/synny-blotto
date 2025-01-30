'use client'

import Image from 'next/image'
import YogurtMain from "@/assets/Yogurt.png";

import Button from './Button';
import { FacebookLogo, GoogleLogo, InstagramLogo } from 'phosphor-react';

export default function Main() {
  return (
    <main className='grid grid-cols-2 items-center'>
      <div className='opacity-0 animate-animateFromDownToUp'>
        <h1 className='text-7xl font-normal text-colorBase font-fira-sans-condensed'>Take The World’s</h1>
        <h2 className='text-5xl font-light text-colorBase font-fira-sans-condensed pl-1 py-3.5'>Best Yogurt</h2>
        <p className='block font-overpass text-base text-colorBase pl-1 leading-7'>Greek Yougurt is a unique traditional product which contains no additives and preservatives. It is a healthy aperitif, source of energy and the best way to start the day.</p>
        <Button className='mt-3 block'>
          Buy now
        </Button>
        <div className='flex items-center gap-5 mt-5 pl-1 '>
          <InstagramLogo
            size={25} weight='bold' color='#F26666' className='cursor-pointer' />
          <FacebookLogo size={25} weight='bold' color='#F26666' className='cursor-pointer' />
          <GoogleLogo size={25} weight='bold' color='#F26666' className='cursor-pointer' />
        </div>
      </div>
      <div className='opacity-0 animate-animateFromUpToDown'>
        <Image src={YogurtMain} width={YogurtMain.width} height={YogurtMain.height} quality={80} alt="" className='object-cover' draggable={false} />
      </div>
    </main>
  )
}
