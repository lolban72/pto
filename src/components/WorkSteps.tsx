const steps = [
  {
    number: "01",
    title: "Получаем исходные данные",
    text: "Изучаем проектную, рабочую и исходную документацию по объекту.",
  },
  {
    number: "02",
    title: "Оцениваем объём задач",
    text: "Определяем состав документации, сроки и формат сопровождения.",
  },
  {
    number: "03",
    title: "Согласовываем состав работ",
    text: "Фиксируем объём, этапы, сроки выполнения и порядок взаимодействия.",
  },
  {
    number: "04",
    title: "Подключаем команду",
    text: "Назначаем специалистов и выстраиваем процесс работы по объекту.",
  },
  {
    number: "05",
    title: "Готовим комплект к сдаче",
    text: "Формируем документы в нужной структуре и проверяем комплектность.",
  },
  {
    number: "06",
    title: "Сопровождаем результат",
    text: "Остаёмся на связи до передачи документации и закрытия задач.",
  },
];

export default function WorkSteps() {
  return (
    <section className="relative bg-[#02040e] text-white">
      <div className="mx-auto max-w-[1680px] px-5 py-6 pb-16 md:px-8 lg:px-10">
        <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-[18px] md:p-8">
          <div className="grid gap-8 xl:grid-cols-[320px_1fr] xl:items-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#4b8dff]/20 bg-[#4b8dff]/10 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[#8bb7ff]">
                Как мы работаем
              </div>

              <h2 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[42px]">
                Простой и понятный
                <br />
                процесс работы
              </h2>

              <p className="mt-4 max-w-[280px] text-[15px] leading-7 text-white/60">
                Выстраиваем работу по объекту поэтапно, чтобы документация
                готовилась без срывов и хаоса.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-5"
                >
                  <div className="text-[12px] font-semibold tracking-[0.14em] text-[#6ea3ff]">
                    {step.number}
                  </div>

                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#6ea3ff]">
                    <CheckMini />
                  </div>

                  <div className="mt-5 text-[17px] font-semibold leading-6 text-white">
                    {step.title}
                  </div>

                  <p className="mt-3 text-[14px] leading-6 text-white/58">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 8.2L6.7 10.8L12 5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}