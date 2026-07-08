import { Suspense } from 'react';
import Script from 'next/script';
import MainNavbar from '@/components/site/MainNavbar';
import Footer from '@/components/site/Footer';
import ProfileCard from '@/components/site/ProfileCard';
import Pagination from '@/components/site/Pagination';
import SearchBar from '@/components/site/SearchBar';
import { getProfiles } from '@/lib/profiles';
import HeroCTA from './HeroCTA';

export const metadata = {
  title: 'Discover Profiles — SoulHeartDatingApp',
  description:
    'Browse verified profiles across India. Connect in English, Hindi, Kannada, Telugu and more on SoulHeartDatingApp.'
};

export default async function ProfilesPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.min(
    Math.max(parseInt(params?.page || '1', 10) || 1, 1),
    5
  );

  const profiles = getProfiles(page, 24);

  return (
    <div className="relative min-h-screen bg-[#0a0810] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[130px]" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-orange-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-fuchsia-700/15 blur-[130px]" />
      </div>

      <MainNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
              Trusted by thousands across India
            </span>

            <h1 className="mt-6 font-display text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Welcome to the <span className="gradient-text">#1</span> Indian Phone Dating Chat Site!
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
              Meet, chat and connect with premium verified profiles from every corner of India.
              Real people. Real conversations. Real chemistry.
            </p>

            <div className="mt-8">
              <HeroCTA />
            </div>
          </div>

          {/* Search */}
          <div className="mt-12">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Profile Grid */}
      <section className="relative container mx-auto px-4 pb-16 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Featured Profiles
            </h2>

            <p className="mt-1 text-sm text-white/60">
              Page {page} of 5 · 24 profiles per page
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Green dot = Online now
          </div>
        </div>

        <Suspense fallback={<GridSkeleton />}>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {/* First 8 cards */}
            {profiles.slice(0, 8).map((p, i) => (
              <ProfileCard
                key={p.id}
                profile={p}
                index={i}
              />
            ))}

            {/* Native Banner */}
            <div className="col-span-full my-8">

              <Script
                src="https://pl30262214.effectivecpmnetwork.com/e2e6ca2c49c9d7a513f0ccb2aaac7fef/invoke.js"
                strategy="afterInteractive"
              />

              <div id="container-e2e6ca2c49c9d7a513f0ccb2aaac7fef"></div>

            </div>

            {/* Remaining cards */}
            {profiles.slice(8).map((p, i) => (
              <ProfileCard
                key={p.id}
                profile={p}
                index={i + 8}
              />
            ))}

          </div>

        </Suspense>

        <div className="mt-14">
          <Pagination
            current={page}
            total={5}
          />
        </div>

      </section>

      <Footer />

    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-3xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="aspect-[4/5] rounded-2xl bg-white/5" />
          <div className="mt-4 h-4 w-2/3 rounded bg-white/10" />
          <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
          <div className="mt-4 h-10 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  );
}
