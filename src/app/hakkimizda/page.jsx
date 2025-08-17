import { Poppins, Fascinate_Inline } from "next/font/google";

export const metadata = {
  title: "Hakkımızda | Biri Teknoloji",
};

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
    h-[calc(100svh-64px)]   /* mobilde header çıkarılmış tam ekran */
    lg:min-h-screen
    bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
    overflow-hidden
    flex flex-col
    justify-between
  "
>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-0 p-2 lg:py-12">
        {/* GRID: mobil tek kolon, lg: iki kolon */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center lg:ml-10 relative">
          
          {/* ================ SOL: METİN ================ */}
          <div className="text-gray-800 relative z-10">
            {/* Mobil başlık (masaüstünde gizli) */}
            <h1 className="block lg:hidden text-center text-2xl font-extrabold text-[#545454] drop-shadow-md mb-6">
              Hakkımızda
            </h1>

            <div className={`${poppins.className} space-y-6 leading-relaxed text-[12px] lg:text-[16px] text-justify [text-justify:inter-word]`}>
              <p>
                Biri İleri Teknoloji A.Ş., dijital dönüşümün hızla ilerlediği
                günümüzde, sektör odaklı çözümler geliştirmek üzere yola çıkan
                yenilikçi bir teknoloji girişimidir. Ar-Ge çalışmalarına 2024 yılı
                başında başlayan {" "}
                <span className={`${fascinate.className} text-[1.2em] text-[#545454]`}>
                    biri
                </span>
                , 2025 yılının Temmuz ayında
                şirketleşme sürecini tamamlamıştır.
              </p>

              <p>
                Mobil uygulamalar öncelikli olmak üzere; iş süreçlerini
                kolaylaştıran, verimliliği artıran ve modern teknolojileri
                hayatın her alanına entegre eden çözümler geliştiriyoruz. Yalnızca
                mobil değil, farklı platformlara da yayılan ürün ve hizmetlerimizle
                pek çok sektörde operasyonel süreçleri dijitalleştiriyor, aynı
                zamanda sadeleştiriyoruz.
              </p>

              <p>
                Amacımız; teknolojiyi sadece üretmek değil, aynı zamanda anlamlı ve
                sürdürülebilir biçimde işletmelere ve bireylere entegre etmektir.
                Bu doğrultuda, yalınlık ilkesinden ödün vermeden geleceğin
                teknolojilerine ışık tutan çözümler tasarlıyoruz.
              </p>
            </div>
          </div>

          {/* ================ SAĞ: GÖRSEL ================ */}
          <div className="relative flex lg:justify-end justify-center mt-10 lg:mt-40 z-0">
            {/* Masaüstü görsel (aynı kalsın) */}
            <img
              src="/images/hakkimizda/hakkimizda-img.png"
              alt="Teknoloji Haritası"
              className="
                hidden lg:block
                w-[clamp(360px,42vw,720px)]
                h-auto object-contain drop-shadow
              "
            />

            <img
  src="/images/hakkimizda/hakkimizda-img.png"
  alt="Teknoloji Haritası"
  className="
    block lg:hidden
    pointer-events-none select-none
    mx-auto mt-10   /* yazıdan sonra biraz boşluk */
    w-[80vw] max-w-[360px] h-auto object-contain
  "
/>
          </div>

          
        </div>

        {/* Mobil alt bilgi bloğu (sol altta) */}
        <div
  className="
    lg:hidden
    mt-6   /* görselle çakışmaması için yukarıdan boşluk */
    text-[10px] leading-snug text-left
  "
>
  <p>Ticari Unvan: Biri İleri Teknoloji Bilişim Sanayi ve Ticaret Anonim Şirketi</p>
  <p>Ticaret Sicil Numarası: 78086</p>
  <p>Mersis Numarası: 0177081335200001</p>
  <p>Şehitkamil/Gaziantep</p>
</div>
      </div>

      {/* Üst dekor – sadece masaüstü */}
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