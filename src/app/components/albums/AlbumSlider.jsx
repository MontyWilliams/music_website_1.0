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

import album from '../../../../_data/db.json'


// const fetcher = (url) => fetch(url).then((res) => res.json())

function AlbumSlider() {
  // const {data, error} = useSWR('http://localhost:3000/albums', fetcher)
  // console.log(data)
  const albums = album.albums;

  // if (error) return 'Failed to fetch data';
  if (!albums) return 'Loading...';

  return (
    <div>
       {/* top slider  */}
       <Swiper>
        {albums.map((e) => {
          console.log(e)
        })}
       </Swiper>
       {/* thumb slider */}
       <Swiper>Thumb slider</Swiper>
    </div>
  )
}

export default AlbumSlider
