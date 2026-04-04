export default function Footer() {
  return (
    <footer className="relative border-t border-[#e8eefc] bg-[#f4f7fb]">
      <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* колонка 1 */}
          <div className="max-w-[420px]">
            <div className="text-[20px] font-semibold tracking-tight text-slate-900">
              ПТО 86
            </div>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Подготовка исполнительной документации, сопровождение объектов
              строительства и аутсорсинг ПТО по ХМАО и всей территории РФ.
            </p>

            <div className="mt-6 text-[14px] text-slate-500">
              Работаем по СП и ГОСТ 📐
            </div>
          </div>

          {/* колонка 2 */}
          <div>
            <div className="text-[15px] font-semibold text-slate-900">
              Навигация
            </div>

            <ul className="mt-5 space-y-3 text-[15px] text-slate-600">
              <li className="hover:text-[#2563eb] transition cursor-pointer">
                Услуги
              </li>

              <li className="hover:text-[#2563eb] transition cursor-pointer">
                О компании
              </li>

              <li className="hover:text-[#2563eb] transition cursor-pointer">
                Примеры работ
              </li>

              <li className="hover:text-[#2563eb] transition cursor-pointer">
                Цены
              </li>

              <li className="hover:text-[#2563eb] transition cursor-pointer">
                Контакты
              </li>
            </ul>
          </div>

          {/* колонка 3 */}
          <div>
            <div className="text-[15px] font-semibold text-slate-900">
              Услуги
            </div>

            <ul className="mt-5 space-y-3 text-[15px] text-slate-600">
              <li>Исполнительная документация</li>
              <li>Аутсорсинг ПТО</li>
              <li>Разработка ППР</li>
              <li>Исполнительные схемы</li>
              <li>Сопровождение объектов</li>
            </ul>
          </div>

          {/* колонка 4 */}
          <div>
            <div className="text-[15px] font-semibold text-slate-900">
              Контакты
            </div>

            <div className="mt-5 space-y-3 text-[15px] text-slate-600">

              <div>
                📍 ХМАО
              </div>

              <a
                href="tel:+74951880349"
                className="block hover:text-[#2563eb] transition"
              >
                📞 +7 (495) 188-03-49
              </a>

              <a
                href="mailto:info@pto86.ru"
                className="block hover:text-[#2563eb] transition"
              >
                ✉️ info@pto86.ru
              </a>

              <div>
                Работаем по всей РФ 🌍
              </div>

            </div>
          </div>
        </div>


        {/* линия */}
        <div className="mt-14 h-px w-full bg-[linear-gradient(90deg,rgba(37,99,235,0)_0%,rgba(37,99,235,0.35)_50%,rgba(37,99,235,0)_100%)]" />


        {/* нижняя часть */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-[14px] text-slate-500 md:flex-row">

          <div>
            © {new Date().getFullYear()} ПТО 86. Все права защищены
          </div>

          <div className="flex items-center gap-6">

            <span className="hover:text-[#2563eb] cursor-pointer transition">
              Политика конфиденциальности
            </span>

            <span className="hover:text-[#2563eb] cursor-pointer transition">
              Пользовательское соглашение
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
}