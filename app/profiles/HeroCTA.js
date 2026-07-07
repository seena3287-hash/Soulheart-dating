'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
    >
      <Link
        href="/profiles"
        className="group inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-[1.03] active:scale-[0.98]"
      >
        <Sparkles className="h-4 w-4" />
        Sign Up Now For Free!
      </Link>
      <Link
        href="/how-to-call"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-4 text-sm font-semibold text-white/90 transition-all hover:bg-white/10"
      >
        How does it work?
      </Link>
    </motion.div>
  );
}
