export default function HowWeWork() {
  const steps = [
    {
      title: "Получаем исходные данные",
      text: "Изучаем проектную и рабочую документацию по объекту",
    },
    {
      title: "Оцениваем объём работ",
      text: "Определяем состав комплекта и сроки подготовки",
    },
    {
      title: "Заключаем договор",
      text: "Фиксируем этапы выполнения и формат взаимодействия",
    },
    {
      title: "Подключаемся к объекту",
      text: "Работаем удалённо или выезжаем на площадку при необходимости",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-28">

      {/* декоративные пятна */}
      <div className="pointer-events-none absolute left-[-120px] top-0 h-[260px] w-[260px] rounded-full bg-[#dbeafe] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[260px] w-[260px] rounded-full bg-[#bfdbfe] blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">

        {/* заголовок */}
        <div className="mx-auto max-w-[900px] text-center">

          <div className="inline-flex items-center rounded-full border border-[#dbe7ff] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2563eb] shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            Этапы сотрудничества
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[52px]">
            Как мы подключаемся к проекту
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            Работа строится по понятному процессу: от анализа исходных данных
            до подготовки исполнительной документации и сопровождения объекта.
          </p>

        </div>


        {/* timeline */}
        <div className="relative mt-20">

          {/* линия */}
          <div className="absolute left-0 right-0 top-[36px] hidden h-[2px] bg-[linear-gradient(90deg,rgba(37,99,235,0)_0%,rgba(37,99,235,0.35)_50%,rgba(37,99,235,0)_100%)] lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center"
              >

                {/* точка */}
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#dbe7ff] bg-white text-[#2563eb] font-semibold shadow-[0_10px_24px_rgba(37,99,235,0.08)]">
                  0{index + 1}
                </div>

                {/* текст */}
                <h3 className="mt-6 text-[22px] font-semibold text-slate-900 leading-[1.2]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* карта */}
        <div className="mt-24">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* текст */}
            <div>

              <h3 className="mt-6 text-[36px] font-semibold tracking-tight text-slate-900">
                Работаем по ХМАО и всей территории РФ
              </h3>

              <p className="mt-5 max-w-[540px] text-[16px] leading-7 text-slate-600">
                Подключаемся к объектам в разных регионах России.
                Сопровождаем документацию удалённо и при необходимости
                выезжаем на строительную площадку.
              </p>

            </div>


            {/* карта */}
            <div className="relative rounded-[32px] border border-[#e8eefc] bg-white p-10 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">

              <img
                src="/images/russia-map.png"
                alt="Карта России"
                className="w-full object-contain"
              />

              {/* точки */}
              <span className="absolute left-[25%] top-[48%] h-4 w-4 rounded-full bg-[#2563eb] shadow-[0_0_0_8px_rgba(37,99,235,0.14)]" />

              <span className="absolute left-[60%] top-[40%] h-4 w-4 rounded-full bg-[#2563eb] shadow-[0_0_0_8px_rgba(37,99,235,0.14)]" />

              <span className="absolute left-[72%] top-[55%] h-4 w-4 rounded-full bg-[#2563eb] shadow-[0_0_0_8px_rgba(37,99,235,0.14)]" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}