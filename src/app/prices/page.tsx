"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function PricesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const plans = [
    {
      title: "Исполнительная документация",
      price: "от 25 000 ₽",
      description:
        "Подготовка и оформление комплекта исполнительной документации по объекту.",
      features: [
        "Акты освидетельствования работ",
        "Исполнительные схемы",
        "Журналы производства работ",
        "Формирование комплекта под сдачу",
      ],
      accent: false,
    },
    {
      title: "Аутсорсинг ПТО",
      price: "от 70 000 ₽ / мес",
      description:
        "Полное сопровождение объекта и ведение производственно-технической документации.",
      features: [
        "Постоянное сопровождение объекта",
        "Подготовка исполнительной документации",
        "Взаимодействие с подрядчиком и заказчиком",
        "Контроль комплектности документов",
      ],
      accent: true,
    },
    {
      title: "Восстановление документации",
      price: "от 35 000 ₽",
      description:
        "Восстановление утраченной или неполной документации по архивам и исходным данным.",
      features: [
        "Анализ имеющихся материалов",
        "Восстановление недостающих разделов",
        "Систематизация комплекта",
        "Подготовка к дальнейшей сдаче",
      ],
      accent: false,
    },
  ];

  const services = [
    {
      name: "Разработка ППР / ППРк",
      price: "от 20 000 ₽",
    },
    {
      name: "Исполнительные схемы",
      price: "от 1 500 ₽ / лист",
    },
    {
      name: "Журналы работ",
      price: "от 5 000 ₽",
    },
    {
      name: "Выезд на объект",
      price: "по договоренности",
    },
    {
      name: "Проверка комплекта перед сдачей",
      price: "от 10 000 ₽",
    },
    {
      name: "Срочная подготовка документации",
      price: "индивидуально",
    },
  ];

  const notes = [
    "Финальная стоимость зависит от объёма работ, стадии объекта и состава исходных данных.",
    "Срочные задачи, выезды на объект и нестандартные разделы рассчитываются отдельно.",
    "Для точного расчёта достаточно направить проект, ведомость работ или перечень требуемых документов.",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Номер телефона:", phone);
    setIsModalOpen(false);
    setPhone("");
  };

  return (
    <>
      <Header variant="solid" />

      <main className="bg-[#f4f7fb] text-slate-900">
        {/* PRICING CARDS */}
        <section id="pricing" className="py-12">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="mx-auto max-w-[860px] text-center">
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Выберите удобный формат работы
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Подходит как для точечных задач, так и для полного сопровождения
                строительного объекта.
              </p>
            </div>

            <div className="mt-14 grid gap-8 xl:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`group relative overflow-hidden rounded-[30px] border p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 ${
                    plan.accent
                      ? "border-blue-200 "
                      : "border-white/70 bg-white"
                  }`}
                >
                  {plan.accent && (
                    <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                      Популярно
                    </div>
                  )}

                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                    {plan.title}
                  </h3>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-slate-200" />

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
                        <span className="leading-7">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition ${
                      plan.accent
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700"
                    }`}
                  >
                    Оставить заявку
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TABLE / LIST */}
        <section className="pb-24">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[32px] border border-white/80 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
                <div className="max-w-[650px]">
                  <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    Дополнительные услуги
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                    Что ещё можно заказать отдельно
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Для задач с частичным объёмом работ удобно заказывать
                    отдельные позиции без полного сопровождения.
                  </p>
                </div>

                <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200">
                  {services.map((service, index) => (
                    <div
                      key={service.name}
                      className={`grid grid-cols-1 gap-3 px-6 py-5 md:grid-cols-[1fr_auto] md:items-center ${
                        index !== services.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      <div className="text-base font-medium text-slate-800 md:text-lg">
                        {service.name}
                      </div>
                      <div className="text-base font-semibold text-blue-700 md:text-lg">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] md:p-10">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200">
                  Важно знать
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  Как формируется стоимость
                </h2>

                <div className="mt-8 space-y-5">
                  {notes.map((note) => (
                    <div
                      key={note}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-slate-200"
                    >
                      {note}
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[28px] border border-blue-400/20 bg-[linear-gradient(180deg,rgba(37,99,235,0.25)_0%,rgba(30,41,59,0.3)_100%)] p-6">
                  <div className="text-sm font-medium uppercase tracking-[0.16em] text-blue-200">
                    Быстрый старт
                  </div>
                  <p className="mt-3 text-lg leading-8 text-white">
                    Отправьте исходные данные по объекту — подготовим расчёт и
                    предложим оптимальный формат сотрудничества.
                  </p>

                  <Link
                    href="/contacts"
                    className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    Запросить расчёт
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4">
          <div className="relative w-full max-w-[520px] rounded-[28px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
            >
              ✕
            </button>

            <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">
              Оставьте свой номер телефона
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Мы свяжемся с вами, уточним задачу и предложим подходящий формат
              сотрудничества.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500"
                required
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Отправить номер
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}