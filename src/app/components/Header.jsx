"use client"

import {useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link'

import NavMobile from './NavMobile';
import Nav from './Nav';

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
    <header className={`fixed z-50 w-full ${
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
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
        {/* menu btn */}
        <div>menu btn</div>
        {/* socials */}
        <div>social icons</div>
      </div>
    </header>
  )
}

export default Header
