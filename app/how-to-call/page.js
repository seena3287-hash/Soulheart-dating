import Link from 'next/link';
import MainNavbar from '@/components/site/MainNavbar';
import Footer from '@/components/site/Footer';
import { Phone, Globe, ArrowRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'How To Call — SoulHeartDatingApp',
  description: 'Two easy ways to connect on SoulHeartDatingApp. Use your mobile phone or start a website chat instantly.'
};

const OPTIONS = [
  {
    icon: Phone,
    tag: 'Option 1',
    title: 'Simply use your phone to talk',
    description: 'Get comfortable with your mobile phone and dial the phone dating number. Anonymous, secure and available 24/7 across India.',
    perks: ['No app download needed', 'Anonymous caller ID', 'Crystal clear audio']
  },
  {
    icon: Globe,
    tag: 'Option 2',
    title: 'Easy website calling',
    description: 'Select a profile you prefer and click to talk immediately. Direct in-browser calling with zero setup.',
    perks: ['One-click connect', 'Works on any device', 'Secure encrypted calls']
  }
];

export default function HowToCallPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0810] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[130px]" />
      </div>

      <MainNavbar />

      <section className="container mx-auto px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Two simple ways to connect
          </span>
          <h1 className="mt-6 font-display text-balance text-5xl font-bold tracking-tight md:text-6xl">
            <span className="gradient-text">How To</span> Call
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
            Choose the option that works best for you. Both are private, premium and always available.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {OPTIONS.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 transition-all hover:border-pink-500/40 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full gradient-brand opacity-20 blur-3xl transition-opacity group-hover:opacity-40" />
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                      <Zap className="h-3 w-3" /> {opt.tag}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand shadow-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">{opt.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{opt.description}</p>

                  <ul className="flex flex-col gap-2">
                    {opt.perks.map(perk => (
                      <li key={perk} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500/20 text-pink-300">
                          <ShieldCheck className="h-3 w-3" />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/profiles"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
