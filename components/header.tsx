'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  BookOpen,
  Contact,
  FileText,
  GraduationCap,
  History,
  Home,
} from 'lucide-react'
import MobileSidebar from '@/components/MobileSidebar'

const navLinks = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/ecoles', label: 'Écoles', icon: BookOpen },
  { href: '/documents', label: 'Documents', icon: FileText },
  { href: '/editions', label: 'Éditions', icon: History },
  { href: '/contact', label: 'Contact', icon: Contact },
]

export default function Header() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = navLinks.map((link) => ({
    ...link,
    active: link.href === '/' ? pathname === '/' : pathname.startsWith(link.href),
  }))

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="md:hidden rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Ouvrir le menu"
              >
                <img
                  src="/imageagape.jpeg"
                  alt="Ouvrir le menu Mission Agapé"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
                />
              </button>

              <Link href="/" className="hidden md:flex items-center gap-3">
                <img src="/imageagape.jpeg" alt="Mission Agape" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--logo-red)' }}>
                  MISSION AGAPE
                </span>
              </Link>

              <span
                className="md:hidden text-xl font-extrabold tracking-tight"
                style={{ color: 'var(--logo-red)' }}
              >
                MISSION AGAPE
              </span>
            </div>

            <nav className="hidden md:flex gap-6 items-center navbar">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center ml-3">
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  S&apos;inscrire
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <MobileSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        title="Mission Agapé"
        subtitle="Menu de navigation"
        items={sidebarItems}
        footer={
          <Link
            href="/inscription"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <GraduationCap className="w-4 h-4" />
            S&apos;inscrire
          </Link>
        }
      />
    </>
  )
}
