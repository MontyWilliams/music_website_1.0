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
        <div className="flex flex-col h-full items-center justify-center">
          {/*  text */}
          <SectionHeader
            pretitle='Get in touch'
            title='Sign up to our newsletter'
          />
          {/* input */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className="relative flex items-center w-full max-w-xl"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
