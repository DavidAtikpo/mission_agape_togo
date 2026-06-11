"use client"

import type React from "react"
import { useState } from "react"
import {
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

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
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-50/30 text-foreground pt-3 pb-6 md:pt-4 md:pb-8">
      <div className="max-w-3xl mx-auto px-3 sm:px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          Retour à l&apos;accueil
        </Link>

        <div className="text-center mb-5">
          <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] sm:text-xs font-medium mb-2">
            Contactez-nous
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1.5 leading-tight">
            Parlons de votre projet
          </h1>
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
            Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans votre parcours
            spirituel.
          </p>
        </div>

        <div className="mb-5 rounded-md border border-green-200 bg-green-50 px-3 py-2.5 sm:px-4 sm:py-3">
          <p className="text-xs sm:text-sm font-semibold text-green-900 mb-1.5 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 shrink-0" />
            Rentrée École de Discipolat — 5 septembre 2026
          </p>
          <p className="text-[0.65rem] sm:text-xs text-green-800 leading-relaxed mb-2">
            Inscriptions ouvertes à Aného. Contactez-nous ou inscrivez-vous en ligne.
          </p>
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center px-3 py-1.5 text-xs sm:text-sm bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
          >
            S&apos;inscrire maintenant
          </Link>
        </div>

        <section className="border-t border-border pt-5 mb-5">
          <h2 className="text-sm sm:text-base font-bold text-primary mb-3">Nos coordonnées</h2>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Adresse</p>
                <p className="text-foreground/70">Aného, Togo</p>
                <p className="text-foreground/60 text-[0.65rem] sm:text-xs">
                  Rue internationnale N°2 Lome-Cotonou, Quartier Kpota
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Téléphone</p>
                <a href="tel:+22890924479" className="text-primary hover:underline">
                  +228 90 92 44 79
                </a>
                <a
                  href="https://wa.me/22890924479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-700 hover:underline text-[0.65rem] sm:text-xs mt-0.5"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-semibold">Email</p>
                <a href="mailto:info@missionagape-tg.com" className="text-primary hover:underline break-all">
                  agapemission2014@mail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Horaires</p>
                <p className="text-foreground/70">Lundi - Vendredi : 08h00 - 17h00</p>
                <p className="text-foreground/70">Samedi et dimanche : Fermé</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-xs font-semibold mb-2">Suivez-nous</p>
            <div className="flex gap-2">
              <a
                href="https://web.facebook.com/profile.php?id=61588857197799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/22890924479"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-border pt-5 mb-5">
          <h2 className="text-sm sm:text-base font-bold text-foreground mb-1">Envoyez-nous un message</h2>
          <p className="text-xs sm:text-sm text-foreground/70 mb-4">
            Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                Votre nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Jean Dupont"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                  Adresse email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="jean.dupont@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+228 90 00 00 00"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                Votre message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Décrivez-nous votre demande..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md text-sm transition-colors"
            >
              <Send className="w-4 h-4" />
              Envoyer le message
            </button>

            {submitted ? (
              <p className="text-xs sm:text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                Message envoyé avec succès. Nous vous répondrons bientôt.
              </p>
            ) : null}
          </form>
        </section>

        <section className="border-t border-border pt-5">
          <h2 className="text-sm sm:text-base font-bold text-foreground mb-3">Notre emplacement</h2>
          <iframe
            title="Carte — Mission Agapé, Aného"
            src={OSM_EMBED_URL}
            className="h-40 sm:h-48 w-full rounded-md border border-border mb-3"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="text-xs sm:text-sm text-foreground/70 mb-2">Bureau principal à Aného, Togo.</p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs sm:text-sm text-primary hover:underline font-medium"
          >
            <MapPin className="w-3.5 h-3.5 mr-1" />
            Ouvrir dans Google Maps
          </a>
        </section>
      </div>
    </main>
  )
}
