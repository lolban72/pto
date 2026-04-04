import Header from "../../components/Header";

export default function ContactsPage() {
  const contactItems = [
    {
      title: "Телефон",
      value: "+7 (495) 188-03-49",
      href: "tel:+74951880349",
    },
    {
      title: "E-mail",
      value: "info@example.ru",
      href: "mailto:info@example.ru",
    },
    {
      title: "График работы",
      value: "Пн–Пт, с 09:00 до 18:00",
      href: "",
    },
    {
      title: "Регион работы",
      value: "ХМАО и вся Россия",
      href: "",
    },
  ];

  return (
    <>
      <Header variant="solid" />

      <main className="bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="absolute inset-0" />

          <div className="relative mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="mx-auto max-w-[920px] text-center">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                Связаться с нами
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Контакты
              </h1>

              <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-blue-600" />

              <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
                Оставьте заявку или свяжитесь с нами удобным способом. Обсудим
                ваш объект, состав документации и подходящий формат
                сопровождения.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-8">
                <div className="rounded-[32px] border border-white/80 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
                  <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    Контактная информация
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                    Всегда на связи по рабочим вопросам
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                    Работаем с подрядчиками, генподрядчиками, техническими
                    заказчиками и проектными организациями. Подключаемся как к
                    отдельным задачам, так и к полному сопровождению объекта.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {contactItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
                      >
                        <div className="text-sm font-medium text-slate-500">
                          {item.title}
                        </div>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 block text-lg font-semibold text-slate-900 transition hover:text-blue-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="mt-2 text-lg font-semibold text-slate-900">
                            {item.value}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.20)] md:p-10">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200">
                    Почему удобно работать с нами
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                    Быстро вникаем в задачу и говорим по существу
                  </h2>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-slate-200">
                      Помогаем определить состав исполнительной документации под
                      конкретный объект.
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-slate-200">
                      Подсказываем, каких документов не хватает и как лучше
                      организовать работу.
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-slate-200">
                      Предлагаем понятный формат взаимодействия без лишней
                      перегрузки команды.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/80 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] md:p-10">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Форма обратной связи
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Оставьте заявку
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                  Укажите ваши контакты и коротко опишите задачу. Мы свяжемся с
                  вами для уточнения деталей.
                </p>

                <form className="mt-8 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500"
                    />

                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500"
                  />

                  <textarea
                    placeholder="Опишите задачу или объект"
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                  >
                    Отправить заявку
                  </button>
                </form>

                <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-medium text-slate-500">
                    Адрес / карта
                  </div>
                  <div className="mt-3 flex h-[260px] items-center justify-center rounded-[20px] border border-dashed border-slate-300 bg-white text-center text-slate-500">
                    Здесь можно разместить карту, адрес офиса или схему проезда
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}