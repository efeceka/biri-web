"use client";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const WHATSAPP_NUMBER = "905555555555"; // İstersen kullanırsın

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function IletisimIllu({ className = "" }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px) and (max-height: 800px)");
    const update = () => setShow(!mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  if (!show) return null;

  return (
    <img
      id="iletisim-illu"
      src="/images/iletisim/iletisim-img.png"
      alt="İletişim simgeleri"
      className={`h-auto object-contain opacity-95 select-none ${className}`}
    />
  );
}

export default function IletisimPage() {
  return (
    <section
      className={`
        relative w-full
        h-[calc(100svh-64px)]
        lg:min-h-screen
        bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
        pt-0 lg:pt-30
        overflow-hidden
        ${poppins.className}
      `}
    >
      {/* DIŞ SARMA: 1) içerik  2) alt künye */}
      <div className="relative max-w-[1600px] mx-auto h-full px-6 lg:px-20 grid grid-rows-[1fr_auto]">
        {/* ====== 1) İÇERİK ====== */}
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 items-center">
          {/* Mobil başlık */}
          <h2 className="lg:hidden text-center text-xl font-extrabold text-white mb-1">
            Bize Ulaşın
          </h2>

          {/* Sol: Form */}
          <form className="space-y-5 w-full max-w-[400px] mx-auto text-center lg:text-left">
            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-1 md:mb-2">Adınız:</label>
              <input
                type="text"
                name="name"
                className="w-full rounded-xl h-9 lg:h-10 px-5 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-1 md:mb-2">Telefon numaranız:</label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-xl h-9 lg:h-10 px-5 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-1 md:mb-2">e-posta adresiniz:</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl h-9 lg:h-10 px-5 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-1 md:mb-2">Mesajınız:</label>
              <textarea
                name="message"
                rows={2}
                className="w-full rounded-2xl px-5 py-4 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300 resize-none"
                required
              />
            </div>

            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#1fb25a] text-white font-semibold
                  px-6 md:px-8 h-10 md:h-12 shadow hover:brightness-110 active:scale-[.99]
                  transition
                "
              >
                GÖNDER <span className="inline-block translate-y-[1px]">›</span>
              </button>
            </div>
          </form>

          {/* Sağ: Metin + İllüstrasyon */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <p className="text-gray-700 text-base lg:text-lg">
              Veya{" "}
              <a href="mailto:info@biri.com" className="text-blue-700 underline underline-offset-4">
                info@biri.com
              </a>{" "}
              e-posta adresinden ulaşabilirsiniz.
            </p>

            {/* İllüstrasyon — mobilde kısık yükseklik */}
            <div className="relative w-full flex justify-center lg:justify-start">
              <IletisimIllu className="w-[min(80%,440px)] lg:w-[clamp(360px,38vw,620px)] max-h-[30svh] lg:max-h-none" />
            </div>
          </div>
        </div>
    </div>

      {/* Üst dekor (masaüstü) */}
      <img
        src="/images/home/home-bg3.png"
        alt=""
        className="hidden lg:block absolute top-0 right-0 w-[clamp(160px,33%,600px)] h-auto object-contain pointer-events-none z-1000"
      />
    </section>
  );
}