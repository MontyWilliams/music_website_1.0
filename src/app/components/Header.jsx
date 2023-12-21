"use client"

import {useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link'

import NavMobile from './NavMobile';
import Nav from './Nav';
import MenuBtn from './MenuBtn';

import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'

const Header = () => {
  const [active, setActive ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100); // detect scrolling
    }
    window.addEventListener('scroll', handleScroll); // add event listener

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
}, [])
  return (
    <header className={`fixed z-50 w-full transition-all ${     // transsition-all may slow down performance
      active ? 'bg-[#030315] py-6 ' : 'bg-transparent py-8'
    }`}>
      <div className="containe mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* logo */}
        <Link href={'#'} className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0'>
          <Image
            src={'/assets/header/BJB_title_white (1).png'}
            fill
            className='object-contain'
            />
        </Link>
        <Nav containerStyles='hidden xl:flex items-center gap-x-8' />
        <NavMobile />
        <div className="absolute right-7  top-9 z-10 xl:hidden">
          <MenuBtn /> 
        </div>
        {/* socials */}
        <div>social icons</div>
      </div>
    </header>
  )
}

export default Header
