"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  company,
  contactDetails,
  heroContent,
  navigationItems,
  trustFeatures,
  trustStats,
} from "../lib/site-content";

const PricingModal = dynamic(() => import("./PricingModal"), {
  ssr: false,
});

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen && !pricingOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setPricingOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, pricingOpen]);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#050b16] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-premium.webp"
            alt="Строительный объект и исполнительная документация"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_50%]"
          />
        </div>

        <header className="absolute inset-x-0 top-0 z-30 w-full">
          <div
            className="
              flex h-[84px] w-full items-center justify-between gap-6
              border-b border-white/8
              bg-[linear-gradient(180deg,rgba(10,18,34,0.26)_0%,rgba(10,18,34,0.10)_100%)]
              px-5 md:px-7 lg:px-10
              shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.04)]
              backdrop-blur-[3px]
            "
          >
            <a href="#" className="flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Image
                  src="/images/logo.webp"
                  alt={company.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <div className="leading-tight">
                <div className="text-[15px] font-semibold tracking-[0.01em] md:text-[16px]">
                  {company.name}
                </div>
                <div className="text-[8px] text-white/58 md:text-[10px]">
                  {company.tagline}
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-10 text-[15px] text-white/74 lg:flex">
              {navigationItems.map((item) =>
                item.href === "#pricing" ? (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => setPricingOpen(true)}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            <div className="flex items-center gap-15">
              <div className="hidden text-right lg:block">
                <a
                  href={contactDetails.phoneHref}
                  className="block text-[14px] font-semibold text-white"
                >
                  {contactDetails.phoneLabel}
                </a>
                <div className="text-[12px] text-white/52">
                  {contactDetails.hours}
                </div>
              </div>

              <button
                type="button"
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
                className="
                  inline-flex h-[52px] w-[52px] items-center justify-center
                  rounded-full border border-white/8 bg-white/[0.04]
                  transition hover:bg-white/[0.07]
                  lg:hidden
                "
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col px-5 md:px-8 lg:px-10">
          <div className="relative flex flex-1 items-center py-14 pt-[110px] md:py-16 md:pt-[118px] lg:py-20 lg:pt-[122px]">
            <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:gap-12">
              <div className="max-w-[860px]">
                <h1 className="mt-7 text-[46px] font-semibold leading-[0.9] tracking-[-0.07em] text-white sm:text-[62px] lg:text-[92px]">
                  {heroContent.titleLines.slice(0, 3).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block text-[#8cb7ff]">
                    {heroContent.titleLines[3]}
                  </span>
                </h1>

                <p className="mt-6 max-w-[660px] text-[17px] leading-8 text-white/76 md:text-[19px]">
                  {heroContent.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contacts"
                    className="inline-flex h-[58px] items-center justify-center rounded-[18px] bg-[#4b8dff] px-8 text-[17px] font-semibold text-white shadow-[0_20px_45px_rgba(75,141,255,0.35)] transition hover:-translate-y-[1px] hover:bg-[#3c7cf0]"
                  >
                    Получить расчет
                    <span className="ml-3 text-lg">→</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setPricingOpen(true)}
                    className="inline-flex h-[58px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04] px-8 text-[17px] font-semibold text-white backdrop-blur-md transition hover:-translate-y-[1px] hover:bg-white/[0.08]"
                  >
                    Смотреть цены
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#02040e] text-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-8 md:px-8 lg:px-10 lg:pb-14">
          <div className="grid gap-8 xl:grid-cols-[1fr_600px] xl:items-center">
            <div className="grid gap-5 md:grid-cols-3">
              {trustFeatures.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.018)_100%)] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#8cb7ff]">
                      {index === 0 ? (
                        <DocIcon />
                      ) : index === 1 ? (
                        <ClockIcon />
                      ) : (
                        <LayersIcon />
                      )}
                    </div>

                    <div>
                      <h2 className="text-[17px] font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-[14px] leading-6 text-white/58">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(24,44,78,0.62)_0%,rgba(13,26,48,0.46)_55%,rgba(8,15,30,0.4)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
              <div className="grid sm:grid-cols-3">
                {trustStats.map((item, index) => (
                  <div
                    key={`${item.value}-${item.label}`}
                    className={`px-7 py-7 ${
                      index !== trustStats.length - 1
                        ? "border-b border-white/8 sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                  >
                    <div className="text-[32px] font-semibold tracking-[-0.05em] text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[14px] leading-6 text-white/68">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {menuOpen ? (
        <div className="fixed inset-0 z-[140] bg-[#02040e]/82 px-5 py-6 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-[560px] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,29,0.96)_0%,rgba(5,9,20,0.98)_100%)] p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[18px] font-semibold">{company.name}</div>
                <div className="mt-1 text-[12px] text-white/48">
                  {company.tagline}
                </div>
              </div>

              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-8 grid gap-2">
              {navigationItems.map((item) =>
                item.href === "#pricing" ? (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setPricingOpen(true);
                    }}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left text-[16px] font-medium text-white/82 transition hover:bg-white/[0.08]"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-[16px] font-medium text-white/82 transition hover:bg-white/[0.08]"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/42">
                Связаться
              </div>
              <a
                href={contactDetails.phoneHref}
                className="mt-3 block text-[22px] font-semibold text-white"
              >
                {contactDetails.phoneLabel}
              </a>
              <a
                href={contactDetails.emailHref}
                className="mt-2 block text-[14px] text-white/64"
              >
                {contactDetails.emailLabel}
              </a>
              <div className="mt-4 text-[13px] text-white/52">
                {contactDetails.hours}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {pricingOpen ? (
        <PricingModal
          isOpen={pricingOpen}
          onClose={() => setPricingOpen(false)}
        />
      ) : null}
    </>
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
