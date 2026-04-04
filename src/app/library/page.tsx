"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

const categories = [
  { id: "all", label: "Все материалы" },
  { id: "articles", label: "Полезные статьи" },
  { id: "docs", label: "Перечень документации" },
  { id: "programs", label: "Полезные программы" },
];

const libraryItems = [
  {
    id: 1,
    category: "articles",
    title: "Что такое исполнительная документация",
    date: "01.10.2019",
    excerpt:
      "Простое объяснение, из чего состоит исполнительная документация, зачем она нужна и как используется на объекте.",
    href: "/library/chto-takoe-ispolnitelnaya-dokumentaciya",
  },
  {
    id: 2,
    category: "articles",
    title: "Составление смет на строительные работы",
    date: "02.11.2019",
    excerpt:
      "Краткий материал для тех, кто раньше не сталкивался с составлением смет и хочет понять базовую структуру расчёта.",
    href: "/library/sostavlenie-smet-na-stroitelnye-raboty",
  },
  {
    id: 3,
    category: "docs",
    title: "Перечень исполнительной документации по общестроительным работам",
    date: "12.03.2024",
    excerpt:
      "Список документов, который обычно требуется для подготовки и сдачи комплекта по общестроительным работам.",
    href: "/library/perechen-ispolnitelnoy-dokumentacii-obschestroi",
  },
  {
    id: 4,
    category: "docs",
    title: "Перечень журналов для строительного объекта",
    date: "18.04.2024",
    excerpt:
      "Какие журналы чаще всего нужны на площадке, в каком виде они ведутся и что важно не упустить.",
    href: "/library/perechen-zhurnalov-dlya-obekta",
  },
  {
    id: 5,
    category: "programs",
    title: "Полезные программы для ПТО и оформления документации",
    date: "20.05.2024",
    excerpt:
      "Подборка программ и инструментов, которые помогают ускорить оформление исполнительной и производственной документации.",
    href: "/library/poleznye-programmy-dlya-pto",
  },
  {
    id: 6,
    category: "programs",
    title: "Как организовать хранение исходных данных по объекту",
    date: "04.06.2024",
    excerpt:
      "Практический подход к систематизации файлов, схем, актов и переписки для удобной работы команды.",
    href: "/library/kak-hranit-ishodnye-dannye",
  },
];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return libraryItems;
    return libraryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header variant="solid" />

      <main className="bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="absolute inset-0" />

          <div className="relative mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="mx-auto max-w-[920px] text-center">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                База полезных материалов
              </div>

              <div className="mt-6 text-sm text-slate-500">
                <Link href="/" className="transition hover:text-blue-700">
                  Главная
                </Link>
                <span className="mx-2">/</span>
                <span>Библиотека</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Библиотека
              </h1>

              <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-blue-600" />

              <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
                Полезные статьи, перечни документации и практические материалы
                по исполнительной документации, ПТО и сопровождению строительства.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="rounded-[30px] border border-white/80 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveCategory(category.id)}
                      className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.28)]"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
              <div className="grid gap-6 md:grid-cols-2">
                {filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-[30px] border border-white/80 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.10)]"
                  >
                    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                      {categories.find((cat) => cat.id === item.category)?.label}
                    </div>

                    <div className="mt-4 text-sm font-medium text-slate-500">
                      {item.date}
                    </div>

                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950 transition group-hover:text-blue-700">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {item.excerpt}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-blue-700 transition group-hover:translate-x-1"
                    >
                      <span>Читать подробнее</span>
                      <span>→</span>
                    </Link>
                  </article>
                ))}
              </div>

              <aside className="h-fit rounded-[30px] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200">
                  Для заказчиков и подрядчиков
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  Нужен точный перечень документов под ваш объект?
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  Подскажем состав исполнительной документации, поможем
                  определить недостающие позиции и предложим формат сопровождения.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                    Перечни исполнительной документации
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                    Рекомендации по оформлению
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                    Полезные материалы для ПТО
                  </div>
                </div>

                <Link
                  href="/contacts"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Оставить заявку
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}