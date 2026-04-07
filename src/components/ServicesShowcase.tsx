"use client";

import { useRef } from "react";
import { useTheme } from "../components/theme-provider";

const services = [
  {
    title: "Исполнительная документация",
    text: "Полный комплект по объекту в требуемом составе.",
    icon: <DocIcon />,
  },
  {
    title: "Аутсорсинг ПТО",
    text: "Сопровождение объекта на всех этапах.",
    icon: <UserIcon />,
  },
  {
    title: "Восстановление документов",
    text: "Вернём утерянные разделы и комплекты.",
    icon: <RefreshIcon />,
  },
  {
    title: "ППР / ППРк",
    text: "Подготовка производственной документации.",
    icon: <DocIcon />,
  },
  {
    title: "Исполнительные схемы",
    text: "Актуальные схемы и журналы работ.",
    icon: <NetworkIcon />,
  },
  {
    title: "Сопровождение сдачи",
    text: "Подготовка документации к проверкам и сдаче.",
    icon: <HubIcon />,
  },
];

export default function ServicesShowcase() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const { isLight } = useTheme();

  const scrollRow = (dir: "left" | "right") => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: dir === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  const cardClass = isLight
    ? "border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)] backdrop-blur-[18px]"
    : "border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] shadow-[0_14px_35px_rgba(0,0,0,0.16)] backdrop-blur-[18px]";

  return (
    <section
      className={`relative ${
        isLight ? "bg-[#f4f8fc] text-slate-900" : "bg-[#02040e] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1680px] px-5 pb-4 pt-6 md:px-8 lg:px-10">
        <div className="relative mb-6 hidden lg:block">
          <div className={`h-px w-full ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
          <div className="absolute left-[11%] top-0 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#4b8dff]" />
          <div className="absolute left-[27%] top-0 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#4b8dff]" />

          <div className="absolute right-0 top-0 flex -translate-y-1/2 items-center gap-2">
            <button
              onClick={() => scrollRow("left")}
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
              onClick={() => scrollRow("right")}
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

        <div className="grid gap-4 xl:grid-cols-[230px_minmax(0,1fr)]">
          <div className={`${cardClass} rounded-[22px] flex flex-col justify-center p-5`}>
            <h2 className="text-[30px] font-semibold leading-[0.98] tracking-[-0.03em]">
              Наши услуги
            </h2>

            <p
              className={`mt-3 max-w-[170px] text-[12px] leading-5 ${
                isLight ? "text-slate-500" : "text-white/55"
              }`}
            >
              Комплексные решения для строительных компаний любого масштаба
            </p>

            <a
              href="#services"
              className={`mt-6 inline-flex h-[38px] items-center rounded-full px-4 text-[13px] font-medium transition ${
                isLight
                  ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  : "border border-white/10 bg-white/[0.05] text-white/85 hover:bg-white/[0.08]"
              }`}
            >
              Смотреть все
              <span className="ml-2">→</span>
            </a>
          </div>

          <div
            ref={rowRef}
            className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((item) => (
              <article
                key={item.title}
                className={`${cardClass} flex min-h-[150px] min-w-[190px] flex-col rounded-[22px] p-5`}
              >
                <div
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-2xl ${
                    isLight
                      ? "border border-[#4b8dff]/18 bg-[#4b8dff]/8 text-[#4b8dff]"
                      : "border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#6ea3ff]"
                  }`}
                >
                  {item.icon}
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

                <div className="mt-auto flex justify-end pt-5">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] ${
                      isLight
                        ? "border border-slate-200 bg-slate-50 text-slate-700"
                        : "border border-white/10 bg-white/[0.04] text-white/70"
                    }`}
                  >
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5.5 3.5H11.5L14.5 6.5V15.5C14.5 16.05 14.05 16.5 13.5 16.5H5.5C4.95 16.5 4.5 16.05 4.5 15.5V4.5C4.5 3.95 4.95 3.5 5.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M11.5 3.5V6.5H14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 16C5.4 13.7 7.4 12.5 10 12.5C12.6 12.5 14.6 13.7 15.5 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M15.2 8C14.5 6.1 12.7 4.8 10.5 4.8C7.8 4.8 5.5 6.8 5 9.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.8 7.2V9.8H7.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 12C5.5 13.9 7.3 15.2 9.5 15.2C12.2 15.2 14.5 13.2 15 10.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.2 12.8V10.2H12.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 5H13" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 7V13" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 7V13" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 15H13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function HubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="5" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="5" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="15" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.3 6.3L8.2 8.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.7 6.3L11.8 8.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.3 13.7L8.2 11.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.7 13.7L11.8 11.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}