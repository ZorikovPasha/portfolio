'use client'

import { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({ title, description, tags, imageUrl, features, url }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <a
        href={url}
        target='_blank'
        className='main__project-inner grid bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'
      >
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <p className='mt-30'>Features:</p>
          <ul className='flex flex-col gap-2'>
            {features.map((f, index) => (
              <li
                className='main__project-feature'
                key={index}
              >
                {f}
              </li>
            ))}
          </ul>
          <p className='mt-30'>Stack:</p>
          <ul className='flex flex-wrap mt-4 gap-2'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className='relative'>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='main__project-image absolute hidden sm:block rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-even:right-[initial] group-even:-left-40'
          />
        </div>
      </a>
    </motion.div>
  )
}
