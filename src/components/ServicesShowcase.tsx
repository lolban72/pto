"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTheme } from "../components/theme-provider";

const services = [
  {
    title: "Исполнительная документация",
    text: "Полный комплект по объекту в требуемом составе.",
    icon: "/icons/1.png",
  },
  {
    title: "Аутсорсинг ПТО",
    text: "Сопровождение объекта на всех этапах.",
    icon: "/icons/5.png",
  },
  {
    title: "Восстановление документов",
    text: "Вернём утерянные разделы и комплекты.",
    icon: "/icons/6.png",
  },
  {
    title: "ППР / ППРк",
    text: "Подготовка производственной документации.",
    icon: "/icons/7.png",
  },
  {
    title: "Исполнительные схемы",
    text: "Актуальные схемы и журналы работ.",
    icon: "/icons/8.png",
  },
  {
    title: "Сопровождение сдачи",
    text: "Подготовка документации к проверкам и сдаче.",
    icon: "/icons/9.png",
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
      <div className="mx-auto max-w-[1680px] px-5 pb-4 pt-6 md:px-8 lg:px-10 ">
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
          <div className={`${cardClass} rounded-[22px] flex flex-col justify-center p-5 mt-2`}>
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
                className={`${cardClass} group flex min-h-[150px] mt-2 min-w-[190px] flex-col rounded-[22px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]`}
              >
                <div className="mb-2 flex h-16 w-18 items-center justify-center rounded-xl bg-[radial-gradient(circle,rgba(75,141,255,0.18)_0%,rgba(75,141,255,0.08)_40%,transparent_70%)] shadow-[0_0_25px_rgba(75,141,255,0.25)] transition duration-300 group-hover:shadow-[0_0_34px_rgba(75,141,255,0.4)]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={52}
                    height={52}
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
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
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] transition duration-300 group-hover:translate-x-1 ${
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