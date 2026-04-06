export default function FooterNew() {
  return (
    <footer className="border-t border-white/8 bg-[#02040e] text-white">
      <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-10 md:grid-cols-2 md:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <LogoMark />
            </div>

            <div>
              <div className="text-[16px] font-semibold">ПТО-ЮГРА</div>
              <div className="text-[12px] text-white/55">
                Документация строительства
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-[320px] text-[14px] leading-6 text-white/58">
            Исполнительная документация, сопровождение объектов и подготовка
            комплектов к сдаче.
          </p>
        </div>

        <div>
          <div className="text-[14px] font-semibold text-white">Навигация</div>
          <div className="mt-4 space-y-3 text-[14px] text-white/60">
            <a href="/" className="block transition hover:text-white">
              Главная
            </a>
            <a href="/services" className="block transition hover:text-white">
              Услуги
            </a>
            <a href="/prices" className="block transition hover:text-white">
              Цены
            </a>
            <a href="/contacts" className="block transition hover:text-white">
              Контакты
            </a>
          </div>
        </div>

        <div>
          <div className="text-[14px] font-semibold text-white">Услуги</div>
          <div className="mt-4 space-y-3 text-[14px] text-white/60">
            <div>Исполнительная документация</div>
            <div>Аутсорсинг ПТО</div>
            <div>Исполнительные схемы</div>
            <div>Сопровождение сдачи</div>
          </div>
        </div>

        <div>
          <div className="text-[14px] font-semibold text-white">Контакты</div>
          <div className="mt-4 space-y-3 text-[14px] text-white/60">
            <a href="tel:+73452550155" className="block transition hover:text-white">
              +7 (3452) 55-01-55
            </a>
            <a
              href="mailto:info@pto-yugra.ru"
              className="block transition hover:text-white"
            >
              info@pto-yugra.ru
            </a>
            <div>Тюмень</div>
            <div>Пн–Пт, 9:00–18:00</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-3 px-5 py-5 text-[13px] text-white/45 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <div>© 2026 ПТО-ЮГРА. Все права защищены.</div>
          <div>Документация строительства и сопровождение объектов.</div>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 14.5L10 11V14.2L3 17.6V14.5Z" fill="#4B8DFF" />
      <path d="M3 9.6L10 6.1V9.2L3 12.7V9.6Z" fill="#7FB0FF" />
      <path d="M3 4.8L10 1.3V4.4L3 7.9V4.8Z" fill="#B6D2FF" />
      <path d="M10.8 11L17 8V11.1L10.8 14.2V11Z" fill="#4B8DFF" opacity="0.95" />
      <path d="M10.8 6.1L17 3.1V6.2L10.8 9.2V6.1Z" fill="#8BB7FF" opacity="0.95" />
    </svg>
  );
}