import React from 'react'
import { Zap, Shield, Users, BarChart3, Database, Server } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-zinc-50">
            Everything You Need to Manage Your Servers
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Powerful features designed for server administrators who demand the best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Zap}
            title="Real-time Monitoring"
            description="Monitor CPU, RAM, TPS, and player counts in real-time with beautiful visualizations"
          />

          <FeatureCard
            icon={Shield}
            title="Advanced Security"
            description="DDoS protection, automated backups, and granular permission controls"
          />

          <FeatureCard
            icon={Users}
            title="Player Management"
            description="Manage players, bans, whitelist, and permissions all from one dashboard"
          />

          <FeatureCard
            icon={BarChart3}
            title="Analytics & Insights"
            description="Detailed analytics on player behavior, server performance, and growth trends"
          />

          <FeatureCard
            icon={Database}
            title="Automated Backups"
            description="Schedule automatic backups with one-click restore functionality"
          />

          <FeatureCard
            icon={Server}
            title="Multi-Server Support"
            description="Manage unlimited servers from a single, unified control panel"
          />
        </div>
      </div>
    </section>
  )
}
