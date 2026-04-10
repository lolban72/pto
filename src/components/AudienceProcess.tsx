"use client";

import Image from "next/image";
import { useRef } from "react";
import { audience, processSteps } from "../lib/site-content";
import { useTheme } from "./theme-provider";

export default function AudienceProcess() {
  const { isLight } = useTheme();
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const scrollSteps = (direction: "left" | "right") => {
    if (!stepsRef.current) {
      return;
    }

    stepsRef.current.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  const cardClass = isLight
    ? "rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
    : "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.18)]";

  return (
    <section
      id="audience"
      className={`relative overflow-hidden ${
        isLight ? "bg-[#f4f8fc] text-slate-950" : "bg-[#02040e] text-white"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[16%] top-[10%] h-48 w-48 rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-56 w-56 rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
            Кому и как подходим
          </div>
          <h2 className="mt-3 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[48px]">
            Формат работы,
            <br />
            который не создает хаос на объекте
          </h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0 grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <article
                key={item.title}
                className={`${cardClass} group flex flex-col rounded-[22px] pl-3 pr-3 pt-5 pb-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]`}
              >
                <div className="mb-2 flex h-18 w-18 items-center justify-center rounded-xl bg-[radial-gradient(circle,rgba(75,141,255,0.18)_0%,rgba(75,141,255,0.08)_40%,transparent_70%)] shadow-[0_0_25px_rgba(75,141,255,0.25)] transition duration-300 group-hover:shadow-[0_0_34px_rgba(75,141,255,0.4)]">
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
                  className={`mt-2 mr-3 text-[12px] leading-5 ${
                    isLight ? "text-slate-600" : "text-white/58"
                  }`}
                >
                  {item.text}
                </div>
              </article>
            ))}
          </div>

          <div className={`${cardClass} min-w-0 p-5`}>
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-[340px]">
                <h2 className="text-[30px] font-semibold leading-[0.98] tracking-[-0.03em]">
                  Как мы работаем
                </h2>

                <p
                  className={`mt-1 text-[12px] leading-5 ${
                    isLight ? "text-slate-500" : "text-white/55"
                  }`}
                >
                  Простой и прозрачный процесс в 6 шагов
                </p>
              </div>

              <div className="hidden shrink-0 md:flex items-center gap-2">
                <button
                  onClick={() => scrollSteps("left")}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isLight
                      ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      : "border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.07]"
                  }`}
                  aria-label="Назад"
                >
                  ←
                </button>

                <button
                  onClick={() => scrollSteps("right")}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isLight
                      ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      : "border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.07]"
                  }`}
                  aria-label="Вперёд"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={stepsRef}
              className="mt-3 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                className="
                  grid grid-flow-col gap-4
                  auto-cols-[85%]
                  md:auto-cols-[calc((100%-0.75rem)/2)]
                  xl:auto-cols-[calc((100%-18rem)/3)]
                "
              >
                {processSteps.map((step, index) => (
                  <article
                    key={`${index + 1}-${step}`}
                    className={`snap-start rounded-[18px] p-4 transition duration-300 ${
                      isLight
                        ? "border border-slate-200 bg-slate-50 hover:bg-slate-100"
                        : "border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.018)_100%)] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl transition duration-300 ${
                          isLight
                            ? "border border-[#4b8dff]/18 bg-[#4b8dff]/8 text-[#4b8dff]"
                            : "border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#6ea3ff]"
                        }`}
                      >
                        <CheckMini />
                      </div>

                      <div
                        className={`ml-3 mt-2 text-[12px] font-medium ${
                          isLight ? "text-slate-500" : "text-white/90"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div
                      className={`mt-2 text-[12px] font-medium leading-5 whitespace-pre-line ${
                        isLight ? "text-slate-800" : "text-white/90"
                      }`}
                    >
                      {step}
                    </div>
                  </article>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 8.2L6.7 10.8L12 5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}