"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { useTheme } from "./theme-provider";

type CaseStat = {
  value: string;
  label: string;
};

type CaseItem = {
  title: string;
  text: string;
  image: string;
  stats: ReadonlyArray<CaseStat>;
};

type CasesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cases: ReadonlyArray<CaseItem>;
};

export default function CasesModal({
  isOpen,
  onClose,
  cases,
}: CasesModalProps) {
  const { isLight } = useTheme();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const theme = useMemo(() => {
    if (isLight) {
      return {
        overlay: "bg-[rgba(15,23,42,0.45)]",
        modal:
          "border border-slate-200 bg-white text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.18)]",
        card:
          "border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]",
        stat: "border border-slate-200 bg-slate-50 text-slate-900",
        badge: "border border-[#4b8dff]/15 bg-[#4b8dff]/8 text-[#2563eb]",
        muted: "text-slate-500",
        mutedSoft: "text-slate-600",
        cta: "border border-slate-200 bg-[#f7fbff]",
        close:
          "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100",
      };
    }

    return {
      overlay: "bg-[rgba(2,6,23,0.72)]",
      modal:
        "border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,26,0.98)_0%,rgba(5,8,18,0.98)_100%)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)]",
      card:
        "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_20px_60px_rgba(75,141,255,0.15)]",
      stat: "border border-white/10 bg-white/[0.03] text-white",
      badge: "border border-[#72a6ff]/18 bg-[#72a6ff]/10 text-[#8cb7ff]",
      muted: "text-white/42",
      mutedSoft: "text-white/62",
      cta:
        "border border-white/10 bg-[linear-gradient(180deg,rgba(75,141,255,0.12)_0%,rgba(255,255,255,0.03)_100%)]",
      close:
        "border border-white/10 bg-white/[0.05] text-white/80 hover:bg-white/[0.08]",
    };
  }, [isLight]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[130] flex items-center justify-center px-4 py-6 ${theme.overlay}`}
      onClick={onClose}
    >
      <div
        className={`${theme.modal} relative flex max-h-[90vh] w-full max-w-[1320px] flex-col rounded-[30px]`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={`flex items-start justify-between gap-4 px-6 py-5 md:px-8 ${
            isLight ? "border-b border-slate-200" : "border-b border-white/10"
          }`}
        >
          <div>
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#4b8dff]">
              Реальные проекты
            </div>

            <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
              Кейсы и выполненные задачи
            </h2>

            <p className={`mt-3 max-w-[800px] text-[14px] leading-6 ${theme.mutedSoft}`}>
              Здесь собраны объекты, где мы вели исполнительную документацию,
              восстанавливали комплект, сопровождали ремонтные и строительные
              работы и помогали пройти этапы сдачи без затяжных замечаний.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition ${theme.close}`}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 pb-10 md:px-8 md:py-8 md:pb-12">
          <div className="grid gap-5 xl:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className={`${theme.card} group overflow-hidden rounded-[26px] transition duration-300 hover:-translate-y-1`}
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-[50%_30%] transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isLight
                        ? "bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(15,23,42,0.18)_100%)]"
                        : "bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.52)_100%)]"
                    }`}
                  />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className={`mt-3 text-[14px] leading-6 ${theme.mutedSoft}`}>
                    {item.text}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {item.stats.map((stat, index) => (
                      <div
                        key={`${item.title}-${stat.label}`}
                        className={`flex items-center gap-3 rounded-[18px] p-3.5 ${theme.stat}`}
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

          <div className={`mt-6 rounded-[24px] p-5 md:p-6 ${theme.cta}`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="max-w-[560px] text-[20px] font-semibold leading-tight md:text-[26px]">
                  Хотите такой же порядок
                  <br />
                  по документации на вашем объекте?
                </div>

                <p className={`mt-2 max-w-[780px] text-[14px] leading-6 ${theme.mutedSoft}`}>
                  Подключимся к проекту, оценим объем задач, подготовим понятный
                  план работ и возьмем на себя сопровождение документации под ваш
                  объект.
                </p>
              </div>

              <a
                href="#contacts"
                onClick={onClose}
                className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#4b8dff] px-5 text-[14px] font-medium text-white transition hover:bg-[#3b7df0]"
              >
                Связаться
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3.5 5.25H12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="2.75" y="3.75" width="10.5" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StatusMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
