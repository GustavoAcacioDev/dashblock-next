import React from 'react'
import { Card } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
      <h3 className="text-xl mb-2 text-zinc-100">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </Card>
  )
}
