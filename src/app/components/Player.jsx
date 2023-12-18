'use client';

import Image from 'next/image';
import { AudioPlayer } from 'react-audio-play';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import '../globals.css'

const Player = () => {
  return (
    <div className='bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40'>
      <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row ">
        {/* text and avatar img */}
        <div className='hidden w-[300px] xl:flex items-center gap-x-4'>
          <div className="relative w-16 h-16">
            <Image src={'/assets/player/BadJokes Logo.png'} fill alt='' priority />
          </div>
        </div>
        {/* player */}
        <div className='w-full max-w-4xl'>
          <AudioPlayer
            loop
            preload='none'
            color="#fff"
            volume={48}
            volumePlacement='top'
            src='/assets/player/youngsmoke3.mp3'
            style={{
              background: 'transparent',
              boxShadow: 'none',
              maxWidth: '100%',
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default Player
