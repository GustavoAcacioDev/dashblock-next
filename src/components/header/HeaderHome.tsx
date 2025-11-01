import { ServerIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

export default function HeaderHome() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <ServerIcon className="w-8 h-8 text-emerald-500" />
          <span className="text-xl">Dashblock</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-zinc-400 hover:text-zinc-100 transition-colors">Features</a>
          <a href="#pricing" className="text-zinc-400 hover:text-zinc-100 transition-colors">Pricing</a>
          <a href="#docs" className="text-zinc-400 hover:text-zinc-100 transition-colors">Docs</a>
          
          <Button
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-800 hover:text-emerald-600"
          >
            Sign In
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
