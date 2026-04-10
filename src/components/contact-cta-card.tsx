"use client";

import Image from "next/image";
import { useTheme } from "../components/theme-provider";

export default function ContactCtaCard() {
  const { isLight } = useTheme();

  return (
    <section
      className={`relative overflow-hidden ${
        isLight ? "bg-[#f6f8fc] text-slate-950" : "bg-[#02040e] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1680px] px-5 py-6 md:px-8 lg:px-10">
        <div
          className={`relative overflow-hidden rounded-[26px] border px-6 py-8 md:px-10 md:py-10 ${
            isLight
              ? "border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              : "border-white/10 bg-[#02040e]"
          }`}
        >
          {/* 🔥 ФОНОВАЯ КАРТИНКА */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/16.webp"
              alt="Фоновая иллюстрация"
              fill
              priority
              className="object-cover object-[100%_30%]"
            />

            {/* затемнение под текст */}
            <div
              className={`absolute inset-0 ${
                isLight
                  ? "bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_35%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_70%)]"
                  : "bg-[linear-gradient(90deg,#02040e_0%,#02040e_35%,rgba(2,4,14,0.4)_50%,rgba(2,4,14,0)_100%)]"
              }`}
            />
          </div>

          {/* КОНТЕНТ */}
          <div className="relative z-10 max-w-[720px]">
            <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[46px] lg:text-[52px]">
              Подключимся к вашему объекту
              <br />
              и предложим рабочее решение
            </h2>

            <p
              className={`mt-4 max-w-[560px] text-[14px] leading-7 ${
                isLight ? "text-slate-600" : "text-white/60"
              }`}
            >
              Обсудим задачи, оценим объём работ и подготовим понятный формат
              взаимодействия без лишней сложности и затянутых согласований.
            </p>

            {/* ПЛЮСЫ */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Оперативный старт",
                "Понятный объём работ",
                "Прозрачный формат взаимодействия",
                "Фокус на результате",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-[12px] ${
                    isLight
                      ? "border border-slate-200 bg-white text-slate-700"
                      : "border border-white/10 bg-white/[0.04] text-white/80"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#4b8dff]" />
                  {item}
                </div>
              ))}
            </div>

            {/* КНОПКИ */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex h-[44px] items-center rounded-full bg-[linear-gradient(180deg,#4f8cff_0%,#2f6ff2_100%)] px-5 text-[13px] font-medium text-white shadow-[0_16px_40px_rgba(59,130,246,0.35)] transition hover:brightness-110"
              >
                Получить расчёт
                <span className="ml-2">→</span>
              </a>

              <a
                href="#"
                className={`inline-flex h-[44px] items-center rounded-full px-5 text-[13px] font-medium transition ${
                  isLight
                    ? "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                }`}
              >
                Обсудить проект
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}