"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Bize Ulaşın", href: "/iletisim" },
  { label: "Yönetim", href: "/yonetim" },
  { label: "Haberler", href: "/haberler" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className="
        sticky top-0 z-[100] h-16      
        lg:fixed lg:inset-x-0 lg:top-0 lg:h-20
        bg-gradient-to-r from-[#cbfdd8] to-[#95bafe]
        lg:bg-transparent
      "
    >
      <div className="relative max-w-[1440px] mx-auto h-full px-4 lg:px-6 flex items-center">
        {/* Mobil: burger (sol) */}
        <button
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/10 hover:bg-black/15 transition"
        >
          <span className={`block h-[2px] w-5 bg-black transition-all ${open ? "translate-y-[6px] rotate-45" : "-translate-y-[6px]"}`} />
          <span className={`block h-[2px] w-5 bg-black transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-[2px] w-5 bg-black transition-all ${open ? "-translate-y-[6px] -rotate-45" : "translate-y-[6px]"}`} />
        </button>
        {/* Mobil: logo (sağ) */}
        <Link
        href="/"
        className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center mt-3"
        >
        <Image
            src="/images/logo/logo-header.png"
            alt="biri logo"
            width={180}
            height={60}
            priority
            className="h-auto w-auto"
        />
        </Link>

        {/* Desktop: logo (sol) */}
        <Link href="/" className="hidden lg:flex items-center gap-2 mt-10 ml-10">
        <Image
            src="/images/logo/logo-header.png"
            alt="biri logo"
            width={220}
            height={70}
            priority
            className="h-[130px] w-auto"
        />
        </Link>

        {/* Desktop: nav (ortada) */}
        <nav className="hidden lg:flex absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 items-center gap-[56px] whitespace-nowrap">
            {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-[17px] transition text-[#5e18eb] hover:text-blue-600
                    ${active ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#5e18eb]" : ""}`}
                >
                    {item.label}
                </Link>
                );
            })}
            </nav>
      </div>

      {/* Drawer overlay */}
      <button
        aria-label="Menüyü kapat"
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-[90] bg-black/40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer panel */}
      {/* Drawer panel */}
<aside
  className={`lg:hidden fixed left-0 top-0 z-[95] h-screen w-48
    bg-gradient-to-r from-[#1c4eb4] to-[#4556c0]
    shadow-xl transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    pt-6 flex flex-col
  `}
  role="dialog"
  aria-modal="true"
>
  {/* ÜST: Kapatma butonu */}
  <div className="flex justify-end px-4 mb-6">
    <button
      aria-label="Menüyü kapat"
      onClick={() => setOpen(false)}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/20 hover:bg-black/30 transition"
    >
      <span className="absolute block h-[2px] w-5 bg-white rotate-45" />
      <span className="absolute block h-[2px] w-5 bg-white -rotate-45" />
    </button>
  </div>

  {/* Linkler */}
  <div className="px-5 space-y-2">
    {NAV.map((item) => {
      const active = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`block  px-3 py-3 text-[17px] ${
            active ? "border-b-2  text-white font-semibold" : "text-white hover:bg-white/20"
          }`}
        >
          {item.label}
        </Link>
      );
    })}
  </div>

  {/* Ortadaki PNG görsel */}
  <div className="relative mt-10">
   <img 
  src="/images/header/burger-bg.png" 
  alt="Dekor" 
  className="w-[200px] h-auto opacity-90 select-none pointer-events-none"
/>
</div>
</aside>
    </header>
  );
}