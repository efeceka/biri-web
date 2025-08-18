import { Poppins, Fascinate_Inline } from "next/font/google";

export const metadata = { title: "Hakkımızda | Biri Teknoloji" };

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const fascinate = Fascinate_Inline({
  subsets: ["latin"],
  weight: "400",
});

export default function Hakkimizda() {
  return (
    <section
  className="
    relative w-full
    min-h-[calc(100svh-64px)] lg:min-h-screen
    bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
    overflow-hidden
    flex flex-col 
  "
>
  {/* ORTA BLOK (metin + görsel) */}
  <div className="flex-1 flex items-start">
    <div className="max-w-[1440px] mx-auto lg:px-0 lg:py-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center lg:ml-18 w-full">
      
      {/* SOL: METİN */}
      <div className="text-gray-800 relative z-10 lg:ml-5 px-6">
        <h2 className="lg:hidden text-center text-xl font-extrabold text-white mb-2">
          Hakkımızda
        </h2>

        <div className={`${poppins.className} space-y-4 md:translate-y-15 text-[12px] md:text-[20px] lg:text-[18px] leading-snug md:leading-relaxed text-justify`}>
          <p>
            Biri İleri Teknoloji A.Ş., dijital dönüşümün hızla ilerlediği günümüzde, sektör odaklı çözümler geliştirmek üzere yola çıkan yenilikçi bir teknoloji girişimidir. Ar-Ge çalışmalarına 2024 yılı başında başlayan{" "}
            <span className={`${fascinate.className} text-[1.2em] text-[#545454]`}>biri</span>, 2025 yılının Temmuz ayında şirketleşme sürecini tamamlamıştır.
          </p>
          <p>
            Mobil uygulamalar öncelikli olmak üzere; iş süreçlerini
            kolaylaştıran, verimliliği artıran ve modern teknolojileri hayatın
            her alanına entegre eden çözümler geliştiriyoruz. Yalnızca mobil
            değil, farklı platformlara da yayılan ürün ve hizmetlerimizle pek
            çok sektörde operasyonel süreçleri dijitalleştiriyor, aynı zamanda
            sadeleştiriyoruz.
          </p>
          <p>
            Amacımız; teknolojiyi sadece üretmek değil, aynı zamanda
            anlamlı ve sürdürülebilir biçimde işletmelere ve bireylere entegre
            etmektir. Bu doğrultuda, yalınlık ilkesinden ödün vermeden
            geleceğin teknolojilerine ışık tutan çözümler tasarlıyoruz.
          </p>
        </div>
      </div>

      {/* SAĞ: GÖRSEL */}
      <div className="relative flex lg:justify-end justify-center lg:mt-40">
        {/* Masaüstü */}
        <img
          src="/images/hakkimizda/hakkimizda-img.png"
          alt="Teknoloji Haritası"
          className="hidden lg:block w-[clamp(360px,42vw,720px)] h-auto object-contain drop-shadow"
        />

        {/* Mobil */}
        <img
  src="/images/hakkimizda/hakkimizda-img.png"
  alt="Teknoloji Haritası"
  className="
    block lg:hidden
    w-[80vw] max-w-[400px]   /* genişliği %80, max genişlik 400px */
    h-auto object-contain
    ml-auto -mr-1
  "
/>
      </div>
    </div>
  </div>

  <div
    className="
      px-6 py-3 
      text-[7px] leading-tight text-left 
      lg:text-[12px] lg:leading-snug lg:px-18 lg:pb-6 lg:ml-11
    "
    >
    <p>Ticari Unvan: Biri İleri Teknoloji Bilişim Sanayi ve Ticaret A.Ş.</p>
    <p>Ticaret Sicil Numarası: 78086</p>
    <p>Mersis Numarası: 0177081335200001</p>
    <p>Şehitkamil/Gaziantep</p>
  </div>

    {/* DEKOR (masaüstü) */}
    <img
        src="/images/home/home-bg3.png"
        alt=""
        className="hidden lg:block absolute top-0 right-0 w-[clamp(160px,33%,600px)] h-auto max-h-[480px] object-contain pointer-events-none"
    />
</section>
  );
}