import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-6 text-zinc-50">
          Ready to Level Up Your Server Management?
        </h2>
        <p className="text-xl text-zinc-400 mb-8">
          Join thousands of server owners who trust ServerCraft for their infrastructure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection