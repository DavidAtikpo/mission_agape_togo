'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const phoneNumber = '22890924479'; // Numéro de téléphone WhatsApp
  const message = 'Bonjour, je souhaite plus d\'informations sur Mission Agapé Togo';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Animation d'apparition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Arrêter l'effet de pulsation après 5 secondes
      const pulseTimer = setTimeout(() => {
        setIsPulsing(false);
      }, 5000);
      
      return () => clearTimeout(pulseTimer);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-xl 
          transform transition-all duration-300 ease-in-out
          ${isHovered ? 'scale-110 bg-green-600 shadow-2xl' : 'scale-100'}
          ${isPulsing ? 'animate-pulse' : ''}
          hover:animate-bounce`}
        aria-label="Contactez-nous sur WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Animation de notification */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-600 items-center justify-center text-xs font-bold">
            <span className="animate-pulse">!</span>
          </span>
        </span>
      </a>
      
      {/* Bulle de texte qui apparaît au survol */}
      <div className={`absolute right-20 bottom-2.5 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md 
        transition-all duration-300 ease-in-out transform ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}>
        Contactez-nous sur WhatsApp
        <div className="absolute right-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </div>
  );
}
