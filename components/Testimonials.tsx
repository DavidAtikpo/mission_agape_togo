'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jean Dupont',
    role: 'Étudiant en Théologie',
    content: 'La formation m\'a transformé spirituellement et intellectuellement. Une expérience inoubliable !',
    rating: 5
  },
  {
    id: 2,
    name: 'Marie Koffi',
    role: 'Animatrice de Jeunesse',
    content: 'Les enseignements sont profonds et pratiques. Je recommande vivement à tous les serviteurs de Dieu.',
    rating: 5
  },
  {
    id: 3,
    name: 'Koffi Adjo',
    role: 'Pasteur',
    content: 'Une école qui allie excellence académique et profondeur spirituelle. Merci Mission Agape !',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="w-full pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-0 sm:px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 leading-tight">
            Témoignages inspirants
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Découvrez ce que disent nos étudiants et anciens élèves de leur expérience avec nous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full min-w-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-0"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="shrink-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base sm:text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 mb-3 sm:mb-4 leading-relaxed">
                « {testimonial.content} »
              </p>
              <div
                className="flex items-center gap-0.5"
                role="img"
                aria-label={`Note : ${testimonial.rating} sur 5`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
