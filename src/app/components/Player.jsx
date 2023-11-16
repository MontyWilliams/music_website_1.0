'use client';

import Image from 'next/image';
import { AudioPlayer } from 'react-audio-play';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Player = () => {
  return (
    <div>
      <div className="container mx-auto  ">
        {/* text and avatar img */}
        text and avatar img
        {/* player */}
        <AudioPlayer
          loop
          preload='none'
          
          volume={48}
          volumePlacement='top'
          src='/assets/player/youngsmoke3.mp3'
        />

      </div>
    </div>
  )
}

export default Player
