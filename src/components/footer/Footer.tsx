import { Server } from 'lucide-react'
import React from 'react'

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="hover:text-zinc-100 transition-colors">
    {children}
  </a>
)

const FooterSection = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
  <div>
    <h4 className="mb-4 text-zinc-100">{title}</h4>
    <ul className="space-y-2 text-sm text-zinc-400">
      {links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
)

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-6 h-6 text-emerald-500" />
              <span className="text-lg">Dashblock</span>
            </div>
            <p className="text-zinc-400 text-sm">
              The ultimate dashboard for Minecraft server management.
            </p>
          </div>
          <FooterSection
            title="Product"
            links={[
              { href: '#', label: 'Features' },
              { href: '#', label: 'Pricing' },
              { href: '#', label: 'Changelog' },
              { href: '#', label: 'Roadmap' }
            ]}
          />
          <FooterSection
            title="Resources"
            links={[
              { href: '#', label: 'Documentation' },
              { href: '#', label: 'API Reference' },
              { href: '#', label: 'Guides' },
              { href: '#', label: 'Support' }
            ]}
          />
          <FooterSection
            title="Company"
            links={[
              { href: '#', label: 'About' },
              { href: '#', label: 'Blog' },
              { href: '#', label: 'Careers' },
              { href: '#', label: 'Contact' }
            ]}
          />
        </div>
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © 2025 Dashblock. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-400">
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Security</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
