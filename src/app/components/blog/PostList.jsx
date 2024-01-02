'use client'

import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants'

function PostList({posts}) {
  // get first 3 posts
  const firstThreePosts = posts.slice(0, 3);

  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pb-24 border-t border-white/10">
        {firstThreePosts.map(post => {
          // destructure posts
          const {id, date, title, description } = post;
          return (
            <div className="flex-1" key={id}>
              <div className='text-accent font-bold mb-1'>{date}</div>
              <div className='text-xl font-medium mb-4'>{title}</div>
              <p className='text-white/60 mb-6 font-light'>{description}</p>

              <Link href='#' className='flex items-center gap-x-2 group'>
                Read more
                <BsArrowRight className='text-xl group-hover:ml-1 transition-all'/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default PostList
