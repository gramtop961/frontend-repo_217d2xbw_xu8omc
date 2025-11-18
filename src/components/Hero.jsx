import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={ref} id="top" className="relative min-h-[90vh] w-full flex items-center will-change-transform">
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            Futuristic Detailing in Somero
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white"
          >
            Clean. Protected. Beyond Showroom.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-lg text-slate-200/80"
          >
            Premium wash, paint correction, and ceramic coatings with a neon space aesthetic. Local service, world-class finish.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {[
              <a key="pricing" href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-[0_8px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.6)] transition-shadow">
                View packages
              </a>,
              <a key="book" href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white">
                Book consultation
              </a>,
            ].map((child, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                {child}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300/80"
          >
            {[
              { k: '500+', label: 'Cars detailed' },
              { k: '4.9★', label: 'Average rating' },
              { k: '24h', label: 'Turnaround' },
              { k: '100%', label: 'Satisfaction' },
            ].map((s) => (
              <Stat key={s.label} k={s.k} label={s.label} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ k, label }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur will-change-transform"
    >
      <div className="text-2xl font-semibold text-white">{k}</div>
      <div className="text-xs text-slate-300/70">{label}</div>
    </motion.div>
  );
}
