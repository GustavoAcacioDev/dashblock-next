import { HeroImage } from '@/assets/img'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-emerald-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-emerald-400 text-sm">🎮 Trusted by 10,000+ server owners</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-zinc-50">
              Manage Your Minecraft Servers{' '}
              <span className="text-emerald-500">Effortlessly</span>
            </h1>

            <p className="text-xl text-zinc-400">
              The most powerful dashboard for monitoring, managing, and scaling your Minecraft server infrastructure. All in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl text-zinc-100">99.9%</div>
                <div className="text-sm text-zinc-500">Uptime SLA</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl text-zinc-100">24/7</div>
                <div className="text-sm text-zinc-500">Support</div>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
              <div>
                <div className="text-2xl text-zinc-100">500ms</div>
                <div className="text-sm text-zinc-500">Avg Response</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
            <Image
              width={400}
              height={0}
              src={HeroImage}
              alt="Minecraft server dashboard preview"
              className="rounded-2xl shadow-2xl border border-zinc-800 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
