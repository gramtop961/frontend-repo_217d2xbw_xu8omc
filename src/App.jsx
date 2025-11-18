import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Process from './components/Process'
import CTA from './components/CTA'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: 'spring', stiffness: 140, damping: 20, mass: 0.6 }}>
      <LazyMotion features={domAnimation} strict>
        <div className="min-h-screen bg-slate-950 text-slate-200">
          <Navbar />
          <Hero />
          <Services />
          <Pricing />
          <Process />
          <CTA />

          <footer className="relative border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400">
              © {new Date().getFullYear()} Somero Auto Spa. All rights reserved.
            </div>
          </footer>
        </div>
      </LazyMotion>
    </MotionConfig>
  )
}

export default App
