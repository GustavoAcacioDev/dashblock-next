'use client'
import React, { useState } from 'react'
import TutorialStepCard from './TutorialStepCard'
import { Play, Link2, Settings, Rocket } from 'lucide-react';
import TutorialStepModal from './TutorialStepModal';

const tutorialSteps = [
  {
    id: 1,
    icon: Play,
    title: 'Create Account',
    description: 'Sign up for free and access your dashboard instantly. No credit card required.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Get started with ServerCraft in seconds. Simply provide your email, create a password, and verify your account. You\'ll immediately gain access to the dashboard and can start connecting your servers.'
  },
  {
    id: 2,
    icon: Link2,
    title: 'Connect Server',
    description: 'Add your server IP and credentials. We support all major Minecraft versions.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Connecting your server is simple. Enter your server IP address, port, and RCON password. We automatically detect your server version and configure the optimal monitoring settings.'
  },
  {
    id: 3,
    icon: Settings,
    title: 'Configure Settings',
    description: 'Customize monitoring alerts, backup schedules, and user permissions.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Tailor ServerCraft to your needs. Set up custom alerts for player counts, server performance, and downtime. Schedule automatic backups and configure team member permissions.'
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Start Managing',
    description: 'Monitor performance, manage players, and scale your server with ease.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Your server is now fully integrated. View real-time metrics, manage player lists, execute commands, and monitor performance all from one unified dashboard.'
  }
]

export default function TutorialSection() {
  const [openModal, setOpenModal] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-zinc-50">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-zinc-400">
            Follow these simple steps to connect and manage your first Minecraft server
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {tutorialSteps.map((step) => (
              <TutorialStepCard
                key={step.id}
                id={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
                onClick={() => setOpenModal(step.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial Modals */}
      {tutorialSteps.map((step) => (
        <TutorialStepModal
          key={step.id}
          id={step.id}
          icon={step.icon}
          title={step.title}
          details={step.details}
          videoUrl={step.videoUrl}
          isOpen={openModal === step.id}
          totalSteps={tutorialSteps.length}
          onClose={() => setOpenModal(null)}
          onPrevious={() => {
            if (step.id > 1) setOpenModal(step.id - 1);
          }}
          onNext={() => {
            if (step.id < tutorialSteps.length) {
              setOpenModal(step.id + 1);
            } else {
              setOpenModal(null);
            }
          }}
        />
      ))}
    </section>
  )
}
