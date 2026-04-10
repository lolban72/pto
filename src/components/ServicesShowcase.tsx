"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { services } from "../lib/site-content";
import { useTheme } from "./theme-provider";
import ServicesModal from "./ServicesModal";

export default function ServicesShowcase() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const { isLight } = useTheme();
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const scrollRow = (direction: "left" | "right") => {
    if (!rowRef.current) {
      return;
    }

    rowRef.current.scrollBy({
      left: direction === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  const cardClass = isLight
    ? "border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
    : "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.18)]";

  return (
    <>
      <section
        id="services"
        className={`relative overflow-hidden ${
          isLight ? "bg-[#f4f8fc] text-slate-950" : "bg-[#02040e] text-white"
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[12%] h-48 w-48 rounded-full bg-[#4b8dff]/10 blur-3xl" />
          <div className="absolute right-[10%] top-[10%] h-56 w-56 rounded-full bg-[#0ea5e9]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
                Контур задач
              </div>
              <h2 className="mt-3 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[48px]">
                Услуги, которыми
                <br />
                мы держим объект в порядке
              </h2>
            </div>

            <button
                type="button"
                onClick={() => setIsServicesModalOpen(true)}
                className={`mt-6 inline-flex h-[38px] items-center rounded-full px-4 text-[13px] font-medium transition ${
                  isLight
                    ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    : "border border-white/10 bg-white/[0.05] text-white/85 hover:bg-white/[0.08]"
                }`}
              >
                Смотреть все
                <span className="ml-2">→</span>
              </button>
          </div>
          <div
              ref={rowRef}
              className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((item) => (
                <article
                  key={item.title}
                  className={`${cardClass} group mt-2 flex min-h-[150px] min-w-[190px] flex-col rounded-[22px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]`}
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

                  <div
                    className={`text-[14px] font-semibold leading-5 ${
                      isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </div>

                  <div
                    className={`mt-3 text-[12px] leading-5 ${
                      isLight ? "text-slate-600" : "text-white/58"
                    }`}
                  >
                    {item.text}
                  </div>

                  
                </article>
              ))}
            </div>

          
        </div>
      </section>

      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        services={services}
      />
    </>
  );
}
