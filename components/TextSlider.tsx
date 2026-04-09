'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Heart, Users, BookMarked, MessageSquare, ChevronRight } from 'lucide-react';

type Slide = {
  id: number;
  text: string;
  icon: React.ReactNode;
  delay: number;
  bgColor: string;
  textColor: string;
};

export default function TextSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    {
      id: 1,
      text: "Formation d'excellence en Évangélisation",
      icon: <MessageSquare className="w-5 h-5" />,
      delay: 3000,
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
      textColor: 'text-white'
    },
    {
      id: 2,
      text: "Développement spirituel et personnel",
      icon: <Heart className="w-5 h-5" />,
      delay: 3000,
      bgColor: 'bg-gradient-to-r from-indigo-600 to-purple-700',
      textColor: 'text-white'
    },
    {
      id: 3,
      text: "Étude approfondie de la Bible",
      icon: <BookOpen className="w-5 h-5" />,
      delay: 3000,
      bgColor: 'bg-gradient-to-r from-amber-600 to-orange-600',
      textColor: 'text-white'
    },
    {
      id: 4,
      text: "Relation d'aide et accompagnement",
      icon: <Users className="w-5 h-5" />,
      delay: 3000,
      bgColor: 'bg-gradient-to-r from-emerald-600 to-teal-700',
      textColor: 'text-white'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, slides[currentSlide].delay);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center py-2">
            <div className="relative w-full max-w-5xl h-auto min-h-[56px] sm:min-h-[56px] flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-2 sm:px-6 transition-all duration-1000 transform ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-1.5 sm:p-2 rounded-full ${slide.bgColor} bg-opacity-20 backdrop-blur-sm`}>
                      <div className={slide.textColor}>
                        {slide.icon}
                      </div>
                    </div>
                    <p className={`text-xs sm:text-sm md:text-base font-medium ${slide.textColor} drop-shadow-sm text-center sm:text-left`}>
                      {slide.text}
                    </p>
                  </div>
                  <div className="flex items-center justify-center sm:absolute sm:right-4 space-x-1">
                    {slides.map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          currentSlide === i 
                            ? 'w-4 sm:w-6 bg-white bg-opacity-100' 
                            : 'bg-white bg-opacity-30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
