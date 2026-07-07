import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand">
            <Heart className="h-4 w-4 text-white fill-white" />
          </span>
          <span className="font-display text-base font-semibold">
            <span className="gradient-text">SoulHeart</span>
            <span className="text-white">DatingApp</span>
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          <Link href="/profiles" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/profiles" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/profiles" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/profiles" className="hover:text-white transition-colors">Support</Link>
        </nav>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} SoulHeartDatingApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
