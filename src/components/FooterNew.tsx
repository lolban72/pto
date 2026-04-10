"use client";

import { useTheme } from "../components/theme-provider";

export default function Footer() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <footer
      className={`relative border-t ${
        isLight
          ? "border-slate-200 bg-[#f6f8fc] text-slate-900"
          : "border-white/10 bg-[#02040e] text-white"
      }`}
    >
      {/* фоновые эффекты */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[-60px] h-[180px] w-[180px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-10 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* БЛОК БРЕНДА */}
          <div>
            <div className="text-[18px] font-semibold tracking-wide">
              ПТО-ЮГРА
            </div>

            <p
              className={`mt-3 max-w-[320px] text-[14px] leading-6 ${
                isLight ? "text-slate-600" : "text-white/60"
              }`}
            >
              Исполнительная документация и сопровождение строительных объектов.
              Работаем с промышленными и девелоперскими проектами.
            </p>
          </div>

          {/* КОНТАКТЫ */}
          <div>
            <div className="text-[14px] font-semibold uppercase tracking-wider opacity-70">
              Контакты
            </div>

            <div className="mt-4 space-y-2 text-[14px]">
              <div className={`${isLight ? "text-slate-700" : "text-white/80"}`}>
                +7 (982) 222-77-34
              </div>
              <div className={`${isLight ? "text-slate-700" : "text-white/80"}`}>
                info@pto-ugra.ru
              </div>
              <div className={`${isLight ? "text-slate-500" : "text-white/50"}`}>
                ХМАО / Тюмень
              </div>
            </div>
          </div>

          {/* УПРАВЛЕНИЕ + ТЕМА */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[14px] font-semibold uppercase tracking-wider opacity-70">
                Навигация
              </div>

              <div className="mt-4 flex flex-col gap-2 text-[14px]">
                <a className="hover:opacity-70">Кейсы</a>
                <a className="hover:opacity-70">Услуги</a>
                <a className="hover:opacity-70">Контакты</a>
              </div>
            </div>

            {/* переключатель темы */}
            <div className="mt-auto">
              <label className="inline-flex cursor-pointer items-center gap-4">
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
          </div>
        </div>

        {/* НИЖНЯЯ ПОЛОСА */}
        <div
          className={`mt-10 flex flex-col gap-3 border-t pt-6 text-[12px] md:flex-row md:items-center md:justify-between ${
            isLight ? "border-slate-200 text-slate-500" : "border-white/10 text-white/40"
          }`}
        >
          <div>© {new Date().getFullYear()} ПТО-ЮГРА</div>
          <div>Все права защищены</div>
        </div>
      </div>
    </footer>
  );
}