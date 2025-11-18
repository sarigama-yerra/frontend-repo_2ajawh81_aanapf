import React from 'react'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import Comparison from './components/Comparison'
import CTAs from './components/CTAs'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">MuDING</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#what-is" className="hover:text-slate-600">What is MuDING?</a>
            <a href="#process" className="hover:text-slate-600">How it works</a>
            <a href="#benefits" className="hover:text-slate-600">Why choose</a>
            <a href="#comparison" className="hover:text-slate-600">Compare</a>
            <a href="#faq" className="hover:text-slate-600">FAQ</a>
          </nav>
          <div className="hidden md:flex gap-3">
            <a href="#verification" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold">Start Asset Verification</a>
            <a href="#marketplace" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 ring-1 ring-slate-900/10 px-4 py-2 text-sm font-semibold">Explore Marketplace</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <WhatIs />
        <HowItWorks />
        <WhyChoose />
        <Comparison />
        <CTAs />
        <FAQ />
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} MuDING. All rights reserved.
      </footer>
    </div>
  )
}

export default App
