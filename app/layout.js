import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  title: 'SoulHeartDatingApp — Start Something Epic',
  description: 'SoulHeartDatingApp is a premium Indian dating chat platform. Connect with real people across India in English, Hindi, Kannada and Telugu. Start something epic today.',
  keywords: ['SoulHeartDatingApp', 'Indian dating', 'dating chat', 'phone dating', 'meet singles India'],
  openGraph: {
    title: 'SoulHeartDatingApp — Start Something Epic',
    description: 'Premium Indian dating & chat platform. Start something epic.',
    type: 'website'
  }
};

export const viewport = {
  themeColor: '#0b0b12'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
<body className="font-sans antialiased bg-background text-foreground min-h-screen">
  {children}

  {/* Popunder */}
  <Script
    src="https://pl30262212.effectivecpmnetwork.com/f2/9c/ce/f29cce01fc37241b8e00c6c8e40ca348.js"
    strategy="afterInteractive"
  />

  {/* Social Bar */}
  <Script
    src="https://pl30262213.effectivecpmnetwork.com/f1/1c/66/f11c66fefd80b611ccbc8ea467e13c71.js"
    strategy="afterInteractive"
  />
  <Script
  src="https://pl30262214.effectivecpmnetwork.com/e2e6ca2c49c9d7a513f0ccb2aaac7fef/invoke.js"
  strategy="afterInteractive"
/>
</body>
    </html>
  );
}
