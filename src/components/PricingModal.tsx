"use client";

import { useEffect } from "react";
import { useTheme } from "./theme-provider";

type PricingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const plans = [
  {
    title: "Разовый пакет",
    price: "от 25 000 ₽",
    description: "Подготовка конкретного комплекта документации под задачу",
    features: [
      "Исполнительная документация",
      "Оформление разделов",
      "Подготовка к проверке",
      "Без долгосрочных обязательств",
    ],
    highlight: false,
  },
  {
    title: "Ведение раздела",
    price: "от 60 000 ₽ / мес",
    description: "Берём на себя конкретный блок ПТО на объекте",
    features: [
      "Постоянная работа по разделу",
      "Контроль статусов",
      "Работа с замечаниями",
      "Связка с подрядчиками",
    ],
    highlight: true,
  },
  {
    title: "Полный аутсорсинг",
    price: "индивидуально",
    description: "Полное сопровождение ПТО под ключ",
    features: [
      "Весь документооборот",
      "Контроль сроков",
      "Взаимодействие со всеми сторонами",
      "Подготовка и сдача объекта",
    ],
    highlight: false,
  },
];

export default function PricingModal({
  isOpen,
  onClose,
}: PricingModalProps) {
  const { isLight } = useTheme();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
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
      className={`fixed inset-0 z-[160] overflow-y-auto px-4 py-4 md:px-6 md:py-6 ${overlayClass}`}
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
                  Стоимость
                </div>

                <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
                  Форматы работы и цены
                </h2>

                <p
                  className={`mt-3 max-w-[760px] text-[14px] leading-6 ${
                    isLight ? "text-slate-600" : "text-white/60"
                  }`}
                >
                  Подбираем формат под задачу, сроки и текущую ситуацию на
                  объекте. Точную стоимость определяем после короткого разбора
                  объёма работ.
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
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`${cardClass} relative rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)] ${
                    plan.highlight ? "ring-2 ring-[#4b8dff]/40" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute right-4 top-4 rounded-full bg-[#4b8dff] px-3 py-1 text-[11px] font-semibold text-white">
                      Популярно
                    </div>
                  )}

                  <h3 className="text-[18px] font-semibold leading-snug">
                    {plan.title}
                  </h3>

                  <div className="mt-4 text-[28px] font-bold text-[#4b8dff]">
                    {plan.price}
                  </div>

                  <p
                    className={`mt-3 text-[14px] leading-6 ${
                      isLight ? "text-slate-600" : "text-white/60"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#4b8dff]" />
                        <span className="text-[14px] leading-6">{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div
                className={`mt-6 rounded-[24px] p-5 md:p-6 ${
                    isLight
                    ? "border border-slate-200 bg-slate-50/80"
                    : "border border-white/10 bg-white/[0.03]"
                }`}
                >
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#4b8dff]">
                        Прайс-лист
                    </div>
                    <h3 className="mt-2 text-[24px] font-semibold leading-tight md:text-[28px]">
                        Основные услуги по исполнительной документации и сопровождению строительства
                    </h3>
                    </div>

                </div>

                <div className="mt-6 overflow-hidden rounded-[20px] border border-white/10">
                    <div
                    className={`grid grid-cols-[1fr_auto] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] md:px-5 ${
                        isLight
                        ? "bg-slate-100 text-slate-500"
                        : "bg-white/[0.04] text-white/42"
                    }`}
                    >
                    <div>Услуга</div>
                    <div>Стоимость</div>
                    </div>

                    {[
                    {
                        title: "Оформление исполнительной документации по одному комплекту",
                        price: "от 25 000 ₽",
                    },
                    {
                        title: "Восстановление исполнительной документации по уже выполненным работам",
                        price: "от 35 000 ₽",
                    },
                    {
                        title: "Подготовка актов, журналов и сопутствующих форм",
                        price: "от 15 000 ₽",
                    },
                    {
                        title: "Сопровождение раздела ПТО на объекте",
                        price: "от 60 000 ₽ / мес",
                    },
                    {
                        title: "Ведение исполнительной документации под сдачу объекта",
                        price: "от 90 000 ₽ / мес",
                    },
                    {
                        title: "Полный аутсорсинг ПТО и сопровождение строительства",
                        price: "индивидуально",
                    },
                    ].map((item, index, arr) => (
                    <div
                        key={item.title}
                        className={`grid grid-cols-[1fr_auto] items-start gap-4 px-4 py-4 md:px-5 ${
                        index !== arr.length - 1 ? "border-t border-white/10" : ""
                        } ${isLight ? "bg-white" : "bg-transparent"}`}
                    >
                        <div
                        className={`text-[14px] leading-6 md:text-[15px] ${
                            isLight ? "text-slate-800" : "text-white/84"
                        }`}
                        >
                        {item.title}
                        </div>

                        <div className="whitespace-nowrap text-right text-[14px] font-semibold text-[#4b8dff] md:text-[15px]">
                        {item.price}
                        </div>
                    </div>
                    ))}
                </div>

                <div
                    className={`mt-4 text-[13px] leading-6 ${
                    isLight ? "text-slate-500" : "text-white/52"
                    }`}
                >
                    Точную стоимость называем после короткого разбора задачи: учитываем объём документации,
                    комплект исходных данных, срочность и текущую стадию строительства.
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
                  <div className="text-[22px] font-semibold leading-tight md:text-[26px]">
                    Нужен расчёт под ваш объект?
                  </div>

                  <p
                    className={`mt-2 max-w-[720px] text-[14px] leading-6 ${
                      isLight ? "text-slate-600" : "text-white/60"
                    }`}
                  >
                    Подберём формат работ: разовая подготовка комплекта, ведение
                    отдельных разделов или полноценный аутсорсинг ПТО.
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