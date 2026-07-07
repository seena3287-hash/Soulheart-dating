'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/profiles' },
  { label: 'Login', href: '/profiles' },
  { label: 'Get minutes', href: '/profiles' },
  { label: 'How to call?', href: '/how-to-call' },
  { label: 'We are hiring', href: '/profiles' }
];

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-brand shadow-glow">
            <Heart className="h-4.5 w-4.5 text-white fill-white" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text">SoulHeart</span>
            <span className="text-white">DatingApp</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-pink-500 after:to-orange-400 after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-xl"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
