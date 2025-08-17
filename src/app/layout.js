// app/layout.jsx
import "./globals.css";
import Header from "@/components/layout/Header";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  // Android için status bar rengi (opsiyonel ama iyi olur)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#95bafe" },
    { media: "(prefers-color-scheme: dark)", color: "#95bafe" },
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
        style={{
          paddingTop: "env(safe-area-inset-top)",  // iPhone çentiği
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}