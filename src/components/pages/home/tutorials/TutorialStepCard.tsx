import React from 'react'
import { Card } from '@/components/ui/card'
import { PlayCircle, LucideIcon } from 'lucide-react'

interface TutorialStepCardProps {
  id: number
  icon: LucideIcon
  title: string
  description: string
  onClick: () => void
}

export default function TutorialStepCard({ id, icon: Icon, title, description, onClick }: TutorialStepCardProps) {
  return (
    <Card
      className="p-6 bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-all group cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all relative">
          <Icon className="w-8 h-8 text-emerald-500" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="w-4 h-4 text-zinc-950" />
          </div>
        </div>
      </div>
      <div className="text-sm text-emerald-500 mb-2">Step {id}</div>
      <h3 className="text-xl mb-3 text-zinc-100">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </Card>
  )
}
