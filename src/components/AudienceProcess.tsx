"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { audience, processSteps } from "../lib/site-content";
import { useTheme } from "./theme-provider";
import AudienceProcessModal from "./AudienceProcessModal";

export default function AudienceProcess() {
  const { isLight } = useTheme();
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const [isAudienceModalOpen, setIsAudienceModalOpen] = useState(false);

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
    <>
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

          <div className="grid gap-4 xl:grid-cols-[320px_0.95fr_1.05fr]">
            <div className={`${cardClass} p-6`}>
              <p
                className={`text-[15px] leading-7 ${
                  isLight ? "text-slate-600" : "text-white/62"
                }`}
              >
                Мы не просто готовим документы, а встраиваемся в рабочий ритм
                проекта: определяем, кто что дает, где контрольная точка и как
                комплект будет двигаться к проверке и сдаче.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Понятная ответственность по разделам",
                  "Прозрачный статус по замечаниям",
                  "Минимум ручной координации со стороны заказчика",
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
                onClick={() => setIsAudienceModalOpen(true)}
                className={`mt-6 inline-flex h-[44px] items-center rounded-full px-5 text-[14px] font-medium transition ${
                  isLight
                    ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    : "border border-white/10 bg-white/[0.05] text-white/88 hover:bg-white/[0.08]"
                }`}
              >
                Смотреть весь процесс
                <span className="ml-2">→</span>
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {audience.map((item) => (
                <article
                  key={item.title}
                  className={`${cardClass} group flex flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(75,141,255,0.14)]`}
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-[radial-gradient(circle,rgba(75,141,255,0.22)_0%,rgba(75,141,255,0.08)_45%,transparent_75%)] shadow-[0_0_30px_rgba(75,141,255,0.24)] transition duration-300 group-hover:shadow-[0_0_40px_rgba(75,141,255,0.4)]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-5 text-[20px] font-semibold leading-[1.05] tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-[14px] leading-7 ${
                      isLight ? "text-slate-600" : "text-white/62"
                    }`}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className={`${cardClass} min-w-0 p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-[420px]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#4b8dff]">
                    6 шагов
                  </div>
                  <h3 className="mt-3 text-[30px] font-semibold leading-[0.96] tracking-[-0.04em]">
                    Как мы доводим
                    <br />
                    комплект до результата
                  </h3>
                  <p
                    className={`mt-3 text-[14px] leading-7 ${
                      isLight ? "text-slate-600" : "text-white/62"
                    }`}
                  >
                    Процесс прозрачен с первого дня: от разбора исходных данных
                    до передачи комплекта на проверку и сопровождения замечаний.
                  </p>
                </div>

                <div className="hidden shrink-0 items-center gap-2 md:flex">
                  <button
                    type="button"
                    onClick={() => scrollSteps("left")}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                      isLight
                        ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        : "border border-white/10 bg-white/[0.05] text-white/72 hover:bg-white/[0.09]"
                    }`}
                    aria-label="Прокрутить этапы влево"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollSteps("right")}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                      isLight
                        ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        : "border border-white/10 bg-white/[0.05] text-white/72 hover:bg-white/[0.09]"
                    }`}
                    aria-label="Прокрутить этапы вправо"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={stepsRef}
                className="mt-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="grid grid-flow-col gap-4 auto-cols-[86%] md:auto-cols-[calc((100%-1rem)/2)] xl:auto-cols-[calc((100%-2rem)/3)]">
                  {processSteps.map((step, index) => (
                    <article
                      key={`${index + 1}-${step}`}
                      className={`rounded-[22px] p-5 ${
                        isLight
                          ? "border border-slate-200 bg-slate-50"
                          : "border border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${
                            isLight
                              ? "border border-[#4b8dff]/18 bg-[#4b8dff]/8 text-[#4b8dff]"
                              : "border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#8cb7ff]"
                          }`}
                        >
                          <CheckMini />
                        </div>
                        <div
                          className={`font-mono text-[12px] uppercase tracking-[0.18em] ${
                            isLight ? "text-slate-400" : "text-white/38"
                          }`}
                        >
                          Этап {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <p
                        className={`mt-4 text-[14px] leading-7 ${
                          isLight ? "text-slate-700" : "text-white/78"
                        }`}
                      >
                        {step}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2 md:hidden">
                <button
                  type="button"
                  onClick={() => scrollSteps("left")}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    isLight
                      ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      : "border border-white/10 bg-white/[0.05] text-white/72 hover:bg-white/[0.09]"
                  }`}
                  aria-label="Прокрутить этапы влево"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollSteps("right")}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    isLight
                      ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      : "border border-white/10 bg-white/[0.05] text-white/72 hover:bg-white/[0.09]"
                  }`}
                  aria-label="Прокрутить этапы вправо"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceProcessModal
        isOpen={isAudienceModalOpen}
        onClose={() => setIsAudienceModalOpen(false)}
        audience={audience}
        steps={processSteps}
      />
    </>
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
