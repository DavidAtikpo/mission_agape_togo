'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const stats = [
  { id: 1, value: '5', label: 'Écoles de formation', icon: FaGraduationCap },
  { id: 2, value: '100+', label: 'Participants', icon: FaUsers },
  { id: 3, value: '10+', label: "Années d'expérience", icon: FaCalendarAlt },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section className="w-full pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-background to-blue-50 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Texte : après l’image sur mobile, colonne gauche sur lg */}
          <div className="order-2 lg:order-1 space-y-5 sm:space-y-6 md:space-y-8 lg:min-h-0 lg:flex lg:flex-col lg:justify-center w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3 uppercase tracking-wider">
                À propos de nous
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">sommes-nous</span> ?
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent my-4 sm:my-6 rounded-full" />
            </motion.div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <motion.p 
                className="text-base md:text-lg text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Mission Agape est une organisation dédiée à la formation spirituelle et biblique. Nous croyons que l'éducation transforme les vies et renforce les communautés.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                À travers nos cinq écoles spécialisées, nous formons des leaders et des serviteurs capables de faire une différence durable dans notre société.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Notre approche combine l'étude biblique approfondie, l'enseignement pratique et l'accompagnement personnalisé pour assurer la réussite de chaque participant.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4 md:pt-6 w-full"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-24px" }}
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.id}
                  variants={item}
                  className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 min-h-[7.5rem] sm:min-h-0 bg-white dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-100 dark:border-gray-700/50 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-0"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1.5 sm:mb-2 md:mb-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20 flex items-center justify-center shrink-0">
                    <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground tabular-nums">{stat.value}</p>
                  <p className="text-[0.65rem] sm:text-xs md:text-sm text-foreground/70 mt-0.5 sm:mt-1 leading-tight sm:leading-snug px-0.5 line-clamp-3 sm:line-clamp-none">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image : en premier sur mobile, colonne droite sur lg */}
          <motion.div 
            className="order-1 lg:order-2 relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-xl shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10"></div>
            <img
              src="/mission-agape-bible-study-community-togo.jpg"
              alt="Étude biblique et communauté Mission Agape"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold leading-snug">
                Une communauté qui grandit ensemble
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1 leading-relaxed">
                Rejoignez-nous dans cette aventure spirituelle
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
