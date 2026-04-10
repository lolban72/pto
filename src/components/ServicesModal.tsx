"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./theme-provider";

type ServiceItem = {
  title: string;
  text: string;
  icon: string;
};

type ServicesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  services: ReadonlyArray<ServiceItem>;
};

export default function ServicesModal({
  isOpen,
  onClose,
  services,
}: ServicesModalProps) {
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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
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
      className={`fixed inset-0 z-[120] overflow-y-auto px-4 py-4 md:px-6 md:py-6 ${overlayClass}`}
      onClick={onClose}
    >
      <div className="flex min-h-full items-start justify-center md:items-center">
        <div
          className={`${modalClass} relative my-auto flex max-h-[calc(100vh-2rem)] w-full max-w-[1180px] flex-col overflow-hidden rounded-[30px]`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="shrink-0 border-b border-white/10 px-6 py-5 md:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#4b8dff]">
                  Все услуги
                </div>

                <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
                  Комплексное сопровождение ПТО
                </h2>

                <p
                  className={`mt-3 max-w-[760px] text-[14px] leading-6 ${
                    isLight ? "text-slate-600" : "text-white/60"
                  }`}
                >
                  Закрываем исполнительную документацию, производственные
                  разделы, восстановление комплекта и подготовку к сдаче. Формат
                  подключения подбираем под ваш объект, сроки и текущий уровень
                  хаоса.
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
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 [-webkit-overflow-scrolling:touch] md:px-8 md:py-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item) => (
                <article
                  key={item.title}
                  className={`${cardClass} group rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]`}
                >
                  <div className="mb-4 flex h-[74px] w-[74px] items-center justify-center rounded-[20px] bg-[radial-gradient(circle,rgba(75,141,255,0.2)_0%,rgba(75,141,255,0.08)_45%,transparent_72%)] shadow-[0_0_28px_rgba(75,141,255,0.24)] transition duration-300 group-hover:shadow-[0_0_36px_rgba(75,141,255,0.38)]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={54}
                      height={54}
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

            <div
              className={`mt-6 rounded-[24px] p-5 md:p-6 ${
                isLight
                  ? "border border-slate-200 bg-[#f7fbff]"
                  : "border border-white/10 bg-[linear-gradient(180deg,rgba(75,141,255,0.12)_0%,rgba(255,255,255,0.03)_100%)]"
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[22px] font-semibold leading-tight md:text-[26px]">
                    Нужен формат под ваш объект?
                  </div>

                  <p
                    className={`mt-2 max-w-[720px] text-[14px] leading-6 ${
                      isLight ? "text-slate-600" : "text-white/60"
                    }`}
                  >
                    Подберем конфигурацию работ: разовая подготовка комплекта,
                    ведение отдельных разделов или полноценный аутсорсинг ПТО.
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
    </div>
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