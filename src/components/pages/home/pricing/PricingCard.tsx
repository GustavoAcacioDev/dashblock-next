import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: number | string
  period?: string
  features: string[]
  buttonText: string
  buttonVariant?: 'default' | 'outline'
  isPopular?: boolean
}

export default function PricingCard({
  name,
  price,
  period = '/month',
  features,
  buttonText,
  buttonVariant = 'outline',
  isPopular = false
}: PricingCardProps) {
  return (
    <Card className={`p-8 bg-zinc-900 ${isPopular ? 'border-emerald-500' : 'border-zinc-800'} relative`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-sm text-zinc-950">
          Popular
        </div>
      )}
      <h3 className="text-2xl mb-2 text-zinc-100">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl text-zinc-50">${price}</span>
        <span className="text-zinc-400">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={buttonVariant}
        className={
          buttonVariant === 'outline'
            ? 'w-full border-zinc-700 hover:bg-zinc-800'
            : 'w-full bg-emerald-600 hover:bg-emerald-700'
        }
      >
        {buttonText}
      </Button>
    </Card>
  )
}
