import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface TutorialStepModalProps {
  id: number
  icon: LucideIcon
  title: string
  details: string
  videoUrl: string
  isOpen: boolean
  totalSteps: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export default function TutorialStepModal({
  id,
  icon: Icon,
  title,
  details,
  videoUrl,
  isOpen,
  totalSteps,
  onClose,
  onPrevious,
  onNext
}: TutorialStepModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-emerald-500/20">
              <Icon className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <div className="text-sm text-emerald-500">Step {id}</div>
              <DialogTitle className="text-2xl text-zinc-50">{title}</DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-zinc-400">
            {details}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="aspect-video bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Button
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-800"
            onClick={onPrevious}
            disabled={id === 1}
          >
            Previous
          </Button>
          <div className="text-sm text-zinc-500">
            {id} of {totalSteps}
          </div>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={onNext}
          >
            {id === totalSteps ? 'Finish' : 'Next'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
