import type { Metadata } from 'next';
import { Jost, Playfair_Display } from 'next/font/google';
import './(default)/css/globals.css';

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Resumtize — AI Resume Tailor',
  description: 'AI-Powered Resume Tailoring and Optimization Engine by Mughees',
  applicationName: 'Resumtize',
  keywords: ['resumtize', 'resume matcher', 'resume builder', 'resume AI', 'mughees'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className="h-full" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${playfairDisplay.variable} antialiased bg-background text-foreground min-h-full`}
      >
        {children}
      </body>
    </html>
  );
}
