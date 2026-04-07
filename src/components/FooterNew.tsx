"use client";

import { useTheme } from "../components/theme-provider";

export default function Footer() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <footer
      className={`border-t ${
        isLight
          ? "border-slate-200 bg-[#eef4fb] text-slate-900"
          : "border-white/8 bg-[#02040e] text-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1680px] flex-col gap-6 px-5 py-8 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <div className="text-[16px] font-semibold">ПТО-ЮГРА</div>
          <div
            className={`mt-2 text-[14px] ${
              isLight ? "text-slate-600" : "text-white/58"
            }`}
          >
            Исполнительная документация и сопровождение строительных объектов
          </div>
        </div>

        <label className="inline-flex cursor-pointer items-center gap-4 self-start lg:self-auto">
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
              className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition ${
                isLight ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>

          <span
            className={`text-[14px] font-medium ${
              isLight ? "text-slate-700" : "text-white/80"
            }`}
          >
            Светлая тема
          </span>
        </label>
      </div>
    </footer>
  );
}