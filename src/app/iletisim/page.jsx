"use client";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const WHATSAPP_NUMBER = "905555555555"; // 90 + GSM. Kendi numaranızla değiştirin.

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function IletisimPage() {
  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const text =
      `Merhaba, bir iletişim formu gönderildi:\n` +
      `• Ad: ${name || "-"}\n` +
      `• Telefon: ${phone || "-"}\n` +
      `• E-posta: ${email || "-"}\n` +
      `• Mesaj: ${message || "-"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // yeni sekmede WhatsApp
  }

  function IletisimIllu({ className = "" }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Yalnızca EKRAN GENİŞLİĞİ ≤ 768px ve YÜKSEKLİK ≤ 800px olduğunda gizle
    const mq = window.matchMedia("(max-width: 768px) and (max-height: 800px)");
    const update = () => setShow(!mq.matches);
    update();

    // Event listener
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
      className={`w-[min(85%,500px)] lg:w-[clamp(360px,38vw,620px)] h-auto object-contain opacity-95 select-none ${className}`}
    />
  );
}

  return (
    <section
  className={`
    relative w-full
    min-h-screen
    bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
    lg:pt-30
    lg:pb-10
    overflow-hidden
    flex items-center pt-12
    ${poppins.className}
  `}
>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* SOL: FORM */}
          <form 
            onSubmit={onSubmit} 
            className="space-y-6 w-full max-w-[400px] mx-auto text-center lg:text-left"
          >
            {/* Ad */}
            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">Adınız:</label>
              <input
                type="text"
                name="name"
                className="w-full rounded-xl h-10 px-5 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300"
                required
              />
            </div>

            {/* Telefon */}
            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">Telefon numaranız:</label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-xl h-10 px-5 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300"
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">e-posta adresiniz:</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl h-10 px-5 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300"
                required
              />
            </div>

            {/* Mesaj */}
            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">Mesajınız:</label>
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-2xl px-5 py-4 bg-white/95 shadow outline-none ring-0 focus:ring-2 focus:ring-violet-300 resize-none"
                required
              />
            </div>

            {/* Gönder (WhatsApp) */}
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
                GÖNDER
                <span className="inline-block translate-y-[1px]">›</span>
              </button>
            </div>
          </form>

          {/* SAĞ: BİLGİ + İKON */}
          <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <p className="text-gray-700 text-lg">
              Veya{" "}
              <a href="mailto:info@biri.com" className="text-blue-700 underline underline-offset-4">
                info@biri.com
              </a>{" "}
              e-posta adresinden ulaşabilirsiniz.
            </p>

            <div className="relative flex justify-center lg:justify-start -mt-4 sm:-mt-6 lg:mt-0 w-full">
  <IletisimIllu className="block mx-auto lg:mx-0" />
</div>
          </div>
        </div>
      </div>

      {/* Üst dekor sadece masaüstü */}
      <img
        src="/images/home/home-bg3.png"
        alt=""
        className="hidden lg:block absolute top-0 right-0 w-[clamp(160px,33%,600px)] h-auto object-contain pointer-events-none"
      />
    </section>
  );
}