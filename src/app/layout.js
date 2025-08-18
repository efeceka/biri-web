import "./globals.css";
import Header from "@/components/layout/Header";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // themeColor artık burada olmalı
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#add9ef" },
    { media: "(prefers-color-scheme: dark)",  color: "#add9ef" },
  ],
};

export const metadata = {
  title: {
    default: "Biri Teknoloji",
    template: "%s | Biri Teknoloji", // sayfalar için şablon
  },
  description: "Biri Teknoloji – Dijital dönüşüm ve yenilikçi çözümler.",
  keywords: ["teknoloji", "yazılım", "dijital dönüşüm", "mobil uygulama, biri teknoloji"],
  openGraph: {
    title: "Biri Teknoloji",
    description: "Yenilikçi teknoloji çözümleriyle iş süreçlerinizi dijitalleştirin.",
    url: "https://biriteknoloji.com",
    siteName: "Biri Teknoloji",
    images: [
      {
        url: "/images/logo/hero-biri.png", // senin logon veya uygun görsel
        width: 1200,
        height: 630,
        alt: "Biri Teknoloji",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biri Teknoloji",
    description: "Dijital dönüşüm için yenilikçi çözümler",
    images: ["/images/logo/hero-biri.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className="min-h-[100svh] bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}