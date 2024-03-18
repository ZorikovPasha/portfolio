import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import project1Image from '@/public/loft-furniture.png'

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const

export const experiencesData = [
  {
    title: 'Front-End Developer',
    location: 'QSOFT',
    description: 'Nuxt',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2022'
  },
  {
    title: 'Full-Stack Developer',
    location: 'Greendata',
    description:
      "I'm now a full-stack developer working fulltime. My stack includes Next.js, TypeScript, Nestjs, Gitlab, Docker. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: '2022 - present'
  }
] as const

export const projectsData = [
  {
    title: 'Loft Furniture Store',
    description: 'Full-stack project',
    tags: ['React', 'Redux', 'Typescript', 'Nest.js', 'Prisma', 'Swagger', 'PostgreSQL'],
    imageUrl: project1Image,
    features: [
      'Products sorting/filtering',
      'Authorization',
      'Profile',
      'Login via Yandex',
      'Ability to like products',
      'Ability to add products to cart',
      'Ability to make orders',
      'Responsive design',
      'Reviews of products',
      'Search by products',
      "Products' score based on reviews"
    ],
    url: 'https://loft-mebel-sooty.vercel.app/'
  }
] as const

export const skillsData = [
  'Next/Nuxt/SvelteKit/Astro',
  'TypeScript',
  'Redux Toolkit/Zustand',
  'Vitest/Jest/Playwright',
  'ESlint/Stylelint/StandardJS/Prettier',
  'Websockets/WebRTC',
  'Strapi',
  'Nest.js',
  'Prisma',
  'PostgreSQL',
  'Docker',
  'Gitlab'
] as const
