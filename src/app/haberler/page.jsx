export const metadata = {
  title: "Haberler | Biri Teknoloji",
};

export default function HaberlerPage() {
  return (
    <section
      className="
        relative w-full
        h-[calc(100svh-64px)]    /* MOBİL: sticky header 64px */
        lg:h-[calc(100vh-80px)]  /* DESKTOP: header 80px */
        bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
        overflow-hidden
      "
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-20">
        {/* Orta hizalama için full-height flex */}
        <div className="h-full flex flex-col items-center justify-center text-center">
          {/* İkon */}
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 md:w-28 md:h-28 text-gray-600 opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 9v6h2l5 5V4L6 9H4zm13.5-1c-.828 0-1.5.672-1.5 1.5v5c0 .828.672 1.5 1.5 1.5S19 15.328 19 14.5v-5c0-.828-.672-1.5-1.5-1.5zM21 9h-1v6h1V9z" />
            </svg>
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
        className="hidden lg:block absolute top-0 right-0 w-[clamp(160px,33%,600px)] h-auto object-contain pointer-events-none"
      />
    </section>
  );
}