import { Menu, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-5 py-3 shadow-[0_0_60px_-15px_rgba(56,189,248,0.4)]">
          <a href="#top" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-cyan-400/60 rounded-full" />
              <Sparkles className="relative h-7 w-7 text-cyan-300" />
            </div>
            <span className="font-semibold tracking-tight text-white">Somero Auto Spa</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20 transition">
              <Phone className="h-4 w-4" /> Book now
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-6 mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-2">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-slate-200/90 hover:text-white hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-cyan-200">
                <Phone className="h-4 w-4" /> Book now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
