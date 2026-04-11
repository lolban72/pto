"use client";

import Image from "next/image";
import { contactDetails, contactHighlights } from "../lib/site-content";
import { useTheme } from "./theme-provider";

export default function ContactCtaCard() {
  const { isLight } = useTheme();

  return (
    <section
      id="contacts"
      className={`relative overflow-hidden ${
        isLight ? "bg-[#f6f8fc] text-slate-950" : "bg-[#02040e] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
        <div
          className={`relative overflow-hidden rounded-[34px] border px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 ${
            isLight
              ? "border-slate-200 bg-white shadow-[0_22px_80px_rgba(15,23,42,0.06)]"
              : "border-white/10 bg-[linear-gradient(180deg,rgba(7,13,25,0.96)_0%,rgba(3,7,17,0.98)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/16.webp"
              alt="Команда сопровождения строительного объекта"
              fill
              className="object-cover object-[86%_34%]"
            />
            <div
              className={`absolute inset-0 ${
                isLight
                  ? "bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_38%,rgba(255,255,255,0.52)_58%,rgba(255,255,255,0.08)_100%)]"
                  : "bg-[linear-gradient(90deg,#02040e_0%,#02040e_42%,rgba(2,4,14,0.56)_62%,rgba(2,4,14,0.12)_100%)]"
              }`}
            />
          </div>

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_390px] xl:items-end">
            <div className="max-w-[760px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
                Следующий шаг
              </div>

              <h2 className="mt-4 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[50px]">
                Подключимся к объекту,
                <br />
                оценим объем и предложим
                <br />
                рабочий формат без лишней бюрократии
              </h2>

              <p
                className={`mt-5 max-w-[620px] text-[15px] leading-7 ${
                  isLight ? "text-slate-600" : "text-white/62"
                }`}
              >
                Чтобы оценить задачу, достаточно коротко описать этап объекта,
                состав проблемных разделов и что уже есть на руках. Дальше
                предложим понятный формат подключения и приоритеты по работам.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {contactHighlights.map((item) => (
                  <div
                    key={item}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] ${
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

              <div className="mt-7 flex flex-col gap-3">
  {/* Верхний ряд: Позвонить и Написать на почту */}
  <div className="flex gap-3">
    <a
      href={contactDetails.phoneHref}
      className="flex-1 inline-flex h-[48px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#4f8cff_0%,#2f6ff2_100%)] px-6 text-[14px] font-medium text-white shadow-[0_18px_40px_rgba(59,130,246,0.35)] transition hover:brightness-110"
    >
      Позвонить
      <span className="ml-2">→</span>
    </a>

    <a
      href={contactDetails.emailHref}
      className={`flex-1 inline-flex h-[48px] items-center justify-center rounded-full px-6 text-[14px] font-medium transition ${
        isLight
          ? "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
          : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
      }`}
    >
      Написать на почту
    </a>
  </div>

  {/* Нижняя кнопка: Telegram */}
  <a
    href="https://t.me/pto_ugra"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-[48px] w-full items-center justify-center rounded-full px-6 text-[14px] font-medium bg-[#0088cc] text-white hover:bg-[#0077b3] transition"
  >
    Telegram
  </a>
</div>
            </div>

            <div
              className={`relative rounded-[28px] p-5 md:p-6 ${
                isLight
                  ? "border border-slate-200 bg-white/92 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                  : "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] backdrop-blur-xl"
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4b8dff]">
                Контакты
              </div>

              <div className="mt-5 grid gap-4">
                <div>
                  <div className={`text-[11px] uppercase tracking-[0.16em] ${isLight ? "text-slate-400" : "text-white/38"}`}>
                    Телефон
                  </div>
                  <a
                    href={contactDetails.phoneHref}
                    className="mt-2 block text-[24px] font-semibold"
                  >
                    {contactDetails.phoneLabel}
                  </a>
                  <div className={`mt-1 text-[13px] ${isLight ? "text-slate-500" : "text-white/52"}`}>
                    {contactDetails.hours}
                  </div>
                </div>

                <div>
                  <div className={`text-[11px] uppercase tracking-[0.16em] ${isLight ? "text-slate-400" : "text-white/38"}`}>
                    Email
                  </div>
                  <a
                    href={contactDetails.emailHref}
                    className="mt-2 block text-[18px] font-semibold"
                  >
                    {contactDetails.emailLabel}
                  </a>
                </div>

                <div>
                  <div className={`text-[11px] uppercase tracking-[0.16em] ${isLight ? "text-slate-400" : "text-white/38"}`}>
                    География и формат
                  </div>
                  <div className="mt-2 text-[15px] font-medium">
                    {contactDetails.location}
                  </div>
                  <p
                    className={`mt-2 text-[13px] leading-6 ${
                      isLight ? "text-slate-600" : "text-white/62"
                    }`}
                  >
                    {contactDetails.responseNote}
                  </p>
                </div>
              </div>

              <div
                className={`mt-6 rounded-[22px] p-4 ${
                  isLight
                    ? "border border-slate-200 bg-slate-50"
                    : "border border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className={`text-[11px] uppercase tracking-[0.16em] ${isLight ? "text-slate-400" : "text-white/38"}`}>
                  Что полезно прислать
                </div>
                <div
                  className={`mt-3 text-[13px] leading-6 ${
                    isLight ? "text-slate-700" : "text-white/76"
                  }`}
                >
                  Адрес объекта, текущий этап, проблемные разделы и что уже
                  собрано по комплекту.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
