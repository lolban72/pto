"use client";

import {
  company,
  contactDetails,
  footerNotes,
  navigationItems,
} from "../lib/site-content";
import { useTheme } from "./theme-provider";

export default function Footer() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden border-t ${
        isLight
          ? "border-slate-200 bg-[#f6f8fc] text-slate-950"
          : "border-white/10 bg-[#02040e] text-white"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[-60px] h-[180px] w-[180px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-10 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="text-[20px] font-semibold tracking-[0.01em]">
              {company.name}
            </div>

            <p
              className={`mt-4 max-w-[360px] text-[14px] leading-7 ${
                isLight ? "text-slate-600" : "text-white/60"
              }`}
            >
              {company.description}
            </p>

            <div className="mt-5 grid gap-3">
              {footerNotes.map((item) => (
                <div
                  key={item}
                  className={`rounded-[18px] px-4 py-4 text-[13px] leading-6 ${
                    isLight
                      ? "border border-slate-200 bg-white text-slate-700"
                      : "border border-white/10 bg-white/[0.04] text-white/74"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
              Навигация
            </div>

            <div className="mt-4 flex flex-col gap-3 text-[14px]">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:opacity-70"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
              Контакты
            </div>

            <div className="mt-4 space-y-3 text-[14px]">
              <a href={contactDetails.phoneHref} className="block font-semibold">
                {contactDetails.phoneLabel}
              </a>
              <a href={contactDetails.emailHref} className="block">
                {contactDetails.emailLabel}
              </a>
              <div className={`${isLight ? "text-slate-500" : "text-white/50"}`}>
                {contactDetails.location}
              </div>
              <div className={`${isLight ? "text-slate-500" : "text-white/50"}`}>
                {contactDetails.hours}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
                Тема
              </div>

              <label className="mt-4 inline-flex cursor-pointer items-center gap-4">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isLight}
                  onChange={toggleTheme}
                />

                <div
                  className={`relative h-7 w-12 rounded-full transition ${
                    isLight ? "bg-[#4b8dff]" : "bg-white/12"
                  }`}
                >
                  <span
                    className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                      isLight ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>

                <span
                  className={`text-[13px] ${
                    isLight ? "text-slate-600" : "text-white/70"
                  }`}
                >
                  Светлая тема
                </span>
              </label>
            </div>

            <div
              className={`rounded-[22px] p-4 ${
                isLight
                  ? "border border-slate-200 bg-white"
                  : "border border-white/10 bg-white/[0.04]"
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#4b8dff]">
                Позиционирование
              </div>
              <div
                className={`mt-3 text-[13px] leading-6 ${
                  isLight ? "text-slate-700" : "text-white/74"
                }`}
              >
                {company.tagline}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 flex flex-col gap-3 border-t pt-6 text-[12px] md:flex-row md:items-center md:justify-between ${
            isLight
              ? "border-slate-200 text-slate-500"
              : "border-white/10 text-white/40"
          }`}
        >
          <div>© {new Date().getFullYear()} {company.name}</div>
          <div>Исполнительная документация, ПТО и сопровождение сдачи объектов</div>
        </div>
      </div>
    </footer>
  );
}
