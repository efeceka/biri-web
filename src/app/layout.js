import { Inter, Roboto, Montserrat, Nunito_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";


// TT Norms yerine Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Codec Pro yerine Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // başlık için bold kesitleri aç
  variable: "--font-nunito",
});

// Roboto zaten mevcut
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Biri Teknoloji",
  description: "Geleceğin teknolojileri, hayatınızı bugün kolaylaştırsın!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${roboto.variable} ${montserrat.variable} ${nunito.variable} `}
    >
      <body>
        <Header/>
        {children}
        
        </body>
    </html>
  );
}