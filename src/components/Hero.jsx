import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Fascinate_Inline } from "next/font/google";

export const fascinate = Fascinate_Inline({
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Hero() {
  return (
    <section
      className="
        relative w-full
        h-[calc(100svh-64px)]
        lg:h-screen
        bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
        pt-0 lg:pt-24
        overflow-hidden
      "
    >
      {/* İçerik container */}
      <div className="relative  mx-auto h-full px-6 lg:px-20">
        <div className="h-full flex items-start lg:items-center max-w-[1440px] mx-auto">
          <div
            className="
              max-w-lg mx-auto lg:ml-20 text-center lg:text-center z-10
              relative 
              translate-y-15 md:translate-y-15  lg:-translate-y-15
            "
          >
            <h1 className={`${nunito.className} relative text-gray-900 leading-tight`}>
              <span className="absolute -inset-10 lg:hidden z-0 pointer-events-none">
                <Image
                  src="/images/home/mobile-bg3.png"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </span>

              <span className="relative z-10 block text-3xl lg:text-5xl">
                Teknolojinin kalbinde;
              </span>

              <span className="relative z-10 flex items-center justify-center gap-5 mt-4 lg:mt-6">
                <span className="text-3xl lg:text-6xl">Artık</span>

                <span className={`${fascinate.className} text-5xl lg:text-7xl mb-1`}>
                  biri
                </span>

                <span className="text-3xl lg:text-6xl">var!</span>
              </span>
            </h1>

            <p className={`${poppins.className} text-base lg:text-lg text-[#737373] p-3 lg:p-0 mt-5 lg:mt-10`}>
              Geleceğin teknolojileri, hayatınızı bugün kolaylaştırsın!
            </p>

            <a
              href="/hakkimizda"
              className="text-[#737373] inline-block bg-[#f4ffe5] px-6 lg:px-8 py-2 lg:py-2 mt-4 rounded-full shadow hover:bg-gray-100 transition"
            >
              Hakkımızda →
            </a>
          </div>
        </div>

        {/* Telefon (sadece masaüstü) */}
       <img
  src="/images/home/home-bg2.png"
  alt="Telefon"
  className="
    hidden lg:block
    absolute bottom-0 right-0
    w-[clamp(260px,65%,1100px)]
    xl:w-[clamp(320px,70%,1400px)]   /* çok geniş ekranlarda daha büyük */
    h-auto
    max-h-[815px] xl:max-h-[950px]   /* daha yüksek sınır */
    drop-shadow-2xl select-none object-contain
  "
/>

       
         </div>
      
          <img
  src="/images/home/mobile-el.png"
  alt="Mobil görsel"
  className="
    lg:hidden
    pointer-events-none select-none
    absolute bottom-0
    left-[max(0px,env(safe-area-inset-left))]
    w-[70svw] h-auto       /* genişliği %70 yap */
    max-w-[300px]          /* maksimum genişliği sınırla */
    object-contain
    z-0
  "
/>

        {/* Üst dekor (sadece masaüstü) */}
        <img
            src="/images/home/home-bg3.png"
            alt="Dekor"
            className="
            hidden lg:block
            absolute top-0 right-0
            w-[clamp(160px,33%,600px)]
            h-auto max-h-[480px] z-1000
            select-none object-contain pointer-events-none
            "
        />
    </section>
  );
}