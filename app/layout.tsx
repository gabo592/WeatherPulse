import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Weather Pulse",
  description: "Weather App Demo",
  applicationName: "Weather Pulse",
  authors: [{ name: 'Gabriel Avilés', url: 'https://github.com/gabo592/' }],
  generator: 'Next.js',
  keywords: ['weather', 'app', 'pulse'],
  referrer: 'no-referrer-when-downgrade',
  creator: 'Gabriel Avilés',
  publisher: 'Vercel',
  icons: [
    { rel: 'apple-touch-icon', sizes: '57x57', url: '/images/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', url: '/images/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', url: '/images/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', url: '/images/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', url: '/images/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', url: '/images/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', url: '/images/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', url: '/images/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/images/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/images/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/images/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/images/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/images/favicon-16x16.png' },
  ],
  manifest: '/docs/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
