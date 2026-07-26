import type { Metadata } from "next";
import { Cairo, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brayan-ccari.vercel.app"),
  title: {
    default: "Brayan Ccari | Frontend Developer",
    template: "%s | Brayan Ccari",
  },
  description:
    "Brayan Ccari — Frontend Developer specializing in React and Next.js. 10+ shipped projects in e-commerce, real-time apps, and fintech. Available for new opportunities.",
  keywords: [
    "Brayan Ccari",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Engineer",
    "UI Developer",
    "React Portfolio",
    "Frontend Developer Portfolio",
    "Tailwind CSS",
    "Framer Motion",
    "Web Developer",
    "E-commerce Developer",
    "Full Stack Frontend",
  ],
  authors: [{ name: "Brayan Ccari", url: "https://brayan-ccari.vercel.app" }],
  creator: "Brayan Ccari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brayan-ccari.vercel.app",
    siteName: "Brayan Ccari Portfolio",
    title: "Brayan Ccari | Frontend Developer",
    description: "Frontend Developer passionate about creating captivating digital experiences.",
    images: [{ url: "/images/brayan-ccari-profile2.jpg", width: 1200, height: 630, alt: "Brayan Ccari" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayan Ccari | Frontend Developer",
    description: "Frontend Developer passionate about creating captivating digital experiences.",
    images: ["/images/brayan-ccari-profile2.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data */}
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brayan Ccari",
              url: "https://brayan-ccari.vercel.app",
              jobTitle: "Frontend Developer",
              email: "brayancclindo@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/brayan-ccari/",
                "https://github.com/BrayanCcLindo",
              ],
              knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
            }),
          }}
        />
        {/* Prevent FOUC: set theme before React hydrates */}
        {/* eslint-disable-next-line react/no-danger */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';var root=document.documentElement;root.classList.remove('light','dark');if(t==='system'){var d=window.matchMedia('(prefers-color-scheme: dark)').matches;root.classList.add(d?'dark':'light');}else{root.classList.add(t);}})();`,
          }}
        />
      </head>
      <body className={`${cairo.variable} ${openSans.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
