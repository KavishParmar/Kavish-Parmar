import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kavish Parmar | Web Designer & Developer in Indore, Rajgarh & Dhar",
  description: "Kavish Parmar is a professional web designer and developer specializing in React, Next.js, and UI/UX design. Serving Indore, Rajgarh, Dhar, Shujalpur, and Akodia.",
  keywords: ["web designer Indore", "web developer Indore", "React developer", "Next.js developer", "UI/UX designer", "freelance web designer", "website development Indore", "Rajgarh", "Dhar", "Shujalpur", "Akodia"],
  authors: [{ name: "Kavish Parmar" }],
  alternates: {
    canonical: "https://kavishparmar.com",
  },
  openGraph: {
    title: "Kavish Parmar | Professional Web Designer & Developer",
    description: "Crafting digital experiences that engage and inspire in Indore, Rajgarh, and Dhar.",
    url: "https://kavishparmar.com",
    siteName: "Kavish Parmar Portfolio",
    images: [
      {
        url: "https://kavishparmar.com/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Kavish Parmar - Web Designer & Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavish Parmar | Web Designer & Developer",
    description: "Professional web design and development services in Madhya Pradesh.",
    images: ["https://kavishparmar.com/profile.jpg"],
  },
  verification: {
    google: "TkjkfDJgcp-IEpaGyhYFjMApZzA8614Lw1C7-s9LN7I",
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Indore, Rajgarh, Dhar",
    "geo.position": "22.7196;75.8577",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kavish Parmar",
  "url": "https://kavishparmar.com",
  "image": "https://kavishparmar.com/profile.jpg",
  "jobTitle": "Web Designer & Developer",
  "description": "Professional web designer and developer specializing in React, Next.js, and modern web technologies",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "email": "kavishparmar5@gmail.com",
  "telephone": "+919302492158",
  "sameAs": [
    "https://www.linkedin.com/in/kavishparmar",
    "https://github.com/kavishparmar"
  ],
  "knowsAbout": ["Web Design", "Web Development", "React", "Next.js", "UI/UX Design", "E-commerce"],
  "worksFor": {
    "@type": "Organization",
    "name": "Kavish Parmar - Web Solutions"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
