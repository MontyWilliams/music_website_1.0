'use client'

import SectionHeader from "./SectionHeader";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

function Newsletter() {
  return (
    <section
      className="bg-newsletter bg-fixed h-[480px] bg-no-repeat bg-cover w-full bg-center"
      id='contact'  
    >
      <div className="container mx-auto h-full">
        <div>
          {/*  text */}
          <SectionHeader
            pretitle='Get in touch'
            title='Sign up to our newsletter'
          />
          {/* input */}
          <div className="relative flex items-center w-full max-w-xl">
            <input
              type="text"
              placeholder="Email address"    
              className="w-full h-[59px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8"
            />
            <button
              type='submit'
              className="bg-accent rounded-full absolute right-2 h-[46px] text-[15px] hover:bg-accent-hover transition-all px-6"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
