import { redirect } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminBottomNav from '@/components/admin/AdminBottomNav'
import { getAdminSessionValid } from '@/lib/admin-auth'

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-muted/30 print:min-h-0 print:bg-white pb-[calc(3.75rem+env(safe-area-inset-bottom))] md:pb-0">
      <AdminHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 print:max-w-none print:px-0 print:py-0">
        {children}
      </div>
      <AdminBottomNav />
    </div>
  )
}
