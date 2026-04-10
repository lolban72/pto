"use client";

import { useEffect } from "react";
import Image from "next/image";

type ServiceItem = {
  title: string;
  text: string;
  icon: string;
};

type ServicesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  services: ReadonlyArray<ServiceItem>;
};

export default function ServicesModal({
  isOpen,
  onClose,
  services,
}: ServicesModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="services-modal-theme fixed inset-0 z-[120] overflow-y-auto bg-[var(--services-modal-overlay)] px-4 py-4 md:px-6 md:py-6"
      onClick={onClose}
    >
      <div className="flex min-h-full items-start justify-center md:items-center">
        <div
          className="relative my-auto flex max-h-[calc(100vh-2rem)] w-full max-w-[1180px] flex-col overflow-hidden rounded-[30px] border border-[var(--services-modal-border)] bg-[var(--services-modal-bg)] text-[var(--services-modal-fg)] shadow-[var(--services-modal-shadow)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="shrink-0 border-b border-[var(--services-modal-card-border)] px-6 py-5 md:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#4b8dff]">
                  Р’СЃРµ СѓСЃР»СѓРіРё
                </div>

                <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
                  РљРѕРјРїР»РµРєСЃРЅРѕРµ СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ РџРўРћ
                </h2>

                <p className="mt-3 max-w-[760px] text-[14px] leading-6 text-[var(--services-modal-muted)]">
                  Р—Р°РєСЂС‹РІР°РµРј РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅСѓСЋ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЋ, РїСЂРѕРёР·РІРѕРґСЃС‚РІРµРЅРЅС‹Рµ
                  СЂР°Р·РґРµР»С‹, РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РєРѕРјРїР»РµРєС‚Р° Рё РїРѕРґРіРѕС‚РѕРІРєСѓ Рє СЃРґР°С‡Рµ. Р¤РѕСЂРјР°С‚
                  РїРѕРґРєР»СЋС‡РµРЅРёСЏ РїРѕРґР±РёСЂР°РµРј РїРѕРґ РІР°С€ РѕР±СЉРµРєС‚, СЃСЂРѕРєРё Рё С‚РµРєСѓС‰РёР№ СѓСЂРѕРІРµРЅСЊ
                  С…Р°РѕСЃР°.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Р—Р°РєСЂС‹С‚СЊ"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--services-modal-close-border)] bg-[var(--services-modal-close-bg)] text-[var(--services-modal-close-fg)] transition hover:bg-[var(--services-modal-close-hover-bg)]"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 [-webkit-overflow-scrolling:touch] md:px-8 md:py-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[24px] border border-[var(--services-modal-card-border)] bg-[var(--services-modal-card-bg)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)]"
                >
                  <div className="mb-4 flex h-[74px] w-[74px] items-center justify-center rounded-[20px] bg-[radial-gradient(circle,rgba(75,141,255,0.2)_0%,rgba(75,141,255,0.08)_45%,transparent_72%)] shadow-[0_0_28px_rgba(75,141,255,0.24)] transition duration-300 group-hover:shadow-[0_0_36px_rgba(75,141,255,0.38)]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={54}
                      height={54}
                      className="object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-[18px] font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--services-modal-muted)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-[var(--services-modal-cta-border)] bg-[var(--services-modal-cta-bg)] p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[22px] font-semibold leading-tight md:text-[26px]">
                    РќСѓР¶РµРЅ С„РѕСЂРјР°С‚ РїРѕРґ РІР°С€ РѕР±СЉРµРєС‚?
                  </div>

                  <p className="mt-2 max-w-[720px] text-[14px] leading-6 text-[var(--services-modal-muted)]">
                    РџРѕРґР±РµСЂРµРј РєРѕРЅС„РёРіСѓСЂР°С†РёСЋ СЂР°Р±РѕС‚: СЂР°Р·РѕРІР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° РєРѕРјРїР»РµРєС‚Р°,
                    РІРµРґРµРЅРёРµ РѕС‚РґРµР»СЊРЅС‹С… СЂР°Р·РґРµР»РѕРІ РёР»Рё РїРѕР»РЅРѕС†РµРЅРЅС‹Р№ Р°СѓС‚СЃРѕСЂСЃРёРЅРі РџРўРћ.
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
