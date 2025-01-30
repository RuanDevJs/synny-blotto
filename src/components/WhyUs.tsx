import Image from 'next/image'
import Yogurt from "@/assets/WhyUs/Cherry yogurt.svg";
import Button from './Button';

export default function WhyUs() {
  return (
    <section id="why-us" className='mt-20'>
      <div className='grid grid-cols-2 gap-10'>
        <div className='opacity-0 animate-animateFromDownToUp'>
          <Image src={Yogurt} alt="" />
        </div>
        <div className='opacity-0 animate-animateFromUpToDown'>
          <h3 className='text-3xl font-normal font-fira-sans-condensed text-colorBase pt-12'>
            Why us ?
          </h3>
          <div className='mt-8 space-y-2'>
            <p className='text-sm font-overpass font-normal text-colorBase leading-6'>Greek Yogurt is healthier than regular yogurt. <br /> It&apos;s made with live active cultures and is an excellent source of calcium for healthy bones.</p>
            <p className='text-sm font-overpass font-normal text-colorBase leading-6'>
              It&apos;s high in protein and low in sugar, which makes it perfect for breakfast, lunch, or dinner!
              Greek yogurt is made by straining out the whey from regular yogurt. This results in a thicker, creamier product that&apos;s higher in protein and lower in sugar than regular yogurt.
              Greek yogurt is also much more versatile than regular yogurt. It can be used in a variety of recipes, from breakfast dishes to desserts.
            </p>
            <p className='text-sm font-overpass font-normal text-zinc-600 leading-5'>
              <span className='text-[#F26666] mr-1.5 font-bold uppercase '>Help site -</span>
              Help site is the complete source to solve all your worries and problems. It has everything you need to achieve your goal.
            </p>
            <p className='text-sm font-overpass font-normal text-zinc-600 leading-5'>
              <span className='text-[#F26666] mr-1.5 uppercase font-bold'>Community -</span>
              Community site is a fantastic new way to gain support from us. Gather and share advice, guidance, and ideas with like-minded people. With Community site, the power is in the hands of the people!
            </p>
            <p className='text-sm font-overpass font-normal text-zinc-600 leading-5'>
              <span className='text-[#F26666] mr-1.5 uppercase font-bold'>Contact us -</span>
              &quot;Contact us&quot; if you have any questions! This site is managed by the community and relies on the support of users as well as donations. Questions related to our product? Contact our community manager at the link below.
            </p>
          </div>
          <Button className='mt-7'>Buy now</Button>
        </div>
      </div>
    </section>
  )
}
