import { motion } from "framer-motion";

const tiers = [
  {
    name: "Express Wash",
    price: "€39",
    features: ["Snow foam & rinse", "Wheel clean", "Quick interior vacuum"],
    highlight: false,
  },
  {
    name: "Signature Detail",
    price: "€189",
    features: ["Two-bucket wash", "Single-stage polish", "Interior deep clean"],
    highlight: true,
  },
  {
    name: "Ceramic Pro",
    price: "€690",
    features: ["Correction prep", "2-layer ceramic", "12-month inspection"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Transparent Pricing</h2>
          <p className="mt-3 text-slate-300/80">Clear packages. No surprises. Custom quotes on request.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-white/10 bg-slate-900/50'} p-6 backdrop-blur shadow-[0_0_60px_-15px_rgba(34,211,238,0.3)] will-change-transform`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-medium text-slate-900 shadow">Most Popular</span>
              )}
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold text-cyan-300">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2 font-medium ${t.highlight ? 'bg-cyan-400 text-slate-900' : 'border border-white/15 text-white'}`}>Select</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
