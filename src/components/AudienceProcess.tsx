const audience = [
  {
    title: "Генподрядчики",
    text: "Закрываем объём документации без перегрузки внутренней команды.",
  },
  {
    title: "Подрядчики",
    text: "Подключаемся к объекту на любом этапе и доводим комплект до порядка.",
  },
  {
    title: "Технические заказчики",
    text: "Готовим документы в понятном и проверяемом виде для согласования.",
  },
];

const steps = [
  "Получаем исходные данные",
  "Оцениваем объём задач",
  "Согласовываем состав работ",
  "Подключаем команду",
  "Готовим комплект к сдаче",
  "Сопровождаем результат",
];

export default function AudienceProcess() {
  return (
    <section className="relative bg-[#02040e] text-white">
      <div className="mx-auto max-w-[1680px] px-5 pb-16 pt-4 md:px-8 lg:px-10">
        <div className="grid gap-4 xl:grid-cols-[230px_1fr_1.15fr]">
          {/* левая карточка */}
          <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] p-5 shadow-[0_14px_35px_rgba(0,0,0,0.16)] backdrop-blur-[18px]">
            <h2 className="text-[34px] font-semibold leading-[0.98] tracking-[-0.03em]">
              Для кого
              <br />
              мы работаем
            </h2>

            <p className="mt-3 max-w-[170px] text-[12px] leading-5 text-white/55">
              Помогаем закрыть каждый спорный и строительный процесс
            </p>

            <a
              href="#audience"
              className="mt-6 inline-flex h-[38px] items-center rounded-full border border-white/10 bg-white/[0.05] px-4 text-[13px] font-medium text-white/85 transition hover:bg-white/[0.08]"
            >
              Смотреть все
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* три карточки */}
          <div className="grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] p-5 shadow-[0_14px_35px_rgba(0,0,0,0.16)] backdrop-blur-[18px]"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#6ea3ff]">
                  <CircleMark />
                </div>

                <div className="text-[14px] font-semibold leading-5 text-white">
                  {item.title}
                </div>

                <div className="mt-3 text-[12px] leading-5 text-white/58">
                  {item.text}
                </div>
              </article>
            ))}
          </div>

          {/* как мы работаем */}
          <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] p-5 shadow-[0_14px_35px_rgba(0,0,0,0.16)] backdrop-blur-[18px]">
            <div className="max-w-[260px]">
              <h2 className="text-[34px] font-semibold leading-[0.98] tracking-[-0.03em]">
                Как мы работаем
              </h2>

              <p className="mt-3 text-[12px] leading-5 text-white/55">
                Простой и прозрачный процесс в 6 шагов
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
              {steps.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.018)_100%)] p-4"
                >
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-[#6ea3ff]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-xl border border-[#4b8dff]/20 bg-[#4b8dff]/10 text-[#6ea3ff]">
                    <CheckMini />
                  </div>

                  <div className="mt-4 text-[12px] font-medium leading-5 text-white/90">
                    {step}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CheckMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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