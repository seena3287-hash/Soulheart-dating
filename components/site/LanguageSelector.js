'use client';
import { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' }
];

export default function LanguageSelector({ variant = 'light' }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className={`flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium transition-all hover:bg-white/10 hover:border-white/25 ${variant === 'dark' ? 'text-white' : 'text-white/90'}`}
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{selected.label}</span>
        <span className="sm:hidden">{selected.code.toUpperCase()}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl z-50"
          >
            <ul className="py-2">
              {LANGUAGES.map(lang => (
                <li key={lang.code}>
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setSelected(lang); setOpen(false); }}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors"
                  >
                    <span className="flex flex-col text-left">
                      <span className="font-medium">{lang.label}</span>
                      <span className="text-xs text-white/50">{lang.native}</span>
                    </span>
                    {selected.code === lang.code && <Check className="h-4 w-4 text-pink-400" />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
