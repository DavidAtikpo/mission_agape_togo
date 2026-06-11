'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { ADMIN_SESSION_COOKIE } from '@/lib/admin-session'
import { getAdminSessionValid } from '@/lib/admin-auth'
import prisma from '@/lib/prisma'

export async function logoutAdmin() {
  ;(await cookies()).delete(ADMIN_SESSION_COOKIE)
  redirect('/admin/login')
}

export async function deleteInscription(formData: FormData) {
  if (!(await getAdminSessionValid())) {
    redirect('/admin/login')
  }

  const id = formData.get('id')
  const redirectTo = formData.get('redirectTo')

  if (typeof id !== 'string' || !id.trim()) {
    return
  }

  try {
    await prisma.inscription.delete({ where: { id: id.trim() } })
  } catch {
    return
  }

  revalidatePath('/admin/inscriptions')
  revalidatePath(`/admin/inscriptions/${id.trim()}`)

  if (typeof redirectTo === 'string' && redirectTo.startsWith('/admin')) {
    redirect(redirectTo)
  }
}
