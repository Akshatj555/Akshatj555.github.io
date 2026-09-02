import type { Metadata } from 'next';
import Script from 'next/script';
import { Syne, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import MagneticCursor from '@/components/MagneticCursor';
import PageTransition from '@/components/PageTransition';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Akshat Jain — Senior Software Engineer',
  description: 'Personal portfolio of Akshat Jain, a Senior Software Engineer specializing in scalable systems, cloud infrastructure, and full-stack development.',
  keywords: ['Akshat Jain', 'Software Engineer', 'Portfolio', 'Full Stack', 'DevOps', 'Cloud', 'React', 'Next.js'],
  authors: [{ name: 'Akshat Jain' }],
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Akshat Jain — Senior Software Engineer',
    description: 'Personal portfolio of Akshat Jain',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <MagneticCursor />
          <div className="layout">
            <div className="gradient-orb orb-1" aria-hidden />
            <div className="gradient-orb orb-2" aria-hidden />
            <Sidebar />
            <main className="main-content">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </div>
        </ThemeProvider>

        {/* ── Free Privacy-Friendly Analytics (GoatCounter) ── */}
        <Script
          strategy="afterInteractive"
          data-goatcounter="https://akshatj555.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
        />

        {/* ── Google Analytics 4 (Optional: activates if NEXT_PUBLIC_GA_ID is set) ── */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
