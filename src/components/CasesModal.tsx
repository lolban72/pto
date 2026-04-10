"use client";

import { useEffect } from "react";
import Image from "next/image";

type CaseStat = {
  value: string;
  label: string;
};

type CaseItem = {
  title: string;
  text: string;
  image: string;
  stats: ReadonlyArray<CaseStat>;
};

type CasesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cases: ReadonlyArray<CaseItem>;
};

export default function CasesModal({
  isOpen,
  onClose,
  cases,
}: CasesModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="cases-modal-theme fixed inset-0 z-[130] flex items-center justify-center bg-[var(--cases-modal-overlay)] px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-[1320px] flex-col rounded-[30px] border border-[var(--cases-modal-border)] bg-[var(--cases-modal-bg)] text-[var(--cases-modal-fg)] shadow-[var(--cases-modal-shadow)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--cases-modal-header-border)] px-6 py-5 md:px-8">
          <div>
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#4b8dff]">
              Р РµР°Р»СЊРЅС‹Рµ РїСЂРѕРµРєС‚С‹
            </div>

            <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
              РљРµР№СЃС‹ Рё РІС‹РїРѕР»РЅРµРЅРЅС‹Рµ Р·Р°РґР°С‡Рё
            </h2>

            <p className="mt-3 max-w-[800px] text-[14px] leading-6 text-[var(--cases-modal-muted-soft)]">
              Р—РґРµСЃСЊ СЃРѕР±СЂР°РЅС‹ РѕР±СЉРµРєС‚С‹, РіРґРµ РјС‹ РІРµР»Рё РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅСѓСЋ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЋ,
              РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°Р»Рё РєРѕРјРїР»РµРєС‚, СЃРѕРїСЂРѕРІРѕР¶РґР°Р»Рё СЂРµРјРѕРЅС‚РЅС‹Рµ Рё СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Рµ
              СЂР°Р±РѕС‚С‹ Рё РїРѕРјРѕРіР°Р»Рё РїСЂРѕР№С‚Рё СЌС‚Р°РїС‹ СЃРґР°С‡Рё Р±РµР· Р·Р°С‚СЏР¶РЅС‹С… Р·Р°РјРµС‡Р°РЅРёР№.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Р—Р°РєСЂС‹С‚СЊ"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--cases-modal-close-border)] bg-[var(--cases-modal-close-bg)] text-[var(--cases-modal-close-fg)] transition hover:bg-[var(--cases-modal-close-hover-bg)]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 pb-10 md:px-8 md:py-8 md:pb-12">
          <div className="grid gap-5 xl:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[26px] border border-[var(--cases-modal-card-border)] bg-[var(--cases-modal-card-bg)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(75,141,255,0.15)]"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-[50%_30%] transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0" style={{ background: "var(--cases-modal-overlay-image)" }} />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--cases-modal-muted-soft)]">
                    {item.text}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {item.stats.map((stat, index) => (
                      <div
                        key={`${item.title}-${stat.label}`}
                        className="flex items-center gap-3 rounded-[18px] border border-[var(--cases-modal-stat-border)] bg-[var(--cases-modal-stat-bg)] p-3.5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--cases-modal-badge-border)] bg-[var(--cases-modal-badge-bg)] text-[var(--cases-modal-badge-fg)]">
                          {index === 0 ? <CalendarMini /> : <StatusMini />}
                        </div>

                        <div className="min-w-0">
                          <div className="text-[13px] font-semibold leading-4">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-[12px] leading-4 text-[var(--cases-modal-muted)]">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-[var(--cases-modal-cta-border)] bg-[var(--cases-modal-cta-bg)] p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="max-w-[560px] text-[20px] font-semibold leading-tight md:text-[26px]">
                  РҐРѕС‚РёС‚Рµ С‚Р°РєРѕР№ Р¶Рµ РїРѕСЂСЏРґРѕРє
                  <br />
                  РїРѕ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё РЅР° РІР°С€РµРј РѕР±СЉРµРєС‚Рµ?
                </div>

                <p className="mt-2 max-w-[780px] text-[14px] leading-6 text-[var(--cases-modal-muted-soft)]">
                  РџРѕРґРєР»СЋС‡РёРјСЃСЏ Рє РїСЂРѕРµРєС‚Сѓ, РѕС†РµРЅРёРј РѕР±СЉРµРј Р·Р°РґР°С‡, РїРѕРґРіРѕС‚РѕРІРёРј РїРѕРЅСЏС‚РЅС‹Р№
                  РїР»Р°РЅ СЂР°Р±РѕС‚ Рё РІРѕР·СЊРјРµРј РЅР° СЃРµР±СЏ СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё РїРѕРґ РІР°С€
                  РѕР±СЉРµРєС‚.
                </p>
              </div>

              <a
                href="#contacts"
                onClick={onClose}
                className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#4b8dff] px-5 text-[14px] font-medium text-white transition hover:bg-[#3b7df0]"
              >
                РЎРІСЏР·Р°С‚СЊСЃСЏ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3.5 5.25H12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="2.75" y="3.75" width="10.5" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StatusMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5.7 8.1L7.2 9.6L10.5 6.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
