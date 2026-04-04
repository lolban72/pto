"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh]">
      <Header variant="overlay" />

      <div
        className="relative min-h-[100svh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1580px] items-center px-6 lg:px-10">
          <div className="w-full max-w-[1580px] text-white">
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight md:text-5xl lg:text-[70px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
              Исполнительная документация
              <br />
              и сопровождение строительства
            </h1>

            <div className="mt-6 flex flex-col gap-3 text-[20px] text-white/90">
              Ауторсинг ПТО для подрядчиков и генподрядчиков. Работаем по ХМАО и
              России.
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/prices"
                className="
                  group inline-flex h-[64px] w-[240px] items-center justify-center gap-3 rounded-[22px]
                  bg-white text-[17px] font-semibold text-[#0f172a]
                  shadow-[0_18px_40px_rgba(255,255,255,0.20)]
                  transition duration-300
                  hover:-translate-y-[2px] hover:bg-[#f8fbff]
                "
              >
                <span>Посмотреть прайс</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="tel:+79999999999"
                className="
                  inline-flex h-[64px] w-[240px] items-center justify-center rounded-[22px]
                  border border-white/20 bg-[#2563eb]
                  text-[17px] font-semibold text-white
                  backdrop-blur-md
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]
                  transition duration-300
                  hover:-translate-y-[2px] hover:bg-[#ffffff]/40 hover:border-white/30
                "
              >
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}