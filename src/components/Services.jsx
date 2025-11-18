import { SprayCan, Shield, Sparkles, Stars, Gauge, Droplet } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: SprayCan,
    title: "Foam Jet Wash",
    desc: "pH-neutral foam, contactless pre-rinse, purified water rinse.",
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    desc: "Single to multi-stage correction for swirl and hologram removal.",
  },
  { icon: Shield, title: "Ceramic Coating", desc: "3–5 year hydrophobic nano-ceramic protection." },
  { icon: Stars, title: "Interior Detail", desc: "Steam clean, ozone treatment, leather care and protection." },
  { icon: Gauge, title: "Engine Bay", desc: "Degrease, dress and protect for a like-new look." },
  { icon: Droplet, title: "Headlight Restore", desc: "Sanding, polish and UV sealant for clarity and safety." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(650px_circle_at_20%_10%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(700px_circle_at_80%_10%,rgba(59,130,246,0.06),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Detailing Services</h2>
          <p className="mt-3 text-slate-300/80">Focused packages tuned for Finland’s roads and weather.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur shadow-[0_0_60px_-20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_80px_-16px_rgba(34,211,238,0.5)] transition-shadow">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 blur-xl bg-cyan-400/30 rounded-full" />
                  <Icon className="relative h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
