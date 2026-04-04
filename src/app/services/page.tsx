import Link from "next/link";
import Header from "../../components/Header";

export default function ServicesPage() {
  const services = [
    {
      title: "Разработка исполнительной документации",
      text: "Подготовка полного комплекта исполнительной документации по объекту.",
      href: "/contacts",
      image: "/images/services/service-1.jpg",
    },
    {
      title: "Сопровождение строительства (Аутсорсинг ПТО)",
      text: "Комплексное сопровождение строительного объекта и ведение документации.",
      href: "/contacts",
      image: "/images/services/service-2.jpg",
    },
    {
      title: "Восстановление исполнительной документации",
      text: "Восстановление утраченной или неполной документации по архивам и исходным данным.",
      href: "/contacts",
      image: "/images/services/service-3.jpg",
    },
    {
      title: "Разработка ППР, ППРк и сопутствующей документации",
      text: "Подготовка организационно-технологической документации для производства работ.",
      href: "/contacts",
      image: "/images/services/service-4.jpg",
    },
    {
      title: "Разработка сметной документации",
      text: "Составление и корректировка сметной документации под задачи проекта.",
      href: "/contacts",
      image: "/images/services/service-5.jpg",
    },
    {
      title: "Строительная лаборатория",
      text: "Сопровождение лабораторных испытаний и оформление необходимых документов.",
      href: "/contacts",
      image: "/images/services/service-6.jpg",
    },
  ];

  return (
    <>
      <Header variant="solid" />

      <main className="bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden pb-10 pt-12 md:pb-14 md:pt-16">
          <div className="absolute inset-0" />
          <div className="relative mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="mx-auto max-w-[880px] text-center">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Основные направления работы
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Наши услуги
              </h1>

              <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-blue-600" />

              <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
                Подбираем формат сопровождения под задачи объекта: от разовой
                подготовки документов до полного аутсорсинга ПТО.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1680px] px-4 md:px-6 lg:px-10">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
                >
                  <Link href={service.href} className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-[240px] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.22)_100%)]" />
                    </div>

                    <div className="p-7 md:p-8">
                      <h2 className="text-2xl font-semibold leading-tight text-slate-950 transition group-hover:text-blue-700">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {service.text}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-blue-700 transition group-hover:translate-x-1">
                        <span>Подробнее</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}