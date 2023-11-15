'use client';

import Image from 'next/image';
import { AudionPlayer } from 'react-audio-play';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Player = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* text and avatar img */}
        text and avatar img
        {/* player */}
        <AudionPlayer />
        
      </div>
    </div>
  )
}

export default Player
