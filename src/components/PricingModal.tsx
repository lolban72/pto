"use client";

import { useEffect } from "react";

type PricingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const plans = [
  {
    title: "Р Р°Р·РѕРІС‹Р№ РїР°РєРµС‚",
    price: "РѕС‚ 25 000 в‚Ѕ",
    description: "РџРѕРґРіРѕС‚РѕРІРєР° РєРѕРЅРєСЂРµС‚РЅРѕРіРѕ РєРѕРјРїР»РµРєС‚Р° РґРѕРєСѓРјРµРЅС‚Р°С†РёРё РїРѕРґ Р·Р°РґР°С‡Сѓ",
    features: [
      "РСЃРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ",
      "РћС„РѕСЂРјР»РµРЅРёРµ СЂР°Р·РґРµР»РѕРІ",
      "РџРѕРґРіРѕС‚РѕРІРєР° Рє РїСЂРѕРІРµСЂРєРµ",
      "Р‘РµР· РґРѕР»РіРѕСЃСЂРѕС‡РЅС‹С… РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІ",
    ],
    highlight: false,
  },
  {
    title: "Р’РµРґРµРЅРёРµ СЂР°Р·РґРµР»Р°",
    price: "РѕС‚ 60 000 в‚Ѕ / РјРµСЃ",
    description: "Р‘РµСЂС‘Рј РЅР° СЃРµР±СЏ РєРѕРЅРєСЂРµС‚РЅС‹Р№ Р±Р»РѕРє РџРўРћ РЅР° РѕР±СЉРµРєС‚Рµ",
    features: [
      "РџРѕСЃС‚РѕСЏРЅРЅР°СЏ СЂР°Р±РѕС‚Р° РїРѕ СЂР°Р·РґРµР»Сѓ",
      "РљРѕРЅС‚СЂРѕР»СЊ СЃС‚Р°С‚СѓСЃРѕРІ",
      "Р Р°Р±РѕС‚Р° СЃ Р·Р°РјРµС‡Р°РЅРёСЏРјРё",
      "РЎРІСЏР·РєР° СЃ РїРѕРґСЂСЏРґС‡РёРєР°РјРё",
    ],
    highlight: true,
  },
  {
    title: "РџРѕР»РЅС‹Р№ Р°СѓС‚СЃРѕСЂСЃРёРЅРі",
    price: "РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕ",
    description: "РџРѕР»РЅРѕРµ СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ РџРўРћ РїРѕРґ РєР»СЋС‡",
    features: [
      "Р’РµСЃСЊ РґРѕРєСѓРјРµРЅС‚РѕРѕР±РѕСЂРѕС‚",
      "РљРѕРЅС‚СЂРѕР»СЊ СЃСЂРѕРєРѕРІ",
      "Р’Р·Р°РёРјРѕРґРµР№СЃС‚РІРёРµ СЃРѕ РІСЃРµРјРё СЃС‚РѕСЂРѕРЅР°РјРё",
      "РџРѕРґРіРѕС‚РѕРІРєР° Рё СЃРґР°С‡Р° РѕР±СЉРµРєС‚Р°",
    ],
    highlight: false,
  },
];

