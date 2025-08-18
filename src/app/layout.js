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
  title: "Biri Teknoloji",
  description: "Geleceğin teknolojileri, hayatınızı bugün kolaylaştırsın!",
  // BURADAN themeColor'ı kaldırdık
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