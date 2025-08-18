export const metadata = {
  title: "Haberler | Biri Teknoloji",
};

export default function HaberlerPage() {
  return (
    <section
      className="
        relative w-full
        h-[calc(100svh-64px)]  
        lg:h-[calc(100vh-80px)]
        bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
        overflow-hidden
      "
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-20">
        {/* Orta hizalama için full-height flex */}
        <div className="h-full flex flex-col items-center justify-center text-center">
          {/* İkon */}
          <div className="mb-6">
            <img
              src="/images/haberler/haberler-icon.png"
              alt="Haberler İkonu"
              className="w-20 h-20 md:w-28 md:h-28 opacity-90"
            />
          </div>

          {/* Mesaj */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Faaliyet duyuruları yakında!
          </h2>
        </div>
      </div>

      {/* Sağ üst dekor (sadece masaüstü) */}
      <img
        src="/images/home/home-bg3.png"
        alt=""
        className="hidden lg:block absolute top-0 right-0 w-[clamp(160px,33%,600px)] h-auto max-h-[480px] object-contain pointer-events-none z-1000"
    />
    </section>
  );
}