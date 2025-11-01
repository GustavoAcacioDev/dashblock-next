import React from 'react'
import PricingCard from './PricingCard'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-zinc-50">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-zinc-400">
            Choose the plan that&apos;s right for your server
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Starter"
            price={9}
            features={[
              'Up to 3 servers',
              'Basic monitoring',
              'Daily backups',
              'Email support'
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />

          <PricingCard
            name="Pro"
            price={29}
            features={[
              'Up to 15 servers',
              'Advanced monitoring',
              'Hourly backups',
              'Priority support',
              'Custom plugins'
            ]}
            buttonText="Get Started"
            buttonVariant="default"
            isPopular
          />

          <PricingCard
            name="Enterprise"
            price={99}
            features={[
              'Unlimited servers',
              'Real-time monitoring',
              'Continuous backups',
              '24/7 dedicated support',
              'White-label option'
            ]}
            buttonText="Contact Sales"
            buttonVariant="outline"
          />
        </div>
      </div>
    </section>
  )
}
