import type React from 'react'
import EcolesSubNav from '@/components/ecoles/EcolesSubNav'

export default function EcolesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EcolesSubNav />
      {children}
    </div>
  )
}
