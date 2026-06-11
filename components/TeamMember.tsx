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
      className={`flex flex-col items-center text-center ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-1.5">
        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
          <Image
            src={imageSrc}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight">{name}</h3>
      <p className="text-foreground/65 text-[0.65rem] sm:text-xs leading-snug mt-0.5">{role}</p>
    </motion.div>
  );
}
