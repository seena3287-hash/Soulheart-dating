'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import LanguageSelector from '@/components/site/LanguageSelector';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0810] text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial gradients */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-pink-600/25 blur-[140px]" />
        <div className="absolute top-1/3 -right-52 h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[140px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
          }}
        />

        {/* Floating hearts */}
        {[
          { top: '15%', left: '8%', size: 22, delay: 0 },
          { top: '28%', left: '85%', size: 18, delay: 0.6 },
          { top: '65%', left: '12%', size: 26, delay: 1.2 },
          { top: '78%', left: '78%', size: 20, delay: 0.3 },
          { top: '48%', left: '92%', size: 16, delay: 1.8 },
          { top: '85%', left: '45%', size: 24, delay: 0.9 }
        ].map((h, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/60"
            style={{ top: h.top, left: h.left }}
            initial={{ y: 0, opacity: 0.4 }}
            animate={{ y: [-12, 12, -12], opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: h.delay, ease: 'easeInOut' }}
          >
            <Heart style={{ width: h.size, height: h.size }} className="fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto flex items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.span
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl gradient-brand shadow-glow"
            >
              <Heart className="h-5 w-5 text-white fill-white" />
            </motion.span>
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
              <span className="gradient-text">SoulHeart</span>
              <span className="text-white">DatingApp</span>
            </span>
          </Link>
          <LanguageSelector />
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Premium Indian Dating Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-balance text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            <span className="gradient-text">START</span>
            <br />
            <span className="text-white">SOMETHING</span>
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">EPIC</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full gradient-brand"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex flex-col items-center gap-4"
          >
            <Link
              href="/profiles"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full gradient-brand px-10 py-5 text-lg font-bold text-white shadow-glow transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Click to Start</span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-sm font-medium tracking-widest text-white/60 uppercase"
            >
              Click to Start
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
