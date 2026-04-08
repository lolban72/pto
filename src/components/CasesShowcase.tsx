"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTheme } from "../components/theme-provider";

const cases = [
  {
    title: "Жилой комплекс, Тюмень",
    text: "Комплексное сопровождение подготовки исполнительной документации на этапе строительства и подготовки к сдаче объекта.",
    image: "/images/case-1.jpg",
    stats: [
      { value: "18 мес.", label: "сопровождение" },
      { value: "100%", label: "сдача без замечаний" },
    ],
  },
  {
    title: "Производственный корпус, Сургут",
    text: "Подготовка и оформление исполнительной документации после незавершённого ведения.",
    image: "/images/case-2.jpg",
    stats: [
      { value: "4 мес.", label: "комплекс работ" },
      { value: "100%", label: "по графику" },
    ],
  },
  {
    title: "Школа на 1100 мест, ХМАО",
    text: "Ведение и контроль исполнительной документации на всех этапах строительства.",
    image: "/images/case-3.jpg",
    stats: [
      { value: "24 мес.", label: "сопровождение" },
      { value: "сдана", label: "подрядчику" },
    ],
  },
  {
    title: "Инженерные сети, Тюмень",
    text: "Подготовка исполнительных схем и комплектов для передачи на экспертизу и заказчику.",
    image: "/images/case-4.jpg",
    stats: [
      { value: "2 мес.", label: "подготовка" },
      { value: "без замечаний", label: "на приёмке" },
    ],
  },
];

const clients = [
  { name: "Set Group", image: "/images/client-1.png", width: 72, height: 18 },
  { name: "ПИК", image: "/images/client-2.png", width: 52, height: 18 },
  { name: "Газпром", image: "/images/client-3.png", width: 88, height: 20 },
  { name: "NCX", image: "/images/client-4.png", width: 44, height: 18 },
];

export default function CasesShowcase() {
  const { isLight } = useTheme();
  const casesRef = useRef<HTMLDivElement | null>(null);

  const scrollCases = (dir: "left" | "right") => {
    if (!casesRef.current) return;

    casesRef.current.scrollBy({
      left: dir === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  const cardClass = isLight
    ? "rounded-[22px] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)] backdrop-blur-[18px]"
    : "rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] shadow-[0_14px_35px_rgba(0,0,0,0.16)] backdrop-blur-[18px]";

  return (
    <section
      className={`relative ${
        isLight ? "bg-[#f4f8fc] text-slate-900" : "bg-[#02040e] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1680px] px-5 pb-6 pt-6 md:px-8 lg:px-10">
        <div className={`${cardClass} p-5 md:p-6`}>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_350px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[30px] font-semibold leading-[0.98] tracking-[-0.03em]">
                    Кейсы и выполненные задачи
                  </h2>

                  <p
                    className={`mt-1 text-[12px] leading-5 ${
                      isLight ? "text-slate-500" : "text-white/55"
                    }`}
                  >
                    Показываем реальный подход к работе
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <a
                    href="#cases"
                    className={`inline-flex items-center rounded-full px-4 h-[38px] text-[13px] font-medium transition ${
                      isLight
                        ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                        : "border border-white/10 bg-white/[0.05] text-white/85 hover:bg-white/[0.08]"
                    }`}
                  >
                    Смотреть все кейсы
                    <span className="ml-2">→</span>
                  </a>

                 
                </div>
              </div>

              <div
                ref={casesRef}
                className="flex gap-4 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {cases.map((item) => (
                  <article
                    key={item.title}
                    className={`${cardClass} group snap-start min-w-[240px] max-w-[240px] overflow-hidden rounded-[18px] p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]`}
                  >
                    <div className="relative h-[122px] overflow-hidden rounded-t-[18px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.18)_100%)]" />
                    </div>

                    <div className="p-4">
                      <h3
                        className={`text-[12px] font-semibold leading-4 ${
                          isLight ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 min-h-[72px] text-[10px] leading-4 ${
                          isLight ? "text-slate-600" : "text-white/58"
                        }`}
                      >
                        {item.text}
                      </p>

                      <div
                        className={`mt-3 grid grid-cols-2 gap-3 border-t pt-3 ${
                          isLight ? "border-slate-200" : "border-white/8"
                        }`}
                      >
                        {item.stats.map((stat) => (
                          <div key={`${item.title}-${stat.label}`}>
                            <div
                              className={`text-[12px] font-semibold ${
                                isLight ? "text-slate-900" : "text-white"
                              }`}
                            >
                              {stat.value}
                            </div>

                            <div
                              className={`mt-1 text-[9px] leading-3 ${
                                isLight ? "text-slate-500" : "text-white/40"
                              }`}
                            >
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 md:hidden">
                <a
                  href="#cases"
                  className={`inline-flex items-center rounded-full px-4 h-[38px] text-[13px] font-medium transition ${
                    isLight
                      ? "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      : "border border-white/10 bg-white/[0.05] text-white/85 hover:bg-white/[0.08]"
                  }`}
                >
                  Смотреть все кейсы
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            <aside className={`${cardClass} flex flex-col justify-center px-6 py-6`}>
                <div>
                    <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] max-w-[260px]">
                    Нас выбирают заы
                    <br />
                    порядок в работе
                    <br />
                    и предсказуемый
                    <br />
                    результат
                    </h3>

                    <p
                    className={`mt-5 max-w-[260px] text-[12px] leading-[1.6] ${
                        isLight ? "text-slate-600" : "text-white/58"
                    }`}
                    >
                    Для строительного объекта важны не только скорость, но и точность.
                    Мы выстраиваем работу так, чтобы документация была понятной,
                    собранной и готовой к предъявлению, а деятельность — спокойной
                    и профессиональной.
                    </p>
                </div>
                </aside>
          </div>
        </div>
      </div>
    </section>
  );
}