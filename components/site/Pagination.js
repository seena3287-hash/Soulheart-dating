'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Pagination({ current = 1, total = 5 }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const next = Math.min(current + 1, total);
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      {pages.map(p => (
        <Link
          key={p}
          href={`/profiles?page=${p}`}
          className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition-all ${
            p === current
              ? 'gradient-brand text-white shadow-glow'
              : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20'
          }`}
        >
          {p}
        </Link>
      ))}
      <Link
        href={`/profiles?page=${next}`}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-white/20 transition-all"
      >
        Next <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}
