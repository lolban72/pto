"use client";

import { useState } from "react";

export default function ServicesGrid() {
  const [isOpenAll, setIsOpenAll] = useState(false);

  const services = [
    {
      title: "Исполнительная документация",
      text: "Комплексное оформление исполнительной документации для строительных объектов и этапов работ.",
      more: "Подготавливаем полный комплект исполнительной документации: акты освидетельствования, исполнительные схемы, журналы производства работ, реестры, комплектовочные ведомости и сопроводительные материалы. Структурируем документы в соответствии с требованиями заказчика, технического надзора и эксплуатирующих организаций, чтобы сдача проходила быстрее и без лишних замечаний.",
      icon: "/icons/1.png",
    },
    {
      title: "Аутсорсинг ПТО",
      text: "Полное сопровождение строительных проектов и закрытие задач производственно-технического отдела.",
      more: "Берём на себя функции ПТО на постоянной или проектной основе: ведение и контроль документации, подготовку исполнительных пакетов, оформление актов, взаимодействие с участниками строительства, сопровождение закрытия объёмов и помощь в подготовке документов на всех этапах реализации объекта. Это позволяет снизить нагрузку на внутреннюю команду и не тормозить процесс строительства.",
      icon: "/icons/2.png",
    },
    {
      title: "Восстановление документации",
      text: "Восстановление комплектов по архивам, проектной документации и фактически выполненным работам.",
      more: "Анализируем имеющиеся архивы, проектные решения, акты, переписку и фактическое состояние объекта, после чего восстанавливаем отсутствующие или неполные разделы документации. Приводим комплект в понятную и рабочую систему, чтобы его можно было использовать для сдачи, проверки, внутреннего контроля или дальнейшего сопровождения объекта.",
      icon: "/icons/3.png",
    },
    {
      title: "Разработка ППР / ППРк",
      text: "Подготовка производственной документации для организации, ведения и согласования работ.",
      more: "Разрабатываем проекты производства работ и проекты производства работ кранами с учётом особенностей объекта, очередности процессов, строительных условий, применяемой техники и требований безопасности. Формируем документы, которые можно использовать для согласования, организации работ на площадке и подтверждения технологической последовательности выполнения работ.",
      icon: "/icons/4.png",
    },
    {
      title: "Исполнительные схемы",
      text: "Оформление схем, журналов и сопутствующих материалов для сдачи исполнительного комплекта.",
      more: "Готовим исполнительные схемы по фактически выполненным работам на основании проекта, замеров, съемок и исходных данных от строительной площадки. Оформляем графическую часть в аккуратном и понятном виде, дополняем её необходимыми пояснениями, привязками и приложениями, чтобы комплект был готов к передаче и проверке.",
      icon: "/icons/5.png",
    },
  ];

  const toggleAllCards = () => {
    setIsOpenAll((prev) => !prev);
  };

  return (
    <section className="relative py-24 bg-[#f4f7fb]">
      <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center rounded-full border border-[#dbe7ff] bg-white/80 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2563eb] shadow-[0_8px_24px_rgba(37,99,235,0.08)] backdrop-blur-sm">
            Основные направления работы
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[48px]">
            Услуги, которые закрывают задачи ПТО под ключ
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Берём на себя оформление, сопровождение и восстановление
            строительной документации — от отдельных разделов до полного
            комплекта по объекту.
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-[linear-gradient(90deg,rgba(37,99,235,0)_0%,rgba(37,99,235,0.55)_50%,rgba(37,99,235,0)_100%)]" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {services.map((service, index) => {
            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#e8eefc]
                  bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]
                  p-6
                  shadow-[0_12px_35px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]
                "
              >
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl opacity-50 transition duration-300 group-hover:opacity-80" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div
                    className="
                      flex
                      h-[74px]
                      w-[74px]
                      items-center
                      justify-center
                      rounded-[22px]
                      border
                      border-[#dbe7ff]
                      bg-white
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_25px_rgba(37,99,235,0.08)]
                    "
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-11 w-11 object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="rounded-full border border-[#dbe7ff] bg-white/80 px-3 py-1 text-[12px] font-semibold text-[#2563eb]">
                    0{index + 1}
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <h3 className="text-[22px] font-semibold leading-[1.15] tracking-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {service.text}
                  </p>
                </div>

                <div
                  className={`
                    relative z-10 grid overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpenAll ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-2xl border-[#e3ecff] bg-white/70 text-[14px] leading-7 text-slate-600">
                      {service.more}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={toggleAllCards}
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-[22px]
              border
              border-[#dbe7ff]
              bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)]
              px-6
              py-4
              text-[15px]
              font-semibold
              text-slate-700
              shadow-[0_12px_35px_rgba(15,23,42,0.05)]
              transition-all
              duration-300
              hover:border-[#bfd3ff]
              hover:bg-white
              hover:text-[#2563eb]
              hover:shadow-[0_18px_40px_rgba(37,99,235,0.10)]
            "
          >
            {isOpenAll ? "Свернуть описание" : "Подробнее"}

            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpenAll ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}