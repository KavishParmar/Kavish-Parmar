import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
  title: "Kavish Parmar | Professional Web Designer & Developer",
  description: "Kavish Parmar is a creative web designer and developer specializing in modern, responsive websites.",
  keywords: ["Kavish Parmar", "web designer", "web developer", "UI/UX designer", "portfolio", "responsive design", "React", "Next.js"],
  authors: [{ name: "Kavish Parmar" }],
  openGraph: {
    title: "Kavish Parmar | Professional Web Designer & Developer",
    description: "Crafting digital experiences that engage and inspire",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
