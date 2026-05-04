"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, type Variants } from "framer-motion"
import { ArrowLeft, Facebook, Twitter, Linkedin, Send, MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
}

/** Bureau principal — Aného, Togo */
const OFFICE_LAT = 6.226766
const OFFICE_LNG = 1.588779
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${OFFICE_LAT},${OFFICE_LNG}`
const OSM_DELTA = 0.012
const OSM_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${OFFICE_LNG - OSM_DELTA}%2C${OFFICE_LAT - OSM_DELTA}%2C${OFFICE_LNG + OSM_DELTA}%2C${OFFICE_LAT + OSM_DELTA}&layer=mapnik&marker=${OFFICE_LAT}%2C${OFFICE_LNG}`

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  // Animation on mount
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.main 
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-b from-background to-blue-50/30 text-foreground pt-3 pb-8 md:pt-8 md:pb-14"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div variants={item} className="mb-4 md:mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-primary hover:text-primary/80 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1 shrink-0" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-7 md:mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Contactez-nous
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2.5 md:mb-5 leading-tight">
            Parlons de votre projet
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-foreground/80 leading-relaxed px-1">
            Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans votre parcours spirituel.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-start"
        >
          {/* Contact Info */}
          <motion.div 
            variants={item}
            className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-8 lg:sticky lg:top-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-1 md:mb-2">
                  Nos coordonnées
                </h2>
                <div className="w-12 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-1.5 md:p-2 bg-blue-100 rounded-md md:rounded-lg text-blue-600 shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">Adresse</h3>
                    <p className="text-sm md:text-base text-gray-600 mt-0.5 md:mt-1">Aného, Togo</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Rue internationnale N°2 Lome-Cotonou, Quartier Kpota</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-1.5 md:p-2 bg-green-100 rounded-md md:rounded-lg text-green-600 shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">Téléphone</h3>
                    <a 
                      href="tel:+22890924479" 
                      className="text-sm md:text-base text-blue-600 hover:text-blue-800 transition-colors mt-0.5 md:mt-1 block"
                    >
                      +228 90 92 44 79
                    </a>
                    <a 
                      href="https://wa.me/22890924479" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 text-xs md:text-sm flex items-center gap-1 mt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                      Écrire sur WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-1.5 md:p-2 bg-purple-100 rounded-md md:rounded-lg text-purple-600 shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 break-all">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:info@missionagape-tg.com" 
                      className="text-sm md:text-base text-blue-600 hover:text-blue-800 transition-colors mt-0.5 md:mt-1 block"
                    >
                      info@missionagape-tg.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-1.5 md:p-2 bg-amber-100 rounded-md md:rounded-lg text-amber-600 shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">Horaires</h3>
                    <div className="text-xs md:text-base text-gray-600 space-y-0.5 md:space-y-1 mt-0.5 md:mt-1">
                      <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Lundi - Vendredi: 08h00 - 17h00
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Samedi: Fermé
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 md:pt-4 border-t border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Suivez-nous</h3>
                <div className="flex gap-2 md:gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-9 h-9 md:w-10 md:h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="https://wa.me/22890924479"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-9 h-9 md:w-10 md:h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={item}
            className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden"
          >
            <div className="p-4 sm:p-6 md:p-10">
              <div className="mb-5 md:mb-8">
                <div className="inline-block px-3 py-0.5 md:px-4 md:py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3">
                  Envoyez-nous un message
                </div>
                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2 leading-snug">
                  Comment pouvons-nous vous aider ?
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    Votre nom complet <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 md:pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                      Adresse email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 md:pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="jean.dupont@example.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                      Téléphone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 md:pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="+228 90 00 00 00"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-2.5 md:top-3 left-2.5 md:left-3">
                      <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="block w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 min-h-[100px] md:min-h-[160px] text-sm md:text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                      placeholder="Décrivez-nous votre demande en détail..."
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <button 
                    type="submit" 
                    className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 md:space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
                  >
                    <span className="relative">
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span>Envoyer le message</span>
                  </button>

                </motion.div>

                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg md:rounded-xl text-green-700 text-xs md:text-sm flex items-start gap-2 md:gap-3"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message envoyé avec succès !</p>
                      <p className="mt-1 text-green-600">Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          variants={item}
          className="mt-8 md:mt-16 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:min-h-[20rem]">
            <iframe
              title="Carte — Mission Agapé, Aného"
              src={OSM_EMBED_URL}
              className="h-44 sm:h-52 md:h-auto md:min-h-[20rem] w-full md:w-[55%] shrink-0 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8">
              <div className="text-center max-w-md">
                <MapPin className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 md:mb-4" />
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Notre emplacement</h3>
                <p className="text-sm md:text-base text-gray-600 mb-1">
                  Retrouvez-nous à notre bureau principal à Aného, Togo.
                  Notre équipe sera ravie de vous accueillir du lundi au vendredi.
                </p>
                <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 font-mono break-all">
                  {OFFICE_LAT.toFixed(6)}, {OFFICE_LNG.toFixed(6)}
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm md:text-base text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Ouvrir dans Google Maps
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 md:ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
