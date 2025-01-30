import React from 'react'
import YogurtBanana from "@/assets/Yogurts/yogurt banana.svg"
import YogurtMorango from "@/assets/Yogurts/yogurt peach.svg"
import YogurtChocolate from "@/assets/Yogurts/chocolate.svg"
import Image from 'next/image'
import Button from './Button'

export default function Product() {
  return (
    <section id='product'>
      <h3 className='text-3xl font-normal font-fira-sans-condensed text-colorBase text-center pt-12 pb-16 opacity-0 animate-animateFromDownToUp' >
        Our Products
      </h3>
      <div className='grid grid-cols-[220px,_220px,_220px] 2xl:grid-cols-[repeat(3,_250px)] justify-between 2xl:gap-32 opacity-0 animate-animateFromUpToDown'>
        <div>
          <div className='bg-[#FCDDB0] rounded-xl shadow w-full flex justify-center'>
            <Image
              src={YogurtBanana}
              alt=""
              quality={80}
              draggable={false}
              className='ml-5 mt-3'
            />
          </div>
          <div className='my-3'>
            <h5 className='font-overpass text-lg font-normal text-colorBase'>Banana strawberry</h5>
            <p className='font-overpass text-base font-medium text-zinc-800'>$ 11.99</p>
          </div>
          <Button>Buy now</Button>
        </div>
        <div>
          <div className='bg-[#FF9F9F] rounded-xl shadow w-full flex justify-center'>
            <Image
              src={YogurtMorango}
              alt=""
              quality={80}
              draggable={false}
              className='ml-8 mt-3'
            />
          </div>
          <div className='my-3'>
            <h5 className='font-overpass text-lg font-normal text-colorBase'>Yogurt peach</h5>
            <p className='font-overpass text-base font-medium text-zinc-800'>$ 10.99</p>
          </div>
          <Button>Buy now</Button>
        </div>
        <div>
          <div className='bg-[#DCB4A0] rounded-xl shadow w-full flex justify-center'>
            <Image
              src={YogurtChocolate}
              alt=""
              quality={80}
              draggable={false}
              className='ml-8 mt-3'

            />
          </div>
          <div className='my-3'>
            <h5 className='font-overpass text-lg font-normal text-colorBase'>Yogurt chocolate</h5>
            <p className='font-overpass text-base font-medium text-zinc-800'>$ 9.99</p>
          </div>
          <Button>Buy now</Button>
        </div>
      </div>
    </section>
  )
}