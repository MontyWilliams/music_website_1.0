'use client'

import Link from 'next/link';
import Socials from './Socials';
import Nav from './Nav';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Footer = () => {
  return (
    <footer className='bg-accent section'>
      <div className="container mx-auto">
        {/* email link */}
        <div>
          <Link href='#'>
            <h2>management@thebadjokesband.com</h2>
          </Link>
          {/* nav */}
          <div>
            <Nav
              containerStyles='flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold'
              linkStyles='hover:text-primary/80 transition-all'
            />
          </div>
          {/* socials */}
          <div>
            <Socials
              containerStyles='flex text-[24px] gap-x-8'
              iconStyles='hover:text-primary/80 transition-all justify-center'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
