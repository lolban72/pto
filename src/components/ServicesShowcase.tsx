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

            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => scrollRow("left")}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                  isLight
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "border border-white/10 bg-white/[0.05] text-white/72 hover:bg-white/[0.09]"
                }`}
                aria-label="Прокрутить услуги влево"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollRow("right")}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                  isLight
                    ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    : "border border-white/10 bg-white/[0.05] text-white/72 hover:bg-white/[0.09]"
                }`}
                aria-label="Прокрутить услуги вправо"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)]">
            <div className={`${cardClass} rounded-[28px] p-6`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#4b8dff]">
                Формат подключения
              </div>

              <p
                className={`mt-4 text-[15px] leading-7 ${
                  isLight ? "text-slate-600" : "text-white/62"
                }`}
              >
                Подключаемся точечно к проблемным разделам либо берем на себя
                полный контур ПТО по объекту. Фокус всегда один: комплект должен
                быть собран, проверяем и готов к следующему этапу.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Исполнительная документация по объекту",
                  "Производственная документация и схемы",
                  "Сопровождение замечаний, проверок и сдачи",
                ].map((item) => (
                  <div
                    key={item}
                    className={`rounded-[20px] px-4 py-4 text-[14px] leading-6 ${
                      isLight
                        ? "border border-slate-200 bg-slate-50 text-slate-700"
                        : "border border-white/10 bg-white/[0.04] text-white/76"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsServicesModalOpen(true)}
                className={`mt-6 inline-flex h-[44px] items-center rounded-full px-5 text-[14px] font-medium transition ${
                  isLight
                    ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    : "border border-white/10 bg-white/[0.05] text-white/88 hover:bg-white/[0.08]"
                }`}
              >
                Смотреть все услуги
                <span className="ml-2">→</span>
              </button>
            </div>

            <div
              ref={rowRef}
              className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((item, index) => (
                <article
                  key={item.title}
                  className={`${cardClass} group flex min-h-[320px] min-w-[290px] flex-col rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(75,141,255,0.14)] md:min-w-[330px]`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-[74px] w-[74px] items-center justify-center rounded-[22px] bg-[radial-gradient(circle,rgba(75,141,255,0.22)_0%,rgba(75,141,255,0.08)_45%,transparent_75%)] shadow-[0_0_30px_rgba(75,141,255,0.24)] transition duration-300 group-hover:shadow-[0_0_40px_rgba(75,141,255,0.4)]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={56}
                        height={56}
                        className="object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div
                      className={`font-mono text-[12px] uppercase tracking-[0.18em] ${
                        isLight ? "text-slate-400" : "text-white/36"
                      }`}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="mt-6 text-[22px] font-semibold leading-[1.05] tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 text-[14px] leading-7 ${
                      isLight ? "text-slate-600" : "text-white/62"
                    }`}
                  >
                    {item.text}
                  </p>

                  <div className="mt-auto pt-8">
                    <div
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
                        isLight
                          ? "border border-slate-200 bg-slate-50 text-slate-700"
                          : "border border-white/10 bg-white/[0.04] text-white/72"
                      } transition duration-300 group-hover:translate-x-1`}
                    >
                      →
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
