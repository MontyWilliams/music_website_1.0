'use client'

import React, { useState } from 'react';

import useSWR from 'swr';
import Image from 'next/image';

import { AudioPlayer } from 'react-audio-play';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const fetcher = (url) => fetch(url).then((res) => res.json())

function AlbumSlider() {
  // const {data, error} = useSWR('http://localhost:3000/albums', fetcher)
  // console.log(data)
  return (
    <div>
      AlbumSlider      
    </div>
  )
}

export default AlbumSlider
