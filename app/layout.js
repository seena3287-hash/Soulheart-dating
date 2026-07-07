import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

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
      </body>
    </html>
  );
}
