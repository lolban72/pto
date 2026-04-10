"use client";

import Image from "next/image";
import { useRef } from "react";
import { audience, processSteps } from "../lib/site-content";

export default function AudienceProcess() {
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const scrollSteps = (direction: "left" | "right") => {
    if (!stepsRef.current) {
      return;
    }

    stepsRef.current.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="audience"
      className="audience-theme relative overflow-hidden bg-[var(--audience-section-bg)] text-[var(--audience-section-fg)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[16%] top-[10%] h-48 w-48 rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-56 w-56 rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
            РљРѕРјСѓ Рё РєР°Рє РїРѕРґС…РѕРґРёРј
          </div>
          <h2 className="mt-3 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[48px]">
            Р¤РѕСЂРјР°С‚ СЂР°Р±РѕС‚С‹,
            <br />
            РєРѕС‚РѕСЂС‹Р№ РЅРµ СЃРѕР·РґР°РµС‚ С…Р°РѕСЃ РЅР° РѕР±СЉРµРєС‚Рµ
          </h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0 grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col rounded-[22px] border border-[var(--audience-card-border)] bg-[var(--audience-card-bg)] pl-3 pr-3 pt-5 pb-4 shadow-[var(--audience-card-shadow)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]"
              >
                <div className="mb-2 flex h-18 w-18 items-center justify-center rounded-xl bg-[radial-gradient(circle,rgba(75,141,255,0.18)_0%,rgba(75,141,255,0.08)_40%,transparent_70%)] shadow-[0_0_25px_rgba(75,141,255,0.25)] transition duration-300 group-hover:shadow-[0_0_34px_rgba(75,141,255,0.4)]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={52}
                    height={52}
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-[14px] font-semibold leading-5">
                  {item.title}
                </div>

                <div className="mt-2 mr-3 text-[12px] leading-5 text-[var(--audience-muted)]">
                  {item.text}
                </div>
              </article>
            ))}
          </div>

          <div className="min-w-0 rounded-[28px] border border-[var(--audience-card-border)] bg-[var(--audience-card-bg)] p-5 shadow-[var(--audience-card-shadow)]">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-[340px]">
                <h2 className="text-[30px] font-semibold leading-[0.98] tracking-[-0.03em]">
                  РљР°Рє РјС‹ СЂР°Р±РѕС‚Р°РµРј
                </h2>

                <p className="mt-1 text-[12px] leading-5 text-[var(--audience-soft-muted)]">
                  РџСЂРѕСЃС‚РѕР№ Рё РїСЂРѕР·СЂР°С‡РЅС‹Р№ РїСЂРѕС†РµСЃСЃ РІ 6 С€Р°РіРѕРІ
                </p>
              </div>

              <div className="hidden shrink-0 items-center gap-2 md:flex">
                <button
                  onClick={() => scrollSteps("left")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--audience-control-border)] bg-[var(--audience-control-bg)] text-[var(--audience-control-fg)] transition hover:bg-[var(--audience-control-hover-bg)]"
                  aria-label="РќР°Р·Р°Рґ"
                >
                  в†ђ
                </button>

                <button
                  onClick={() => scrollSteps("right")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--audience-control-border)] bg-[var(--audience-control-bg)] text-[var(--audience-control-fg)] transition hover:bg-[var(--audience-control-hover-bg)]"
                  aria-label="Р’РїРµСЂС‘Рґ"
                >
                  в†’
                </button>
              </div>
            </div>

            <div
              ref={stepsRef}
              className="mt-3 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                className="
                  grid grid-flow-col gap-4
                  auto-cols-[85%]
                  md:auto-cols-[calc((100%-0.75rem)/2)]
                  xl:auto-cols-[calc((100%-18rem)/3)]
                "
              >
                {processSteps.map((step, index) => (
                  <article
                    key={`${index + 1}-${step}`}
                    className="snap-start rounded-[18px] border border-[var(--audience-step-border)] bg-[var(--audience-step-bg)] p-4 transition duration-300 hover:bg-[var(--audience-step-hover-bg)]"
                  >
                    <div className="flex">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--audience-badge-border)] bg-[var(--audience-badge-bg)] text-[var(--audience-badge-fg)] transition duration-300">
                        <CheckMini />
                      </div>

                      <div className="ml-3 mt-2 text-[12px] font-medium text-[var(--audience-step-index)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="mt-2 whitespace-pre-line text-[12px] font-medium leading-5 text-[var(--audience-step-fg)]">
                      {step}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
