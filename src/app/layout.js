import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className=""
    >
      <body>
        <Header/>
        {children}
        
        </body>
    </html>
  );
}