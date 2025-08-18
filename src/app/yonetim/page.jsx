import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = { title: "Yönetim | Biri Teknoloji" };

const PEOPLE = [
  { name: "ALİ OZAN KAZBAŞ", title: "Kurucu Ortak & Proje Direktörü", email: "ozankazbas@biri.com", linkedin: "https://www.linkedin.com/in/aliozankazbaş" },
  { name: "MEHMET ALİ BİLEN", title: "Kurucu Ortak & Proje Operasyonlar Direktörü", email: "alibilen@biri.com", linkedin: "https://www.linkedin.com/in/mehmetalibilen" },
];

function MailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="12" fill="#e5e7eb" />
      <path d="M4.5 8.75h14a1.25 1.25 0 0 1 1.25 1.25v6.5a1.25 1.25 0 0 1-1.25 1.25h-14A1.25 1.25 0 0 1 3.25 16.5v-6.5A1.25 1.25 0 0 1 4.5 8.75Z" stroke="#374151" strokeWidth="1.4"/>
      <path d="m5 9 7 4 7-4" stroke="#374151" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="12" fill="#e5e7eb" />
      <path d="M9.2 10.2v6.1M9.2 7.9v.1" stroke="#374151" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M12.4 16.3v-3.7c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v3.7" stroke="#374151" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function Card({ person }) {
  return (
    <div
      className={`
        rounded-[28px] bg-[#f2fcf0] text-[#545454] shadow-lg backdrop-blur-sm
        flex flex-col items-center text-center
        w-[min(80vw,360px)] md:w-[clamp(280px,28vw,380px)]
        min-h-[220px] md:min-h-[260px]
        px-6 md:px-3 py-8
        ${poppins.className}
      `}
    >
      <h3 className="font-extrabold tracking-wide text-[#545454] text-[20px] md:text-[22px] lg:text-[24px]">
        {person.name}
      </h3>
      <p className="text-gray-600 mt-2 text-[14px] md:text-[15px]">{person.title}</p>

      <div className="mt-7 space-y-4 w-full">
        <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition">
          <MailIcon /><span className="truncate text-[15px]">{person.email}</span>
        </a>
        <a href={person.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900 transition">
          <LinkedinIcon /><span className="truncate text-[10px] md:text-[15px]">{person.linkedin.replace(/^https?:\/\//, "")}</span>
        </a>
      </div>
    </div>
  );
}

export default function YonetimPage() {
  return (
    <section
      className={`
        relative w-full
        h-[calc(100svh-64px)] lg:h-[calc(100vh-80px)]   /* header çıkar */
        bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
        ${poppins.className}
      `}
    >
      <div
  className="
    max-w-[1600px] mx-auto px-6 lg:px-20 h-full lg:pt-30
    grid grid-rows-[auto_1fr_auto]
  "
>
        {/* Üst mini boşluk (header'dan sonra nefes payı) */}
        <div className="h-2 md:h-1" />

        {/* Kartlar */}
        <div className="justify-self-center place-self-start lg:place-self-center">
          {/* Mobil başlık */}
          <h1 className="lg:hidden text-2xl font-extrabold text-white text-center mb-4">Yönetim</h1>

          <div className="grid grid-cols-1 md:grid-cols-[max-content_max-content] justify-center gap-4 md:gap-20">
            {PEOPLE.map((p) => (
              <Card key={p.email} person={p} />
            ))}
          </div>
        </div>

        {/* Alt görsel – mobilde daha küçük, çok kısa ekranlarda gizle */}
         <div className="self-end flex flex-col items-center pb-[env(safe-area-inset-bottom)] lg:mt-10">
     <img
  src="/images/yonetim/yonetim.png"
  alt="İllüstrasyon"
  className="
    yonetim-illu hidden md:block
    w-[min(70%,700px)] 
    lg:w-[clamp(420px,46vw,760px)]
    max-h-[22svh] sm:max-h-[28svh] md:max-h-[40vh]
    h-auto object-contain opacity-95 select-none pointer-events-none
  "
/>
    <div className="px-4 text-[10px] lg:text-[12px] text-center lg:py-2 hidden md:block">
      <p>Ticari Unvan: Biri İleri Teknoloji Bilişim Sanayi ve Ticaret A.Ş.</p>
      <p>Ticaret Sicil Numarası: 78086</p>
      <p>Mersis Numarası: 0177081335200001</p>
      <p>Şehitkamil/Gaziantep</p>
    </div>
  </div>
      </div>

      {/* Kısa ekranlarda (≤780px) alt görseli gizle – Tailwind'e dokunmadan */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-height: 500px) {
              .yonetim-illu { display: none !important; }
            }
          `,
        }}
      />

      {/* Sağ üst dekor (masaüstü) */}
      <img
        src="/images/home/home-bg3.png"
        alt=""
        className="hidden lg:block absolute top-0 right-0 w-[clamp(160px,33%,600px)] h-auto object-contain pointer-events-none"
      />
    </section>
  );
}