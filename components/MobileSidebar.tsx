'use client'

import Link from 'next/link'
import { useEffect, type ReactNode } from 'react'
import { X, type LucideIcon } from 'lucide-react'

export type MobileSidebarItem = {
  href: string
  label: string
  icon?: LucideIcon
  external?: boolean
  active?: boolean
}

type MobileSidebarProps = {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  items: MobileSidebarItem[]
  footer?: ReactNode
}

export default function MobileSidebar({
  open,
  onClose,
  title,
  subtitle,
  items,
  footer,
}: MobileSidebarProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label={title}>
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
        onClick={onClose}
        aria-label="Fermer le menu"
      />

      <aside className="absolute inset-y-0 left-0 flex w-[min(100vw-2.5rem,18.5rem)] flex-col bg-background border-r border-border shadow-2xl animate-in slide-in-from-left duration-200">
        <div className="flex items-start justify-between gap-3 border-b px-4 py-4">
          <div className="min-w-0">
            <p className="font-bold text-foreground leading-tight">{title}</p>
            {subtitle ? <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p> : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {items.map((item) => {
            const Icon = item.icon
            const className = `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
              item.active
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-muted'
            }`

            if (item.external) {
              return (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  onClick={onClose}
                >
                  {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                  {item.label}
                </a>
              )
            }

            return (
              <Link key={item.href + item.label} href={item.href} className={className} onClick={onClose}>
                {Icon ? <Icon className="w-4 h-4 shrink-0" /> : null}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {footer ? <div className="border-t p-3 space-y-2">{footer}</div> : null}
      </aside>
    </div>
  )
}
