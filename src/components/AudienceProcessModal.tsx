"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./theme-provider";

type AudienceItem = {
  title: string;
  text: string;
  icon: string;
};

type AudienceProcessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  audience: ReadonlyArray<AudienceItem>;
  steps: ReadonlyArray<string>;
};

export default function AudienceProcessModal({
  isOpen,
  onClose,
  audience,
  steps,
}: AudienceProcessModalProps) {
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

  if (!isOpen) {
    return null;
  }

  const overlayClass = isLight
    ? "bg-[rgba(15,23,42,0.45)]"
    : "bg-[rgba(2,6,23,0.72)]";

  const modalClass = isLight
    ? "border border-slate-200 bg-white text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
    : "border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,26,0.98)_0%,rgba(5,8,18,0.98)_100%)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)]";

  const cardClass = isLight
    ? "border border-slate-200 bg-slate-50/80"
    : "border border-white/10 bg-white/[0.04]";

  return (
    <div
      className={`fixed inset-0 z-[120] flex items-center justify-center px-4 py-6 ${overlayClass}`}
      onClick={onClose}
    >
      <div
        className={`${modalClass} relative flex max-h-[90vh] w-full max-w-[1240px] flex-col rounded-[30px]`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={`flex items-start justify-between gap-4 px-6 py-5 md:px-8 ${
            isLight ? "border-b border-slate-200" : "border-b border-white/10"
          }`}
        >
          <div>
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#4b8dff]">
              Формат работы
            </div>

            <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
              Для кого мы работаем
              <br />
              и как устроен процесс
            </h2>

            <p
              className={`mt-3 max-w-[780px] text-[14px] leading-6 ${
                isLight ? "text-slate-600" : "text-white/60"
              }`}
            >
              Быстро встраиваемся в рабочий контур объекта, определяем правила
              обмена данными и ведем документацию так, чтобы статус проекта был
              понятен без лишней координации и ручного контроля.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition ${
              isLight
                ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                : "border border-white/10 bg-white/[0.05] text-white/80 hover:bg-white/[0.08]"
            }`}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 pb-10 md:px-8 md:py-8 md:pb-12">
          <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="mb-4">
                <div className="text-[24px] font-semibold leading-tight">
                  С кем мы работаем
                </div>

                <p
                  className={`mt-2 text-[14px] leading-6 ${
                    isLight ? "text-slate-600" : "text-white/60"
                  }`}
                >
                  Подстраиваем формат взаимодействия под структуру проекта,
                  объем документации и требования конкретного объекта.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {audience.map((item) => (
                  <article
                    key={item.title}
                    className={`${cardClass} group rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]`}
                  >
                    <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-[radial-gradient(circle,rgba(75,141,255,0.2)_0%,rgba(75,141,255,0.08)_45%,transparent_72%)] shadow-[0_0_28px_rgba(75,141,255,0.24)] transition duration-300 group-hover:shadow-[0_0_36px_rgba(75,141,255,0.38)]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={52}
                        height={52}
                        className="object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-[18px] font-semibold leading-snug">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-[14px] leading-6 ${
                        isLight ? "text-slate-600" : "text-white/60"
                      }`}
                    >
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <div className="text-[24px] font-semibold leading-tight">
                  Как проходит работа
                </div>

                <p
                  className={`mt-2 text-[14px] leading-6 ${
                    isLight ? "text-slate-600" : "text-white/60"
                  }`}
                >
                  Последовательно ведем проект от анализа исходных данных до
                  подготовки комплекта к проверке и передаче.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {steps.map((step, index) => (
                  <article
                    key={`${step}-${index}`}
                    className={`rounded-[22px] p-5 ${
                      isLight
                        ? "border border-slate-200 bg-slate-50 hover:bg-slate-100"
                        : "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.018)_100%)] hover:bg-white/[0.06]"
                    } transition duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] ${
                          isLight
                            ? "border border-[#4b8dff]/18 bg-[#4b8dff]/8 text-[#4b8dff]"
                            : "border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#6ea3ff]"
                        }`}
                      >
                        <CheckMini />
                      </div>

                      <div
                        className={`font-mono text-[12px] uppercase tracking-[0.14em] ${
                          isLight ? "text-slate-500" : "text-white/55"
                        }`}
                      >
                        Этап {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div
                      className={`mt-4 text-[15px] font-medium leading-6 ${
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

          <div
            className={`mt-6 rounded-[24px] p-5 md:p-6 ${
              isLight
                ? "border border-slate-200 bg-[#f7fbff]"
                : "border border-white/10 bg-[linear-gradient(180deg,rgba(75,141,255,0.12)_0%,rgba(255,255,255,0.03)_100%)]"
            }`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="max-w-[520px] text-[18px] font-semibold leading-tight sm:text-[20px] md:text-[24px]">
                  Нужен понятный процесс
                  <br />
                  без хаоса и ручного контроля?
                </div>

                <p
                  className={`mt-2 max-w-[760px] text-[14px] leading-6 ${
                    isLight ? "text-slate-600" : "text-white/60"
                  }`}
                >
                  Подключимся к объекту, определим состав работ и возьмем на
                  себя ведение документации до проверяемого результата.
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

function CheckMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
