import Header from "../../components/Header";
import Link from "next/link";

export default function AboutPage() {
  const advantages = [
    "Глубоко понимаем состав исполнительной и производственно-технической документации",
    "Подключаемся как к разовым задачам, так и к полному сопровождению объекта",
    "Работаем аккуратно, системно и в согласованные сроки",
    "Подстраиваем формат работы под подрядчика, генподрядчика и заказчика",
  ];

  const facts = [
    {
      title: "Исполнительная документация",
      text: "Подготавливаем и комплектуем документацию под сдачу объекта.",
    },
    {
      title: "Аутсорсинг ПТО",
      text: "Берём на себя сопровождение строительного проекта и документооборот.",
    },
    {
      title: "Восстановление документов",
      text: "Восстанавливаем недостающие разделы по архивам и исходным данным.",
    },
  ];

  return (
    <>
      <Header variant="solid" />

      <main className="bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="absolute inset-0" />
          <div className="relative mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="mx-auto max-w-[900px] text-center">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                О компании
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                О нас
              </h1>

              <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-blue-600" />

              <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
                Мы занимаемся подготовкой исполнительной документации,
                сопровождением строительства и производственно-технической
                поддержкой объектов. Работаем внимательно к деталям, потому что
                именно из деталей складывается качественный результат.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="mx-auto grid max-w-[1680px] gap-8 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="rounded-[32px] border border-white/80 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Кто мы
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Надёжный партнёр по документации и сопровождению объектов
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 md:text-lg">
                <p>
                  Мы работаем в сфере исполнительной документации и ПТО,
                  помогая строительным компаниям закрывать задачи по подготовке,
                  оформлению, восстановлению и сопровождению документации на
                  разных этапах реализации объекта.
                </p>

                <p>
                  Для нас важно не просто собрать комплект документов, а сделать
                  его понятным, логичным и готовым к практическому применению:
                  для внутренней работы, для контроля, для сдачи и дальнейшего
                  сопровождения.
                </p>

                <p>
                  Мы ценим точность, срок и спокойную рабочую коммуникацию.
                  Поэтому выстраиваем процесс так, чтобы заказчик понимал, что
                  происходит на каждом этапе работы.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] md:p-10">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200">
                Наш подход
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                Работаем аккуратно, системно и по существу
              </h2>

              <div className="mt-8 space-y-4">
                {advantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="rounded-[32px] border border-white/80 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
              <div className="max-w-[760px]">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Чем занимаемся
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Основные направления нашей работы
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                  Подбираем формат работы под задачу объекта: от точечной помощи
                  по разделам документации до полного сопровождения.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {facts.map((fact) => (
                  <div
                    key={fact.title}
                    className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="text-xl font-semibold text-slate-950">
                      {fact.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {fact.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="rounded-[32px] border border-blue-200/60 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
              <div className="max-w-[900px]">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700">
                  Связаться с нами
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Готовы обсудить ваш объект и подобрать формат сотрудничества
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                  Если вам нужна подготовка исполнительной документации,
                  сопровождение ПТО или восстановление комплекта документов,
                  оставьте заявку — обсудим задачу и предложим оптимальное
                  решение.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                  >
                    Оставить заявку
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    Смотреть услуги
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}