export default function PricingModal({
  isOpen,
  onClose,
}: PricingModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="pricing-modal-theme fixed inset-0 z-[160] overflow-y-auto bg-[var(--pricing-overlay)] px-4 py-4 md:px-6 md:py-6"
      onClick={onClose}
    >
      <div className="flex min-h-full items-start justify-center md:items-center">
        <div
          className="relative my-auto flex max-h-[calc(100vh-2rem)] w-full max-w-[1180px] flex-col overflow-hidden rounded-[30px] border border-[var(--pricing-modal-border)] bg-[var(--pricing-modal-bg)] text-[var(--pricing-modal-fg)] shadow-[var(--pricing-modal-shadow)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="shrink-0 border-b border-[var(--pricing-card-border)] px-6 py-5 md:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#4b8dff]">
                  РЎС‚РѕРёРјРѕСЃС‚СЊ
                </div>

                <h2 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
                  Р¤РѕСЂРјР°С‚С‹ СЂР°Р±РѕС‚С‹ Рё С†РµРЅС‹
                </h2>

                <p className="mt-3 max-w-[760px] text-[14px] leading-6 text-[var(--pricing-muted)]">
                  РџРѕРґР±РёСЂР°РµРј С„РѕСЂРјР°С‚ РїРѕРґ Р·Р°РґР°С‡Сѓ, СЃСЂРѕРєРё Рё С‚РµРєСѓС‰СѓСЋ СЃРёС‚СѓР°С†РёСЋ РЅР°
                  РѕР±СЉРµРєС‚Рµ. РўРѕС‡РЅСѓСЋ СЃС‚РѕРёРјРѕСЃС‚СЊ РѕРїСЂРµРґРµР»СЏРµРј РїРѕСЃР»Рµ РєРѕСЂРѕС‚РєРѕРіРѕ СЂР°Р·Р±РѕСЂР°
                  РѕР±СЉС‘РјР° СЂР°Р±РѕС‚.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Р—Р°РєСЂС‹С‚СЊ"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--pricing-close-border)] bg-[var(--pricing-close-bg)] text-[var(--pricing-close-fg)] transition hover:bg-[var(--pricing-close-hover-bg)]"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 [-webkit-overflow-scrolling:touch] md:px-8 md:py-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`relative rounded-[24px] border border-[var(--pricing-card-border)] bg-[var(--pricing-card-bg)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,141,255,0.12)] ${
                    plan.highlight ? "ring-2 ring-[#4b8dff]/40" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute right-4 top-4 rounded-full bg-[#4b8dff] px-3 py-1 text-[11px] font-semibold text-white">
                      РџРѕРїСѓР»СЏСЂРЅРѕ
                    </div>
                  )}

                  <h3 className="text-[18px] font-semibold leading-snug">
                    {plan.title}
                  </h3>

                  <div className="mt-4 text-[28px] font-bold text-[#4b8dff]">
                    {plan.price}
                  </div>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--pricing-muted)]">
                    {plan.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#4b8dff]" />
                        <span className="text-[14px] leading-6">{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-[var(--pricing-panel-border)] bg-[var(--pricing-panel-bg)] p-5 md:p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#4b8dff]">
                    РџСЂР°Р№СЃ-Р»РёСЃС‚
                  </div>
                  <h3 className="mt-2 text-[24px] font-semibold leading-tight md:text-[28px]">
                    РћСЃРЅРѕРІРЅС‹Рµ СѓСЃР»СѓРіРё РїРѕ РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё Рё СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёСЋ СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІР°
                  </h3>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[20px] border border-[var(--pricing-row-border)]">
                <div className="grid grid-cols-[1fr_auto] bg-[var(--pricing-table-head-bg)] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--pricing-table-head-fg)] md:px-5">
                  <div>РЈСЃР»СѓРіР°</div>
                  <div>РЎС‚РѕРёРјРѕСЃС‚СЊ</div>
                </div>

                {[
                  {
                    title: "РћС„РѕСЂРјР»РµРЅРёРµ РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё РїРѕ РѕРґРЅРѕРјСѓ РєРѕРјРїР»РµРєС‚Сѓ",
                    price: "РѕС‚ 25 000 в‚Ѕ",
                  },
                  {
                    title: "Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё РїРѕ СѓР¶Рµ РІС‹РїРѕР»РЅРµРЅРЅС‹Рј СЂР°Р±РѕС‚Р°Рј",
                    price: "РѕС‚ 35 000 в‚Ѕ",
                  },
                  {
                    title: "РџРѕРґРіРѕС‚РѕРІРєР° Р°РєС‚РѕРІ, Р¶СѓСЂРЅР°Р»РѕРІ Рё СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РёС… С„РѕСЂРј",
                    price: "РѕС‚ 15 000 в‚Ѕ",
                  },
                  {
                    title: "РЎРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ СЂР°Р·РґРµР»Р° РџРўРћ РЅР° РѕР±СЉРµРєС‚Рµ",
                    price: "РѕС‚ 60 000 в‚Ѕ / РјРµСЃ",
                  },
                  {
                    title: "Р’РµРґРµРЅРёРµ РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё РїРѕРґ СЃРґР°С‡Сѓ РѕР±СЉРµРєС‚Р°",
                    price: "РѕС‚ 90 000 в‚Ѕ / РјРµСЃ",
                  },
                  {
                    title: "РџРѕР»РЅС‹Р№ Р°СѓС‚СЃРѕСЂСЃРёРЅРі РџРўРћ Рё СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІР°",
                    price: "РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕ",
                  },
                ].map((item, index, arr) => (
                  <div
                    key={item.title}
                    className={`grid grid-cols-[1fr_auto] items-start gap-4 bg-[var(--pricing-row-bg)] px-4 py-4 md:px-5 ${
                      index !== arr.length - 1
                        ? "border-t border-[var(--pricing-row-border)]"
                        : ""
                    }`}
                  >
                    <div className="text-[14px] leading-6 text-[var(--pricing-row-fg)] md:text-[15px]">
                      {item.title}
                    </div>

                    <div className="whitespace-nowrap text-right text-[14px] font-semibold text-[#4b8dff] md:text-[15px]">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[13px] leading-6 text-[var(--pricing-note)]">
                РўРѕС‡РЅСѓСЋ СЃС‚РѕРёРјРѕСЃС‚СЊ РЅР°Р·С‹РІР°РµРј РїРѕСЃР»Рµ РєРѕСЂРѕС‚РєРѕРіРѕ СЂР°Р·Р±РѕСЂР° Р·Р°РґР°С‡Рё: СѓС‡РёС‚С‹РІР°РµРј РѕР±СЉС‘Рј РґРѕРєСѓРјРµРЅС‚Р°С†РёРё,
                РєРѕРјРїР»РµРєС‚ РёСЃС…РѕРґРЅС‹С… РґР°РЅРЅС‹С…, СЃСЂРѕС‡РЅРѕСЃС‚СЊ Рё С‚РµРєСѓС‰СѓСЋ СЃС‚Р°РґРёСЋ СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІР°.
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-[var(--pricing-cta-border)] bg-[var(--pricing-cta-bg)] p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[22px] font-semibold leading-tight md:text-[26px]">
                    РќСѓР¶РµРЅ СЂР°СЃС‡С‘С‚ РїРѕРґ РІР°С€ РѕР±СЉРµРєС‚?
                  </div>

                  <p className="mt-2 max-w-[720px] text-[14px] leading-6 text-[var(--pricing-muted)]">
                    РџРѕРґР±РµСЂС‘Рј С„РѕСЂРјР°С‚ СЂР°Р±РѕС‚: СЂР°Р·РѕРІР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° РєРѕРјРїР»РµРєС‚Р°, РІРµРґРµРЅРёРµ
                    РѕС‚РґРµР»СЊРЅС‹С… СЂР°Р·РґРµР»РѕРІ РёР»Рё РїРѕР»РЅРѕС†РµРЅРЅС‹Р№ Р°СѓС‚СЃРѕСЂСЃРёРЅРі РџРўРћ.
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
