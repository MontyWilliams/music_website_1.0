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
      <div>
        {firstThreePosts.map(post => {
          // destructure posts
          const {id, date, title, description } = post;
          return (
            <div className="">
              <div>{date}</div>
              <div>{title}</div>
              <div>{description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostList
