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
    h-screen                 /* tam ekran */
    bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
    pt-[64px] lg:pt-20       /* mobilde header yüksekliği kadar boşluk */
    overflow-hidden
  "
>
      {/* İçerik container */}
      <div className="relative max-w-[1600px] mx-auto h-full px-6 lg:px-20">
        {/* Metin blok */}
        <div className="h-full flex items-start lg:items-center">
          <div
            className="
              max-w-lg mx-auto lg:ml-20 text-center lg:text-center z-10
              relative lg:mt-0
              translate-y-20 sm:translate-y-0
            "
          >
            <h1 className={`${nunito.className} relative text-gray-900 leading-tight`}>
              {/* BG sadece mobilde, metnin ARKASINDA */}
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

              {/* Metinler ÖNDE */}
              <span className="relative z-10 block text-3xl lg:text-5xl py-2">
                Teknolojinin kalbinde;
              </span>

              <span className="relative z-10 flex items-center justify-center gap-2 mt-4 lg:mt-6">
                <span className="text-3xl lg:text-6xl">Artık</span>

                <span className={`${fascinate.className} text-5xl lg:text-7xl mb-1`}>
                  biri
                </span>

                <span className="text-3xl lg:text-6xl">var!</span>
              </span>
            </h1>

            <p className={`${poppins.className} text-base lg:text-lg text-[#737373] mt-5 lg:mt-2`}>
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
            h-auto max-h-[815px]
            drop-shadow-2xl select-none object-contain
          "
        />

        {/* Mobil görsel – taşmayı engellemek için max-height verildi */}
        <img
          src="/images/home/mobil-bg1.png"
          alt="Mobil görsel"
          className="
            block lg:hidden
            absolute bottom-0 left-0
            w-[100vw] h-auto
            max-w-[520px] max-h-[38svh]   /* <<< mobilde aşırı büyüyüp scroll yaratmasın */
            select-none object-contain pointer-events-none
          "
        />
      </div>

      {/* Üst dekor (sadece masaüstü) */}
      <img
        src="/images/home/home-bg3.png"
        alt="Dekor"
        className="
          hidden lg:block
          absolute top-0 right-0
          w-[clamp(160px,33%,600px)]
          h-auto max-h-[480px]
          select-none object-contain pointer-events-none
        "
      />
    </section>
  );
}