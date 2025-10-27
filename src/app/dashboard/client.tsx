'use client'

import { signOut } from 'next-auth/react'

type User = {
  id: string
  name?: string | null
  email?: string | null
}

export default function DashboardClient({
  user,
}: {
  user: User
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashblock</h1>
            <p className="text-sm text-gray-600">Welcome, {user.name}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Welcome to Dashblock</h2>
          <p className="text-gray-500">Your dashboard is ready.</p>
        </div>
      </main>
    </div>
  )
}
