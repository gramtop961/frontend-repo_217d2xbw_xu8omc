import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur shadow-[0_0_80px_-15px_rgba(34,211,238,0.4)] will-change-transform"
          >
            <h3 className="text-2xl font-bold text-white">Book your detail</h3>
            <p className="mt-2 text-slate-300/80">Tell us about your car and preferred date. We’ll confirm within the day.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 gap-4">
              <input required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
              <input required placeholder="Email" type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
              <input required placeholder="Car & model" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
              <textarea placeholder="What do you need?" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" rows={4} />
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-900">Send request</button>
              <p className="text-xs text-slate-400">Based in Somero. We serve the surrounding region.</p>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10 p-8 will-change-transform"
          >
            <h4 className="text-white font-semibold">Why choose us</h4>
            <ul className="mt-4 space-y-3 text-slate-300/80">
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Scandinavian-grade products and methods</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Climate-aware protection for harsh winters</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Honest timelines, transparent pricing</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Friendly, local service in Somero</li>
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-slate-300/70">Reviews</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-xs text-slate-300/70">Turnaround</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
