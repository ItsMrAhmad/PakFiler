import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pakfiler.online"),
  title: "PakFiler.online | Tax Filing & NTN Registration in Pakistan - Save Rs. 1,000",
  description:
    "Pakistan's trusted online tax filing and business compliance partner. FBR income tax returns, NTN registration, GST & company incorporation. CA-certified with all services Rs. 1,000 less than market standard. WhatsApp: 03094192790.",
  keywords: [
    "Tax Filing Pakistan",
    "PakFiler",
    "Pakfiler online",
    "NTN Registration Online",
    "FBR Tax Return 2025",
    "Active Taxpayer List ATL",
    "Income Tax Return Filing",
    "Salary Tax Calculator Pakistan",
    "GST Registration FBR",
    "SECP Company Registration",
  ],
  icons: {
    icon: "/images/logo-circular.jpg",
    apple: "/images/logo-circular.jpg",
  },
  openGraph: {
    title: "PakFiler.online | Tax Filing & NTN Registration in Pakistan",
    description:
      "Save Rs. 1,000 on every tax filing & compliance service. 100% CA-Certified, Fast & Secure.",
    url: "https://pakfiler.online",
    siteName: "PakFiler.online",
    images: [
      {
        url: "/images/logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "PakFiler.online Logo",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAFCFA] text-[#1F2A2A] antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
