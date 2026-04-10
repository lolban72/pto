import Image from "next/image";
import { services } from "../lib/site-content";
import ServicesModalTrigger from "./ServicesModalTrigger";

export default function ServicesShowcase() {
  return (
    <section
      id="services"
      className="services-theme relative overflow-hidden bg-[var(--services-section-bg)] text-[var(--services-section-fg)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-48 w-48 rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-56 w-56 rounded-full bg-[#0ea5e9]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
              РљРѕРЅС‚СѓСЂ Р·Р°РґР°С‡
            </div>
            <h2 className="mt-3 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[48px]">
              РЈСЃР»СѓРіРё, РєРѕС‚РѕСЂС‹РјРё
              <br />
              РјС‹ РґРµСЂР¶РёРј РѕР±СЉРµРєС‚ РІ РїРѕСЂСЏРґРєРµ
            </h2>
          </div>

          <ServicesModalTrigger />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((item) => (
            <article
              key={item.title}
              className="group mt-2 flex min-h-[150px] min-w-[190px] flex-col rounded-[22px] border border-[var(--services-card-border)] bg-[var(--services-card-bg)] p-5 shadow-[var(--services-card-shadow)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]"
            >
              <div className="mb-2 flex h-16 w-18 items-center justify-center rounded-xl bg-[radial-gradient(circle,rgba(75,141,255,0.18)_0%,rgba(75,141,255,0.08)_40%,transparent_70%)] shadow-[0_0_25px_rgba(75,141,255,0.25)] transition duration-300 group-hover:shadow-[0_0_34px_rgba(75,141,255,0.4)]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={52}
                  height={52}
                  className="object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="text-[14px] font-semibold leading-5">
                {item.title}
              </div>

              <div className="mt-3 text-[12px] leading-5 text-[var(--services-muted)]">
                {item.text}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
