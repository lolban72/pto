export default function WhyChooseUs() {
  const items = [
    "Подготавливаем документацию под ЗОС",
    "Работаем по СП и ГОСТ",
    "Соблюдаем сроки сдачи объектов",
    "Работаем с исходными данными",
    "Учитываем сертификаты материалов",
    "Собираем протоколы испытаний",
  ];

  return (
    <section className="relative py-24 bg-[#f4f7fb]">
      <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* левая часть */}
          <div className="max-w-[620px]">

            <div className="inline-flex items-center rounded-full border border-[#dbe7ff] bg-white/80 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2563eb] shadow-[0_8px_24px_rgba(37,99,235,0.08)] backdrop-blur-sm">
              Наши преимущества
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[48px] leading-[1.05]">
              Документация проходит проверки
              без возвратов и задержек
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
              Работаем по нормативам и требованиям строительного контроля.
              Подготавливаем комплект исполнительной документации так,
              чтобы он соответствовал структуре объекта и требованиям
              проверяющих организаций.
            </p>

            <div className="mt-8 h-px w-28 bg-[linear-gradient(90deg,rgba(37,99,235,0)_0%,rgba(37,99,235,0.55)_50%,rgba(37,99,235,0)_100%)]" />

          </div>


          {/* правая часть — список преимуществ */}
          <div className="grid gap-6">

            {items.map((item, index) => (
              <div
                key={item}
                className="
                  group
                  flex
                  items-start
                  gap-6
                  rounded-[26px]
                  border border-[#e8eefc]
                  bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]
                  px-6
                  py-6
                  shadow-[0_12px_35px_rgba(15,23,42,0.06)]
                  transition
                  duration-300
                  hover:-translate-y-[2px]
                  hover:shadow-[0_22px_55px_rgba(37,99,235,0.10)]
                "
              >

                {/* номер */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border border-[#dbe7ff]
                    bg-white
                    text-[15px]
                    font-semibold
                    text-[#2563eb]
                    shadow-[0_10px_24px_rgba(37,99,235,0.08)]
                  "
                >
                  0{index + 1}
                </div>

                {/* текст */}
                <div className="flex-1">

                  <p className="text-[18px] font-medium leading-8 text-slate-800">
                    {item}
                  </p>

                  <div className="mt-3 h-px w-full bg-[linear-gradient(90deg,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0)_100%)]" />

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}