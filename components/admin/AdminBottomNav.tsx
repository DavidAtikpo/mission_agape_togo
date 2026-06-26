'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { History, Megaphone, Users } from 'lucide-react'

const navItems = [
  { href: '/admin/inscriptions', label: 'Inscriptions', icon: Users },
  { href: '/admin/actualites', label: 'Actualités', icon: Megaphone },
  { href: '/admin/editions', label: 'Historique', icon: History },
]

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function AdminBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] print:hidden"
      aria-label="Navigation admin"
    >
      <div className="grid grid-cols-3 max-w-lg mx-auto">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 px-1 min-h-[3.75rem] transition-colors ${
                active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  active ? 'bg-primary/10' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-primary' : ''}`} strokeWidth={active ? 2.25 : 2} />
              </span>
              <span className={`text-[0.65rem] font-medium leading-none ${active ? 'text-primary' : ''}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}
