import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImageIcon, MapPin, Languages, Calendar, ArrowLeft, MessageCircle, Sparkles, Heart } from 'lucide-react';
import MainNavbar from '@/components/site/MainNavbar';
import Footer from '@/components/site/Footer';
import { getProfileById } from '@/lib/profiles';

export async function generateMetadata({ params }) {
  const p = await params;
  const profile = getProfileById(p.id);
  if (!profile) return { title: 'Profile — SoulHeartDatingApp' };
  return {
    title: `${profile.name}, ${profile.age} · ${profile.city} — SoulHeartDatingApp`,
    description: `Meet ${profile.name} on SoulHeartDatingApp. Speaks ${profile.languages.join(', ')}. Based in ${profile.city}.`
  };
}

export default async function ProfileDetailsPage({ params }) {
  const p = await params;
  const profile = getProfileById(p.id);
  if (!profile) notFound();

  const about = `Hi, I'm ${profile.name}. I love meaningful conversations, quiet cafes, and long weekend drives. Let's start something epic together.`;
  const interests = ['Music', 'Travel', 'Foodie', 'Movies', 'Fitness', 'Books'];

  return (
    <div className="relative min-h-screen bg-[#0a0810] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[130px]" />
      </div>

      <MainNavbar />

      <section className="container mx-auto px-4 py-10 md:px-8 md:py-14">
        <Link href="/profiles" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to profiles
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_1.2fr]">
          {/* Left: Photo Placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-fuchsia-900/40 via-pink-900/30 to-orange-900/30">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/5">
                  <ImageIcon className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase text-white/60">Photo Coming Soon</span>
              </div>
              {profile.online && (
                <span className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur px-3 py-1.5 text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Online now
                </span>
              )}
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" /> Verified Profile
              </span>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="font-display text-4xl font-bold md:text-5xl">{profile.name}</h1>
                <span className="text-2xl text-white/70">{profile.age}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1"><MapPin className="h-3.5 w-3.5" /> {profile.city}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Calendar className="h-3.5 w-3.5" /> {profile.age} yrs old</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Languages className="h-3.5 w-3.5" /> {profile.languages.join(', ')}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
              <h2 className="font-display text-lg font-semibold">About</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{about}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
              <h2 className="font-display text-lg font-semibold">Interests</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map(i => (
                  <span key={i} className="inline-flex items-center gap-1 rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-100">
                    <Heart className="h-3 w-3 fill-current" /> {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/profiles"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-brand px-6 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" /> Talk To Me
              </Link>
              <Link
                href="/how-to-call"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-4 text-sm font-semibold text-white/90 hover:bg-white/10 transition-all"
              >
                How to call?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
