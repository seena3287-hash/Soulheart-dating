'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ImageIcon, MapPin, Languages, Sparkles } from 'lucide-react';

export default function ProfileCard({ profile, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index, 12) * 0.03, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all hover:border-pink-500/40 hover:shadow-glow hover:-translate-y-1"
    >
      {/* Photo Placeholder */}
      <Link href={`/profiles/${profile.id}`} className="relative block aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-fuchsia-900/40 via-pink-900/30 to-orange-900/30">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/60">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <ImageIcon className="h-6 w-6" />
          </div>
          <span className="text-xs font-medium tracking-wide uppercase text-white/50">Photo Coming Soon</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {profile.online && (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-white/90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Online
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-white/10 backdrop-blur px-2 py-1 text-[10px] font-semibold text-white/80 flex items-center gap-1">
          <Sparkles className="h-3 w-3" /> Verified
        </span>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-lg font-semibold text-white">
            {profile.name}
          </h3>
          <span className="text-sm font-medium text-white/60">{profile.age}</span>
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-white/60">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {profile.city}</span>
          <span className="flex items-center gap-1.5"><Languages className="h-3.5 w-3.5" /> {profile.languages.join(', ')}</span>
        </div>
        <Link
          href={`/profiles/${profile.id}`}
          className="mt-2 inline-flex items-center justify-center rounded-full gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Talk To Me
        </Link>
      </div>
    </motion.div>
  );
}
