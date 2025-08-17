// app/layout.jsx
import "./globals.css";
import Header from "@/components/layout/Header";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  // Status bar için TEK renk: gradient'in üst rengi
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#cbfdd8" },
    { media: "(prefers-color-scheme: dark)",  color: "#cbfdd8" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className="
          min-h-screen
          bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
          [background-attachment:fixed]
          pb-[env(safe-area-inset-bottom)]
        "
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}