'use client'
import Image from 'next/image';
import { MouseParallaxContainer, mouseParallaxChild } from 'react-parallax-mouse';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const locationSequence = [
  'Los Angeles, USA',
  3000,
  'Rio de Janeiro, Brazil',
  3000,
  'Paris, France',
  3000,
  'Berlin, Germany',
  3000,
  'Athens, Greece',
  3000,
]

const Hero = () => {
  return (
    <section className='h-[80vh] bg-pink-200/10 xl:h-[850px]'>
      <div className='container mx-auto'>
         {/* text */}
        <div>text</div>
        {/* image */}
        <div>text</div>
      </div>      
    </section>
  )
}

export default Hero;
