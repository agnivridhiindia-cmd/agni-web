import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Fraunces, Cormorant_Garamond, Slabo_13px } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { getOrganizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const slabo13px = Slabo_13px({
  subsets: ["latin"],
  variable: "--font-slabo",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: "Agnivridhi India | MSME & Startup Business Consulting",
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.company.name, url: siteConfig.seo.siteUrl }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  alternates: {
    canonical: siteConfig.seo.siteUrl,
  },
  openGraph: {
    title: "Agnivridhi India | MSME & Startup Business Consulting",
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`,
        alt: "Agnivridhi India Institutional Business Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnivridhi India | MSME & Startup Business Consulting",
    description: siteConfig.seo.defaultDescription,
    images: [`${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${fraunces.variable} ${cormorant.variable} ${slabo13px.variable}`}
    >
      <head>
        {/* Schema.org Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${slabo13px.className} font-sans antialiased text-[#181226] bg-[#F8FAFC] flex min-h-screen flex-col selection:bg-cyan-100 selection:text-[#0891B2] relative`}
      >
        <SmoothScroll>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#0891B2] focus:px-4 focus:py-2 focus:text-white focus:shadow-elevated focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
