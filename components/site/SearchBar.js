'use client';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-pink-500/20 via-fuchsia-500/10 to-orange-400/20 blur-xl" />
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl px-5 py-3.5 shadow-2xl">
        <Search className="h-5 w-5 text-white/60" />
        <input
          type="text"
          placeholder="Search profiles, city, language..."
          className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
        <button className="hidden sm:inline-flex rounded-full gradient-brand px-4 py-2 text-xs font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform">
          Search
        </button>
      </div>
    </div>
  );
}
