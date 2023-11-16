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
        <div>text and avatar img</div>
        {/* player */}
        <div>
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
              maxwidth: '100% !important',
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default Player
