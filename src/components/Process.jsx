import { motion } from "framer-motion";

const steps = [
  { n: 1, title: "Assessment", desc: "We inspect paint, measure thickness and plan the process." },
  { n: 2, title: "Decon & Wash", desc: "Iron removal, clay, foam wash and safe drying." },
  { n: 3, title: "Correction", desc: "Cutting and refining passes to remove swirls and haze." },
  { n: 4, title: "Protection", desc: "Ceramic coating or sealant based on your goals." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Our Process</h2>
          <p className="mt-3 text-slate-300/80">A meticulous, data-driven approach for flawless results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 text-slate-900 font-bold">{s.n}</div>
              <h3 className="mt-3 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
