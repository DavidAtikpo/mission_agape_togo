"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/imageagape.jpeg" alt="Mission Agape" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--logo-red)' }}>
                MISSION AGAPE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center navbar">
            <Link 
              href="/" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base" 
              aria-current="page"
            >
              Accueil
            </Link>
            <Link 
              href="/#ecoles" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
            >
              Écoles
            </Link>
            <Link 
              href="/documents" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
            >
              Documents
            </Link>
            <Link 
              href="/editions" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
            >
              Éditions
            </Link>
            <Link 
              href="/ecoles/formation-en-cours" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
            >
              Formation en cours
            </Link>
            <Link 
              href="/contact" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
            >
              Contact
            </Link>
            <Link 
              href="/besoins" 
              className="nav-link text-foreground hover:text-primary transition-colors font-semibold text-base"
            >
              Nos Besoins
            </Link>
            <div className="flex items-center space-x-3 ml-3">
              <Link 
                href="/don" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Heart className="w-4 h-4 mr-1" />
                Faire un don
              </Link>
              <Link 
                href="/inscription" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                S'inscrire
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 text-foreground hover:text-primary"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-3 text-foreground font-medium hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/#ecoles"
                className="block px-3 py-3 text-foreground font-medium hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Écoles
              </Link>
              <Link
                href="/ecoles/formation-en-cours"
                className="block px-3 py-3 text-foreground font-medium hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Formation en cours
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-foreground font-medium hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/besoins"
                className="block px-3 py-3 text-foreground font-medium hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nos Besoins
              </Link>
              <Link
                href="/don"
                className="block px-3 py-3 text-foreground font-medium hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-green-600" />
                  Faire un don
                </span>
              </Link>
              <div className="pt-2 border-t border-border mt-2">
                <Link
                  href="/inscription"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
