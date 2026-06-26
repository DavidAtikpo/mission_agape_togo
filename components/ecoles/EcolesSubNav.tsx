'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ecoles } from '@/lib/ecoles'

export default function EcolesSubNav() {
  const pathname = usePathname()
  const otherEcoles = ecoles.filter((e) => e.href !== '/ecoles')

  const tabs = [{ href: '/ecoles', label: 'Évangélisation' }, ...otherEcoles.map((e) => ({ href: e.href, label: e.shortTitle }))]

  return (
    <nav
      className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm print:hidden"
      aria-label="Navigation des écoles"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1.5 py-3 overflow-x-auto scrollbar-thin">
          {tabs.map((tab) => {
            const active =
              tab.href === '/ecoles'
                ? pathname === '/ecoles'
                : pathname === tab.href || pathname.startsWith(`${tab.href}/`)
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
