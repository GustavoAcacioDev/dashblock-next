import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import DashboardClient from './client'

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/login')
  }

  return <DashboardClient user={session.user} />
}
