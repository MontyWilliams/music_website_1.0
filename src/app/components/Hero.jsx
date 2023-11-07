'use client'
import Image from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
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
    <section className='h-[80vh] bg-pink-200/10 xl:h-[850px]' id='home'>
      <div className='container mx-auto bg-yellow-200/10 h-full flex justify-center items-center xl:justify-start'>
         {/* text */}
        <div className=' h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12'>
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className='relative flex items-center h-[120px] xl:h-max xl:w-[840px]'
            >
            <MouseParallaxChild factorX={0.2} factorY={0.4} className='relative'>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]'
                >
                <Image
                  src={'/assets/hero/notes_quarter.svg'}
                  fill
                  alt=''
                  className='object-contain'
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        {/* image */}
        <div className='hidden xl:flex absolute right-0 top-0 before:w-[784px] befor:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'>
          <Image
          src={'/assets/albums/cover/band_standing.jpg'}
          width={617}
          height={893}
          alt=''
          quality={100}
          priority
          />
        </div>
      </div>      
    </section>
  )
}

export default Hero;
