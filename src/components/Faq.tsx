'use client'

import Image from 'next/image'
import Yogurt from "@/assets/Faq/Cherry yogurt.svg"
import { CaretDown } from 'phosphor-react'

export default function Faq() {
  return (
    <section id='faq' className='mt-7'>
      <h3 className='text-3xl font-normal font-fira-sans-condensed text-colorBase text-center pt-12 opacity-0 animate-animateFromDownToUp'> FAQ </h3>
      <div className='grid grid-cols-2 justify-between items-center opacity-0 animate-animateFromUpToDown'>
        <ul>
          <li className='p-5 mb-3 flex items-center justify-between border-b border-b-[rgba(37_,27,_55,_0.25)] rounded'>
            <h4 className='font-overpass text-lg text-colorBase font-medium'>Greek yogurt is healthy?</h4>
            <CaretDown size={25} color="#F26666" className='cursor-pointer' />
          </li>
          <li className='p-5 mb-3 flex items-center justify-between border-b border-b-[rgba(37_,27,_55,_0.25)] rounded'>
            <h4 className='font-overpass text-lg text-colorBase font-medium'>Why greek yogurt is natural? </h4>
            <CaretDown size={25} color="#F26666" className='cursor-pointer' />
          </li>
          <li className='p-5 mb-3 flex items-center justify-between border-b border-b-[rgba(37_,27,_55,_0.25)] rounded'>
            <h4 className='font-overpass text-lg text-colorBase font-medium'>Why our product is the best choice for you? </h4>
            <CaretDown size={25} color="#F26666" className='cursor-pointer' />
          </li>
          <li className='p-5 mb-3 flex items-center justify-between border-b border-b-[rgba(37_,27,_55,_0.25)] rounded'>
            <h4 className='font-overpass text-lg text-colorBase font-medium'>How yogurt affects health?</h4>
            <CaretDown size={25} color="#F26666" className='cursor-pointer' />
          </li>
        </ul>
        <div className='flex justify-center'>
          <Image src={Yogurt} width={380} height={380} alt="" />
        </div>
      </div>
    </section>
  )
}
