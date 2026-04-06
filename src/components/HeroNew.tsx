"use client";

import Image from "next/image";

const menuItems = ["Услуги", "Кейсы", "О компании", "Контакты"];

const features = [
  {
    title: "По СП и ГОСТ",
    text: "Точно под нормативам и требованиям",
    icon: <DocIcon />,
  },
  {
    title: "Без срывов сроков",
    text: "Выстроенная работа так, чтобы документация не тормозила объект",
    icon: <ClockIcon />,
  },
  {
    title: "Под ключ",
    text: "От отдельного раздела до полного сопровождения",
    icon: <LayersIcon />,
  },
];

const stats = [
  { value: "7+", label: "лет на рынке" },
  { value: "500+", label: "объектов сдано" },
  { value: "30+", label: "специалистов\nв команде" },
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#050b16] text-white">
        <div className="relative min-h-[100svh]">
          {/* фото */}
          <div className="absolute inset-x-0 -top-[90px] bottom-0">
            <Image
              src="/images/hero-premium.jpg"
              alt="Строительная документация"
              fill
              priority
              className="object-cover object-[72%_50%] contrast-[1.04]"
            />
          </div>

          {/* лёгкое затемнение для читаемости текста */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,22,0.72)_0%,rgba(5,11,22,0.56)_22%,rgba(5,11,22,0.32)_42%,rgba(5,11,22,0.12)_62%,rgba(5,11,22,0.08)_100%)]" />

          {/* верхнее затемнение под шапку */}
          <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-[#050b16]/65 to-transparent" />

          <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col px-5 md:px-8 lg:px-10">
            {/* шапка */}
            <header className="absolute inset-x-0 top-0 z-30">
              <div
                className="
                  flex h-[84px] items-center justify-between gap-6
                  border-b border-white/8
                  bg-[linear-gradient(180deg,rgba(10,18,34,0.26)_0%,rgba(10,18,34,0.10)_100%)]
                  px-5 md:px-7 lg:px-10
                  shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.04)]
                  backdrop-blur-[3px]
                "
              >
                <div className="flex shrink-0 items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Image
                      src="/images/logo.png"
                      alt="ПТО-ЮГРА"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>  

                  <div className="leading-tight">
                    <div className="text-[15px] font-semibold tracking-[0.01em] md:text-[16px]">
                      ПТО-ЮГРА
                    </div>
                    <div className="text-[11px] text-white/58 md:text-[12px]">
                      Документация строительства
                    </div>
                  </div>
                </div>

                <nav className="hidden items-center gap-10 text-[15px] text-white/74 lg:flex">
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="transition hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </nav>

                <div className="flex items-center gap-3">
                  <div className="hidden text-right lg:block">
                    <div className="text-[14px] font-semibold text-white">
                      +7 (3452) 55-01-55
                    </div>
                    <div className="text-[12px] text-white/52">
                      Пн–Пт, 9:00–18:00
                    </div>
                  </div>

                  <button
                    aria-label="Открыть меню"
                    className="
                      inline-flex h-[52px] w-[52px] items-center justify-center
                      rounded-full border border-white/8 bg-white/[0.04]
                      transition hover:bg-white/[0.07]
                    "
                  >
                    <MenuIcon />
                  </button>
                </div>
              </div>
            </header>

            {/* основной контент первого экрана */}
            <div className="relative flex flex-1 items-start pt-[110px] md:pt-[118px] lg:pt-[122px]">
              <div className="max-w-[680px] pt-4 lg:pt-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4b8dff]/26 bg-[#0b1f46]/72 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-md md:text-[12px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4b8dff]" />
                  Аутсорсинг ПТО для строительных компаний
                </div>

                <h1 className="mt-7 max-w-[680px] text-[56px] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[68px] lg:text-[84px]">
                  Документация.
                  <br />
                  Сопровождение.
                  <br />
                  <span className="text-[#4b8dff]">Сдача объекта.</span>
                </h1>

                <p className="mt-7 max-w-[620px] text-[19px] leading-[1.65] text-white/78">
                  Берём на себя задачи ПТО — от оформления исполнительной
                  документации до сопровождения сдачи объекта. Работаем точно по
                  требованиям, в срок и без лишней нагрузки на вашу команду.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex h-[62px] items-center justify-center rounded-[18px] bg-[#4b8dff] px-9 text-[18px] font-semibold text-white shadow-[0_18px_40px_rgba(75,141,255,0.35)] transition hover:-translate-y-[1px] hover:bg-[#3c7cf0]"
                  >
                    Получить расчёт
                    <span className="ml-4 text-xl">→</span>
                  </a>

                  <a
                    href="#question"
                    className="inline-flex h-[62px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.03] px-9 text-[18px] font-semibold text-white backdrop-blur-md transition hover:-translate-y-[1px] hover:bg-white/[0.06]"
                  >
                    Задать вопрос
                    <span className="ml-3 text-white/70">⌕</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* контент ниже первого экрана */}
      <section className="relative bg-[#02040e] text-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-10 md:px-8 lg:px-10 lg:pt-14">
          <div className="grid gap-10 xl:grid-cols-[1fr_620px] xl:items-center">
            {/* преимущества */}
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((item) => (
                <div key={item.title} className="max-w-[260px]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#6aa1ff] backdrop-blur-[18px]">
                      {item.icon}
                    </div>

                    <div>
                      <div className="text-[16px] font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="mt-2 text-[14px] leading-6 text-white/58">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* статистика */}
            <div className="w-full">
                <div
                className="
                  relative overflow-hidden rounded-[30px]
                  border border-white/10
                  bg-[linear-gradient(180deg,rgba(24,44,78,0.62)_0%,rgba(13,26,48,0.46)_55%,rgba(8,15,30,0.40)_100%)]
                  shadow-[0_20px_60px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.08)]
                  backdrop-blur-[20px]
                "
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/15" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(96,165,250,0.18),transparent_45%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.22)_0%,rgba(2,6,23,0)_18%,rgba(2,6,23,0)_82%,rgba(2,6,23,0.22)_100%)]" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                  {stats.map((item, index) => (
                    <div
                      key={item.value + item.label}
                      className={`relative min-h-[96px] px-10 py-7 lg:min-h-[108px] ${
                        index !== stats.length - 1
                          ? "border-b border-white/8 sm:border-b-0 lg:border-r lg:border-white/8"
                          : ""
                      }`}
                    > 
                      <div className="text-[28px] font-semibold tracking-[-0.04em] text-white">
                        {item.value}
                      </div>
                      <div className="mt-2 whitespace-pre-line text-[14px] leading-6 text-white/68">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
    </>
  );
}

function LogoMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 14.5L10 11V14.2L3 17.6V14.5Z" fill="#4B8DFF" />
      <path d="M3 9.6L10 6.1V9.2L3 12.7V9.6Z" fill="#7FB0FF" />
      <path d="M3 4.8L10 1.3V4.4L3 7.9V4.8Z" fill="#B6D2FF" />
      <path
        d="M10.8 11L17 8V11.1L10.8 14.2V11Z"
        fill="#4B8DFF"
        opacity="0.95"
      />
      <path
        d="M10.8 6.1L17 3.1V6.2L10.8 9.2V6.1Z"
        fill="#8BB7FF"
        opacity="0.95"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <span className="flex flex-col gap-[5px]">
      <span className="block h-[2px] w-5 rounded-full bg-white/90" />
      <span className="block h-[2px] w-5 rounded-full bg-white/90" />
      <span className="block h-[2px] w-5 rounded-full bg-white/90" />
    </span>
  );
}

function DocIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.5 3.5H11.5L14.5 6.5V15.5C14.5 16.05 14.05 16.5 13.5 16.5H5.5C4.95 16.5 4.5 16.05 4.5 15.5V4.5C4.5 3.95 4.95 3.5 5.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M11.5 3.5V6.5H14.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 9H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 12H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6.5V10.2L12.7 11.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 3L16 6.5L10 10L4 6.5L10 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 10L10 13.5L16 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 13.5L10 17L16 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}