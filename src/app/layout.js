import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className=""
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body>
        <Header/>
        {children}
        
        </body>
    </html>
  );
}