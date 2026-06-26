'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ExternalLink, History, LayoutDashboard, LogOut, Megaphone, Users } from 'lucide-react'
import { logoutAdmin } from '@/app/admin/(protected)/actions'

const navItems = [
  { href: '/admin/inscriptions', label: 'Inscriptions', icon: Users },
  { href: '/admin/actualites', label: 'Actualités', icon: Megaphone },
  { href: '/admin/editions', label: 'Historique', icon: History },
]

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function AdminHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md shadow-sm print:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link href="/admin/inscriptions" className="flex items-center gap-2.5 shrink-0 group min-w-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm shrink-0">
              <LayoutDashboard className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors truncate">
                Mission Agapé
              </p>
              <p className="text-[0.65rem] text-muted-foreground uppercase tracking-wider">Administration</p>
            </div>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors md:gap-1.5 md:px-3 md:py-1.5"
              aria-label="Voir le site"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden md:inline text-xs font-medium">Voir le site</span>
            </Link>
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground hover:text-destructive hover:border-destructive/30 hover:bg-destructive/5 transition-colors md:gap-1.5 md:px-3 md:py-1.5"
                aria-label="Déconnexion"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline text-sm font-medium">Déconnexion</span>
              </button>
            </form>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 pb-3 -mt-1" aria-label="Administration">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-all whitespace-nowrap ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
