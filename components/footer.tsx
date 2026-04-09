import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 w-full min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              <span className="text-blue-400">Mission</span> Agapé Togo
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Connaitre Dieu pour mieux le servir.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/22890924479" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/ecoles" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Nos Écoles
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Écoles */}
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Nos Formations</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/ecoles/evangelisation" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Évangélisation
                </Link>
              </li>
              <li>
                <Link href="/ecoles/communication" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Communication
                </Link>
              </li>
              <li>
                <Link href="/ecoles/bible-inductive" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Bible Inductive
                </Link>
              </li>
              <li>
                <Link href="/ecoles/relation-aide" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Relation d&apos;Aide
                </Link>
              </li>
              <li>
                <Link href="/ecoles/intersession" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Intersession
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contactez-nous</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-3 group">
                <div className="p-1.5 bg-blue-900/30 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-300 text-sm sm:text-base leading-snug">Rue internationnale N°2 Lome-Cotonou, Quartier Kpota</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Aného, Togo</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group min-w-0">
                <div className="p-1.5 bg-blue-900/30 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+22890924479" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors break-all">
                  +228 90 92 44 79
                </a>
              </li>
              <li className="flex items-center gap-3 group min-w-0">
                <div className="p-1.5 bg-blue-900/30 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@missionagape.tg" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors break-all">
                  info@missionagape-tg.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm pt-1 sm:pt-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-snug">Lun-Ven: 8h-17h • Sam-Dim: Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 md:pt-10 mt-8 sm:mt-10 md:mt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left order-2 md:order-1">
              &copy; {currentYear} Mission Agapé Togo. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 order-1 md:order-2 w-full md:w-auto">
              <Link 
                href="/mentions-legales" 
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors hover:underline"
              >
                Mentions légales
              </Link>
              <Link 
                href="/confidentialite" 
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors hover:underline"
              >
                Confidentialité
              </Link>
              <Link 
                href="/cgu" 
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors hover:underline"
              >
                CGU
              </Link>
              <Link 
                href="/contact" 
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 text-center px-1">
            <p className="text-[0.65rem] sm:text-xs text-gray-500 leading-relaxed">
              Organisme de formation agréé • Association à but non lucratif
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
