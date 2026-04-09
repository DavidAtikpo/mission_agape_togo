'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  className?: string;
}

export default function TeamMember({ name, role, imageSrc, className = '' }: TeamMemberProps) {
  return (
    <motion.div 
      className={`relative flex flex-col items-center text-center group ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-2 sm:mb-5 md:mb-6 group">
        {/* Image avec effet de superposition */}
        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-300">
          <Image 
            src={imageSrc}
            alt={name}
            width={224}
            height={224}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Effet de fond coloré */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
      
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-md:hidden" />
        <p className="text-foreground/70 text-sm md:text-base font-medium leading-snug">
          {role}
        </p>
      </div>
      
      {/* Hors flux sur mobile : opacity-0 laissait quand même une hauteur (mt-4 + icônes) */}
      <div className="mt-3 hidden md:flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
