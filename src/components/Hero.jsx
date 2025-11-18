import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
            Futuristic Detailing in Somero
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Clean. Protected. Beyond Showroom.
          </h1>
          <p className="mt-4 text-lg text-slate-200/80">
            Premium wash, paint correction, and ceramic coatings with a neon space aesthetic. Local service, world-class finish.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-[0_8px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.6)] transition-shadow">
              View packages
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white">
              Book consultation
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300/80">
            <Stat k="500+" label="Cars detailed" />
            <Stat k="4.9★" label="Average rating" />
            <Stat k="24h" label="Turnaround" />
            <Stat k="100%" label="Satisfaction" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ k, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur">
      <div className="text-2xl font-semibold text-white">{k}</div>
      <div className="text-xs text-slate-300/70">{label}</div>
    </div>
  );
}
