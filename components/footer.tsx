import Link from 'next/link'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ecoles } from '@/lib/ecoles'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/ecoles', label: 'Écoles' },
  { href: '/documents', label: 'Documents' },
  { href: '/editions', label: 'Éditions' },
  { href: '/inscription', label: "S'inscrire" },
  { href: '/contact', label: 'Contact' },
]

const EMAIL = 'agapemission2014@mail.com'
const PHONE = '+228 90 92 44 79'
const PHONE_HREF = 'tel:+22890924479'
const WHATSAPP_HREF = 'https://wa.me/22890924479'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 text-slate-300 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-x-10">
          {/* Brand — pleine largeur mobile, 1ère colonne desktop */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src="/imageagape.jpeg"
                alt="Mission Agapé Togo"
                className="h-10 w-10 lg:h-11 lg:w-11 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-primary/40 transition-all"
              />
              <div>
                <p className="text-base lg:text-lg font-bold text-white leading-tight">Mission Agapé</p>
                <p className="text-xs text-slate-400">Togo</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Connaître Dieu pour mieux le servir. Formations missionnaires à Aného.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-white ${
                      link.href === '/inscription'
                        ? 'text-blue-300 font-medium hover:text-blue-200'
                        : 'text-slate-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Formations</h4>
            <ul className="space-y-2">
              {ecoles.map((ecole) => (
                <li key={ecole.slug}>
                  <Link href={ecole.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {ecole.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — pleine largeur mobile, 4e colonne desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0 text-sm">
                  <p className="text-slate-300">Aného, Togo</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-snug">
                    Rue internationale N°2 Lomé-Cotonou, Quartier Kpota
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={PHONE_HREF} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-slate-300 hover:text-white transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-500">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Lun–Ven : 8h–17h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 lg:mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-slate-500 order-2 sm:order-1">
            &copy; {currentYear} Mission Agapé Togo. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 order-1 sm:order-2">
            <Link href="/documents" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Documents
            </Link>
            <Link href="/documents/statuts" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Statuts
            </Link>
            <Link href="/contact" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
