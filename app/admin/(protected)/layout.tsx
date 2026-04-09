import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getAdminSessionValid } from '@/lib/admin-auth'
import { logoutAdmin } from './actions'

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-muted/30 print:min-h-0 print:bg-white">
      <header className="border-b bg-background print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <nav className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
            <Link href="/admin/inscriptions" className="font-semibold text-primary">
              Administration
            </Link>
            <Link href="/admin/inscriptions" className="text-muted-foreground hover:text-foreground">
              Inscriptions
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Retour au site
            </Link>
          </nav>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="text-sm border rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 print:max-w-none print:px-0 print:py-0">
        {children}
      </div>
    </div>
  )
}
