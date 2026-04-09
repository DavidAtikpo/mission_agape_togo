'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';

export type ContentItem = string | { type: 'image'; src: string; alt: string; className?: string; width?: number; height?: number };

interface DocumentContentProps {
  title: string;
  content: ContentItem[];
  className?: string;
  children?: ReactNode;
}

export function DocumentContent({ title, content, className = '', children }: DocumentContentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderContent = () => {
    return content.map((item: ContentItem, index: number) => {
      if (typeof item === 'string') {
        return (
          <motion.p 
            key={`text-${index}`}
            className="mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
          >
            {item}
          </motion.p>
        );
      }
      
      if (item.type === 'image') {
        return (
          <motion.div 
            key={`img-${index}`}
            className="flex justify-center my-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.05), duration: 0.4 }}
          >
            <div className={`relative w-full ${item.className?.includes('max-w-') ? '' : 'max-w-4xl'} mx-auto`}>
              <Image 
                src={item.src} 
                alt={item.alt}
                width={item.width || 800}
                height={item.height || 500}
                className={`w-full h-auto rounded-lg ${item.className || ''}`}
                priority={index < 2} // Priorité pour les premières images
              />
            </div>
          </motion.div>
        );
      }
      
      return null;
    });
  };

  if (!isMounted) {
    return (
      <section className={`py-12 bg-background ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none text-foreground/90">
            {renderContent()}
          </div>
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className={`py-12 bg-background ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <div className="prose prose-lg max-w-none text-foreground/90">
          <AnimatePresence>
            {renderContent()}
          </AnimatePresence>
        </div>
        {children}
      </div>
    </motion.section>
  );
}
