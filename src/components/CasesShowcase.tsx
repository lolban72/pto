"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cases } from "../lib/site-content";
import { useTheme } from "./theme-provider";
import CasesModal from "./CasesModal";

export default function CasesShowcase() {
  const { isLight } = useTheme();
  const [isCasesModalOpen, setIsCasesModalOpen] = useState(false);

  const trustImage = isLight ? "/images/15-light.webp" : "/images/15.webp";

  const theme = useMemo(() => {
    if (isLight) {
      return {
        section: "bg-[#f6f8fc] text-slate-950",
        shell:
          "border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.94)_100%)] shadow-[0_20px_80px_rgba(15,23,42,0.06)]",
        card:
          "border border-slate-200 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_64px_rgba(37,99,235,0.12)]",
        badge: "border border-[#4b8dff]/16 bg-[#4b8dff]/8 text-[#2563eb]",
        muted: "text-slate-500",
        mutedSoft: "text-slate-600",
        overlay:
          "bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(15,23,42,0.18)_100%)]",
        stat: "border border-slate-200 bg-slate-50/90 text-slate-900",
        divider: "bg-slate-200/80",
      };
    }

    return {
      section: "bg-[#02040e] text-white",
      shell:
        "border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,32,0.96)_0%,rgba(5,8,22,0.96)_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
      card:
        "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_64px_rgba(75,141,255,0.16)]",
      badge: "border border-[#72a6ff]/18 bg-[#72a6ff]/10 text-[#8cb7ff]",
      muted: "text-white/42",
      mutedSoft: "text-white/62",
      overlay:
        "bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.52)_100%)]",
      stat: "border border-white/10 bg-white/[0.03] text-white",
      divider: "bg-white/6",
    };
  }, [isLight]);

  return (
    <>
      <section id="cases" className={`relative overflow-hidden ${theme.section}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[18%] top-[8%] h-[260px] w-[260px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
          <div className="absolute bottom-[6%] right-[10%] h-[280px] w-[280px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
          <div className="mb-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
              Практика и результат
            </div>
            <h2 className="mt-3 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[48px]">
              Кейсы, где порядок
              <br />
              по документации стал частью результата
            </h2>
          </div>

          <div className="relative grid items-stretch gap-8 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-10">
            <div
              className={`absolute bottom-0 left-[455px] top-0 hidden w-px xl:block ${theme.divider}`}
            />

            <div className={`relative flex h-full overflow-hidden rounded-[34px] p-6 md:p-8 lg:p-9 ${theme.shell}`}>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(75,141,255,0.12),transparent_42%)]" />
                <div className="absolute left-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
                <div className="absolute bottom-[-60px] right-[-40px] h-[180px] w-[180px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
              </div>

              <div className="relative flex h-full w-full flex-col">
                <div
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] ${
                    isLight
                      ? "border border-slate-200 bg-slate-50 text-slate-500"
                      : "border border-white/10 bg-white/[0.04] text-white/45"
                  }`}
                >
                  Реальные объекты
                </div>

                <p className={`mt-5 max-w-[320px] text-[15px] leading-7 ${theme.mutedSoft}`}>
                  Показываем объекты, где выстроили понятную систему ведения
                  исполнительной документации, сократили объем ручного контроля
                  и помогли пройти этапы сдачи без затяжных доборов.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Работаем в логике сроков, замечаний и состава комплекта",
                    "Подстраиваемся под тип объекта и требования заказчика",
                    "Держим в фокусе не только оформление, но и финальную передачу",
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
                  onClick={() => setIsCasesModalOpen(true)}
                  className={`mt-7 inline-flex h-[44px] w-fit items-center rounded-full px-5 text-[14px] font-medium transition ${
                    isLight
                      ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      : "border border-white/10 bg-white/[0.05] text-white/88 hover:bg-white/[0.08]"
                  }`}
                >
                  Смотреть все кейсы
                  <span className="ml-2">→</span>
                </button>

                <div className="mt-auto pt-8">
                  <div
                    className={`rounded-[24px] p-4 md:p-5 ${
                      isLight
                        ? "border border-slate-200 bg-slate-50/70"
                        : "border border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className={`font-mono text-[11px] uppercase tracking-[0.16em] ${isLight ? "text-slate-400" : "text-white/38"}`}>
                          Нам доверяют
                        </div>

                        <p className={`mt-2 max-w-[230px] text-[12px] leading-5 ${theme.mutedSoft}`}>
                          Работаем с девелоперами, промышленными заказчиками и
                          крупными подрядными контурами.
                        </p>
                      </div>

                      <div
                        className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full md:flex ${
                          isLight
                            ? "border border-slate-200 bg-white text-slate-500"
                            : "border border-white/10 bg-white/[0.04] text-white/55"
                        }`}
                      >
                        <TrustMini />
                      </div>
                    </div>

                    <div className="relative mt-4 overflow-hidden rounded-[18px]">
                      <div
                        className={`pointer-events-none absolute inset-0 z-10 ${
                          isLight
                            ? "bg-gradient-to-t from-white/20 to-transparent"
                            : "bg-gradient-to-t from-black/30 to-transparent"
                        }`}
                      />
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={trustImage}
                          alt="Компании и проекты, с которыми работает ПТО-ЮГРА"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cases.map((item) => (
                <article
                  key={item.title}
                  className={`group flex h-full min-h-[380px] flex-col overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 ${theme.card}`}
                >
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-[50%_30%] transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className={`absolute inset-0 ${theme.overlay}`} />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[18px] font-semibold leading-[1.1] tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className={`mt-3 text-[14px] leading-7 ${theme.mutedSoft}`}>
                      {item.text}
                    </p>

                    <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                      {item.stats.map((stat, index) => (
                        <div
                          key={`${item.title}-${stat.label}`}
                          className={`flex items-center gap-3 rounded-[18px] p-3 ${theme.stat}`}
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${theme.badge}`}
                          >
                            {index === 0 ? <CalendarMini /> : <StatusMini />}
                          </div>

                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold leading-4">
                              {stat.value}
                            </div>
                            <div className={`mt-1 text-[12px] leading-4 ${theme.muted}`}>
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CasesModal
        isOpen={isCasesModalOpen}
        onClose={() => setIsCasesModalOpen(false)}
        cases={cases}
      />
    </>
  );
}

function CalendarMini() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3.5 5.25H12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="2.75" y="3.75" width="10.5" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StatusMini() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5.7 8.1L7.2 9.6L10.5 6.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustMini() {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2.2L12.2 4.1V7.3C12.2 10 10.5 12.2 8 13.3C5.5 12.2 3.8 10 3.8 7.3V4.1L8 2.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.4 7.9L7.4 8.9L9.8 6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
