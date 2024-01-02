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
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  // const {data, error} = useSWR('http://localhost:3000/albums', fetcher)
  // console.log(data)
  const albums = album.albums;

  // if (error) return 'Failed to fetch data';
  if (!albums) return 'Loading...';

  return (
    <div>
       {/* top slider  */}
       <Swiper
        effect={'coverflow'}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper: null,}}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className='album-slider'>
        {albums.map((e) => {
          return (
            <SwiperSlide key={e.id} className='mb-12'>
              <div className='w-full bg-Secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 gap-x-12 overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10'>
              {/* img */}
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image
                    src={e.img}
                    fill
                    priority
                    alt=''
                    className='object-contain'
                  />
                </div>
                {/* track container */}
                <div className='flex flex-1 w-full h-[500px]'>
                  <div className='flex-1 flex flex-col xl:px-12'>
                    {e.tracks?.map((track, index) => {
                      return (
                        <div  className="flex flex-1 w-full h-[500px]" key={index}>
                        {/* track name */}
                          <div className='flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold'>
                            <div className='text-accent text-sm xl:text-lg'>0{index + 1}.</div>
                            <div className='text-sm xl:text-base'>{track.name}</div>
                          </div>
                          {/* player */}
                          <div>
                            <AudioPlayer
                              style={{
                                background: 'transparent',
                                boxShadow: 'none',
                                width: '100%',
                                }}
                              src={track.src}
                              loop
                              preload='none'
                              color='#fff'
                              volume={40}
                              volumePlacement='bottom'
                              className='album-player'
                              />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
       </Swiper>
       {/* thumb slider */}
       <Swiper onSwiper={setThumbsSwiper} modules={[FreeMode, Navigation, Thumbs]}>
        {albums?.map((thumb, index) => {
          return (
            <SwiperSlide key={index}>
            {/* img */}
            <div className='relative w-[195px] h-[195px]'>
             <Image
               src={thumb.img}
               fill
               priority
               alt='ddd'
               className='object-contain'
             />
            </div>
          </SwiperSlide>
          );
        })}
       </Swiper>
    </div>
  )
}

export default AlbumSlider
