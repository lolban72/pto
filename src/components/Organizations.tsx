export default function Organizations() {
  const items = [
    {
      title: "Подрядчики",
      text: "Помогаем закрывать исполнительную документацию по действующим объектам, соблюдая сроки и требования заказчика.",
      accent: "col-span-12 lg:col-span-7",
    },
    {
      title: "Технические заказчики",
      text: "Приводим комплект документов к установленным требованиям и подготавливаем материалы к проверке и сдаче.",
      accent: "col-span-12 lg:col-span-5",
    },
    {
      title: "Проектные организации",
      text: "Подключаемся к сопровождению проектной и исполнительной документации на разных стадиях реализации объекта.",
      accent: "col-span-12 lg:col-span-5",
    },
    {
      title: "Генподрядчики",
      text: "Берём на себя большой объём документации, систематизируем процессы и помогаем закрывать объекты без перегрузки команды.",
      accent: "col-span-12 lg:col-span-7",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-24">
      <div className="pointer-events-none absolute left-[-120px] top-10 h-[260px] w-[260px] rounded-full bg-[#dbeafe] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[240px] w-[240px] rounded-full bg-[#bfdbfe] blur-3xl opacity-60" />

      <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* левая часть */}
          <div className="lg:self-center">
            <div className="inline-flex items-center rounded-full border border-[#dbe7ff] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2563eb] shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
              Формат сотрудничества
            </div>

            <h2 className="mt-6 max-w-[680px] text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-[52px] lg:leading-[1.02]">
              Работаем с организациями разного масштаба и роли в проекте
            </h2>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-slate-600 md:text-lg">
              Не подгоняем всех под один формат. Встраиваемся в структуру
              проекта, берём нужный объём задач и выстраиваем понятную схему
              взаимодействия под конкретную команду.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-[linear-gradient(90deg,#2563eb_0%,rgba(37,99,235,0)_100%)]" />
              <span className="text-sm font-medium text-[#2563eb]">
                4 основных формата
              </span>
            </div>
          </div>

          {/* правая часть */}
          <div className="grid grid-cols-12 gap-5">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`
                  ${item.accent}
                  group relative overflow-hidden rounded-[32px]
                  border border-white/70 bg-white/85 p-7
                  shadow-[0_18px_40px_rgba(15,23,42,0.06)]
                  backdrop-blur-sm transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(37,99,235,0.10)]
                  lg:p-8
                `}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_38%)] opacity-80" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-[linear-gradient(90deg,#2563eb_0%,rgba(37,99,235,0.0)_75%)] opacity-60" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#dbe7ff] bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] shadow-[0_10px_24px_rgba(37,99,235,0.08)]">
                      <div className="h-3.5 w-3.5 rounded-full bg-[#2563eb] shadow-[0_0_0_8px_rgba(37,99,235,0.10)]" />
                    </div>

                    <div className="text-[13px] font-semibold tracking-[0.18em] text-[#2563eb]">
                      0{index + 1}
                    </div>
                  </div>

                  <span className="rounded-full bg-[#eff6ff] px-3 py-1 text-[12px] font-medium text-slate-500 transition duration-300 group-hover:bg-[#dbeafe] group-hover:text-[#2563eb]">
                    Формат
                  </span>
                </div>

                <div className="relative z-10 mt-6 max-w-[540px]">
                  <h3 className="text-[28px] font-semibold leading-[1.05] tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}