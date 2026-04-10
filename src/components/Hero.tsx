"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Услуги", href: "#services", type: "link" },
  { label: "Кейсы", href: "#cases", type: "link" },
  { label: "О компании", href: "#about", type: "modal-about" },
  { label: "Контакты", href: "#contact", type: "modal-contact" },
] as const;

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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const anyModalOpen = aboutOpen || contactOpen;

  useEffect(() => {
    if (!anyModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAboutOpen(false);
        setContactOpen(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [anyModalOpen]);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#050b16] text-white">
        <div className="relative min-h-[100svh]">
          <div className="absolute inset-x-0 -top-[90px] bottom-0">
            <Image
              src="/images/hero-premium.jpg"
              alt="Строительная документация"
              fill
              priority
              className="object-cover object-[72%_50%] contrast-[1.04]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,22,0.72)_0%,rgba(5,11,22,0.56)_22%,rgba(5,11,22,0.32)_42%,rgba(5,11,22,0.12)_62%,rgba(5,11,22,0.08)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-[#050b16]/65 to-transparent" />

          <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col px-5 md:px-8 lg:px-10">
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
                    <div className="text-[8px] text-white/58 md:text-[10px]">
                      ДОКУМЕНТАЦИЯ СТРОИТЕЛЬСТВА
                    </div>
                  </div>
                </div>

                <nav className="hidden items-center gap-10 text-[15px] text-white/74 lg:flex">
                  {menuItems.map((item) => {
                    if (item.type === "modal-about") {
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setAboutOpen(true)}
                          className="transition hover:text-white"
                        >
                          {item.label}
                        </button>
                      );
                    }

                    if (item.type === "modal-contact") {
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setContactOpen(true)}
                          className="transition hover:text-white"
                        >
                          {item.label}
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="transition hover:text-white"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>

                <div className="flex items-center gap-15">
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
                      lg:hidden
                    "
                  >
                    <MenuIcon />
                  </button>
                </div>
              </div>
            </header>

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
                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className="inline-flex h-[62px] items-center justify-center rounded-[18px] bg-[#4b8dff] px-9 text-[18px] font-semibold text-white shadow-[0_18px_40px_rgba(75,141,255,0.35)] transition hover:-translate-y-[1px] hover:bg-[#3c7cf0]"
                  >
                    Получить расчёт
                    <span className="ml-4 text-xl">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className="inline-flex h-[62px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.03] px-9 text-[18px] font-semibold text-white backdrop-blur-md transition hover:-translate-y-[1px] hover:bg-white/[0.06]"
                  >
                    Задать вопрос
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#02040e] text-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-10 md:px-8 lg:px-10 lg:pt-14">
          <div className="grid gap-10 xl:grid-cols-[1fr_620px] xl:items-center">
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

      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

function AboutModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="О компании"
    >
      <button
        type="button"
        aria-label="Закрыть модальное окно"
        onClick={onClose}
        className="absolute inset-0 bg-[#02040e]/72 backdrop-blur-[10px]"
      />

      <div className="relative z-10 w-full max-w-[980px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,32,0.98)_0%,rgba(5,8,22,0.98)_100%)] text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-40px] top-[-40px] h-[180px] w-[180px] rounded-full bg-[#4b8dff]/12 blur-3xl" />
          <div className="absolute bottom-[-80px] right-[-30px] h-[220px] w-[220px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
        </div>

        <div className="relative grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 md:p-8 lg:p-10">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
              О компании
            </div>

            <h2 className="mt-5 text-[32px] font-semibold leading-[0.96] tracking-[-0.05em] md:text-[42px]">
              ПТО-ЮГРА —
              <br />
              команда, которая
              <br />
              держит объект
              <br />
              под контролем
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] leading-8 text-white/68">
              Мы сопровождаем строительные объекты по линии ПТО: оформляем
              исполнительную документацию, подключаемся к текущим задачам,
              восстанавливаем структуру документооборота и помогаем пройти
              этапы сдачи без лишнего стресса для команды заказчика.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Работаем с промышленными, инфраструктурными и гражданскими объектами",
                "Подключаемся как к отдельным задачам, так и к полному сопровождению",
                "Выстраиваем понятный процесс без лишней нагрузки на команду заказчика",
                "Фокусируемся на сроках, структуре и качестве итогового комплекта",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#4b8dff]" />
                  <span className="text-[14px] leading-7 text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                }}
                className="inline-flex h-[48px] items-center justify-center rounded-[16px] bg-[#4b8dff] px-6 text-[14px] font-medium text-white shadow-[0_18px_40px_rgba(75,141,255,0.35)] transition hover:bg-[#3c7cf0]"
              >
                Понятно
                <span className="ml-2">→</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-[48px] items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.04] px-6 text-[14px] font-medium text-white transition hover:bg-white/[0.08]"
              >
                Закрыть
              </button>
            </div>
          </div>

          <div className="relative min-h-[280px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/16.webp"
              alt="ПТО-ЮГРА"
              fill
              className="object-cover object-[72%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.14)_0%,rgba(2,6,23,0.5)_100%)] lg:bg-[linear-gradient(90deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.42)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-5 backdrop-blur-[12px]">
                <div className="text-[28px] font-semibold tracking-[-0.04em] text-white">
                  500+
                </div>
                <div className="mt-2 text-[14px] leading-6 text-white/68">
                  объектов сдано с оформленной и системной документацией
                </div>

                <div className="mt-5 h-px bg-white/10" />

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[20px] font-semibold text-white">7+</div>
                    <div className="mt-1 text-[12px] leading-5 text-white/58">
                      лет на рынке
                    </div>
                  </div>

                  <div>
                    <div className="text-[20px] font-semibold text-white">30+</div>
                    <div className="mt-1 text-[12px] leading-5 text-white/58">
                      специалистов в команде
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#02040e]/55 text-white transition hover:bg-[#02040e]/80"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Контакты"
    >
      <button
        type="button"
        aria-label="Закрыть модальное окно"
        onClick={onClose}
        className="absolute inset-0 bg-[#02040e]/72 backdrop-blur-[10px]"
      />

      <div className="relative z-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,32,0.98)_0%,rgba(5,8,22,0.98)_100%)] text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-50px] top-[-50px] h-[180px] w-[180px] rounded-full bg-[#4b8dff]/12 blur-3xl" />
          <div className="absolute bottom-[-70px] right-[-20px] h-[220px] w-[220px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
        </div>

        <div className="relative grid gap-0 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 md:p-8 lg:p-10">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">
              Контакты
            </div>

            <h2 className="mt-5 text-[32px] font-semibold leading-[0.96] tracking-[-0.05em] md:text-[42px]">
              Обсудим ваш объект
              <br />
              и подберём формат
              <br />
              работы
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-white/68">
              Расскажите, на каком этапе находится объект и какая помощь нужна.
              Мы быстро подключимся, оценим объём задач и предложим понятный
              формат взаимодействия.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Телефон
                </div>
                <a
                  href="tel:+73452550155"
                  className="mt-2 block text-[24px] font-semibold text-white transition hover:text-[#8cb7ff]"
                >
                  +7 (3452) 55-01-55
                </a>
                <div className="mt-1 text-[13px] text-white/55">
                  Пн–Пт, 9:00–18:00
                </div>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Email
                </div>
                <a
                  href="mailto:info@pto-ugra.ru"
                  className="mt-2 block text-[24px] font-semibold text-white transition hover:text-[#8cb7ff]"
                >
                  info@pto-ugra.ru
                </a>
                <div className="mt-1 text-[13px] text-white/55">
                  Отвечаем на запросы по объектам и сопровождению
                </div>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  География
                </div>
                <div className="mt-2 text-[24px] font-semibold text-white">
                  ХМАО / Тюмень
                </div>
                <div className="mt-1 text-[13px] text-white/55">
                  Работаем с промышленными, инфраструктурными и гражданскими объектами
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+73452550155"
                className="inline-flex h-[48px] items-center justify-center rounded-[16px] bg-[#4b8dff] px-6 text-[14px] font-medium text-white shadow-[0_18px_40px_rgba(75,141,255,0.35)] transition hover:bg-[#3c7cf0]"
              >
                Позвонить
                <span className="ml-2">→</span>
              </a>

              <a
                href="mailto:info@pto-ugra.ru"
                className="inline-flex h-[48px] items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.04] px-6 text-[14px] font-medium text-white transition hover:bg-white/[0.08]"
              >
                Написать на почту
              </a>
            </div>
          </div>

          <div className="relative min-h-[260px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/16.webp"
              alt="Контакты ПТО-ЮГРА"
              fill
              className="object-cover object-[76%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.16)_0%,rgba(2,6,23,0.58)_100%)] lg:bg-[linear-gradient(90deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.48)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-5 backdrop-blur-[12px]">
                <div className="text-[20px] font-semibold text-white">
                  Быстрое подключение
                </div>
                <div className="mt-2 text-[14px] leading-6 text-white/68">
                  Обсудим задачу, определим объём работ и предложим понятный
                  формат взаимодействия без лишней бюрократии.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#02040e]/55 text-white transition hover:bg-[#02040e]/80"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5.5 3.5H11.5L14.5 6.5V15.5C14.5 16.05 14.05 16.5 13.5 16.5H5.5C4.95 16.5 4.5 16.05 4.5 15.5V4.5C4.5 3.95 4.95 3.5 5.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M11.5 3.5V6.5H14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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