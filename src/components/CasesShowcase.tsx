import Image from "next/image";
import { cases } from "../lib/site-content";
import CasesModalTrigger from "./CasesModalTrigger";

export default function CasesShowcase() {
  return (
    <section
      id="cases"
      className="cases-theme relative overflow-hidden bg-[var(--cases-section-bg)] text-[var(--cases-section-fg)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[8%] h-[260px] w-[260px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute bottom-[6%] right-[10%] h-[280px] w-[280px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
            РџСЂР°РєС‚РёРєР° Рё СЂРµР·СѓР»СЊС‚Р°С‚
          </div>
          <h2 className="mt-3 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[48px]">
            РљРµР№СЃС‹, РіРґРµ РїРѕСЂСЏРґРѕРє
            <br />
            РїРѕ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё СЃС‚Р°Р» С‡Р°СЃС‚СЊСЋ СЂРµР·СѓР»СЊС‚Р°С‚Р°
          </h2>
        </div>

        <div className="relative grid items-stretch gap-8 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-10">
          <div className="absolute bottom-0 left-[455px] top-0 hidden w-px bg-[var(--cases-divider)] xl:block" />

          <div className="relative flex h-full overflow-hidden rounded-[34px] border border-[var(--cases-shell-border)] bg-[var(--cases-shell-bg)] p-6 shadow-[var(--cases-shell-shadow)] md:p-8 lg:p-9">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(75,141,255,0.12),transparent_42%)]" />
              <div className="absolute left-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
              <div className="absolute bottom-[-60px] right-[-40px] h-[180px] w-[180px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
            </div>

            <div className="relative flex h-full w-full flex-col">
              <div className="inline-flex w-fit items-center rounded-full border border-[var(--cases-filter-border)] bg-[var(--cases-filter-bg)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cases-filter-fg)]">
                Р РµР°Р»СЊРЅС‹Рµ РѕР±СЉРµРєС‚С‹
              </div>

              <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-[var(--cases-muted-soft)]">
                РџРѕРєР°Р·С‹РІР°РµРј РѕР±СЉРµРєС‚С‹, РіРґРµ РІС‹СЃС‚СЂРѕРёР»Рё РїРѕРЅСЏС‚РЅСѓСЋ СЃРёСЃС‚РµРјСѓ РІРµРґРµРЅРёСЏ
                РёСЃРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё, СЃРѕРєСЂР°С‚РёР»Рё РѕР±СЉРµРј СЂСѓС‡РЅРѕРіРѕ РєРѕРЅС‚СЂРѕР»СЏ
                Рё РїРѕРјРѕРіР»Рё РїСЂРѕР№С‚Рё СЌС‚Р°РїС‹ СЃРґР°С‡Рё Р±РµР· Р·Р°С‚СЏР¶РЅС‹С… РґРѕР±РѕСЂРѕРІ.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Р Р°Р±РѕС‚Р°РµРј РІ Р»РѕРіРёРєРµ СЃСЂРѕРєРѕРІ, Р·Р°РјРµС‡Р°РЅРёР№ Рё СЃРѕСЃС‚Р°РІР° РєРѕРјРїР»РµРєС‚Р°",
                  "РџРѕРґСЃС‚СЂР°РёРІР°РµРјСЃСЏ РїРѕРґ С‚РёРї РѕР±СЉРµРєС‚Р° Рё С‚СЂРµР±РѕРІР°РЅРёСЏ Р·Р°РєР°Р·С‡РёРєР°",
                  "Р”РµСЂР¶РёРј РІ С„РѕРєСѓСЃРµ РЅРµ С‚РѕР»СЊРєРѕ РѕС„РѕСЂРјР»РµРЅРёРµ, РЅРѕ Рё С„РёРЅР°Р»СЊРЅСѓСЋ РїРµСЂРµРґР°С‡Сѓ",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-[var(--cases-chip-border)] bg-[var(--cases-chip-bg)] px-4 py-4 text-[14px] leading-6 text-[var(--cases-chip-fg)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <CasesModalTrigger />

              <div className="mt-auto pt-8">
                <div className="rounded-[24px] border border-[var(--cases-trust-panel-border)] bg-[var(--cases-trust-panel-bg)] p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cases-muted)]">
                        РќР°Рј РґРѕРІРµСЂСЏСЋС‚
                      </div>

                      <p className="mt-2 max-w-[230px] text-[12px] leading-5 text-[var(--cases-muted-soft)]">
                        Р Р°Р±РѕС‚Р°РµРј СЃ РґРµРІРµР»РѕРїРµСЂР°РјРё, РїСЂРѕРјС‹С€Р»РµРЅРЅС‹РјРё Р·Р°РєР°Р·С‡РёРєР°РјРё Рё
                        РєСЂСѓРїРЅС‹РјРё РїРѕРґСЂСЏРґРЅС‹РјРё РєРѕРЅС‚СѓСЂР°РјРё.
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--cases-trust-icon-border)] bg-[var(--cases-trust-icon-bg)] text-[var(--cases-trust-icon-fg)] md:flex">
                      <TrustMini />
                    </div>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-[18px]">
                    <div
                      className="pointer-events-none absolute inset-0 z-10"
                      style={{ background: "var(--cases-trust-overlay)" }}
                    />
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="/images/15.webp"
                        alt="РљРѕРјРїР°РЅРёРё Рё РїСЂРѕРµРєС‚С‹, СЃ РєРѕС‚РѕСЂС‹РјРё СЂР°Р±РѕС‚Р°РµС‚ РџРўРћ-Р®Р“Р Рђ"
                        fill
                        className="theme-only-dark object-cover"
                      />
                      <Image
                        src="/images/15-light.webp"
                        alt="РљРѕРјРїР°РЅРёРё Рё РїСЂРѕРµРєС‚С‹, СЃ РєРѕС‚РѕСЂС‹РјРё СЂР°Р±РѕС‚Р°РµС‚ РџРўРћ-Р®Р“Р Рђ"
                        fill
                        className="theme-only-light object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className="group flex h-full min-h-[380px] flex-col overflow-hidden rounded-[28px] border border-[var(--cases-card-border)] bg-[var(--cases-card-bg)] shadow-[var(--cases-card-shadow)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(75,141,255,0.16)]"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-[50%_30%] transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0" style={{ background: "var(--cases-overlay)" }} />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[18px] font-semibold leading-[1.1] tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[var(--cases-muted-soft)]">
                    {item.text}
                  </p>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                    {item.stats.map((stat, index) => (
                      <div
                        key={`${item.title}-${stat.label}`}
                        className="flex items-center gap-3 rounded-[18px] border border-[var(--cases-stat-border)] bg-[var(--cases-stat-bg)] p-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--cases-badge-border)] bg-[var(--cases-badge-bg)] text-[var(--cases-badge-fg)]">
                          {index === 0 ? <CalendarMini /> : <StatusMini />}
                        </div>

                        <div className="min-w-0">
                          <div className="text-[13px] font-semibold leading-4">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-[12px] leading-4 text-[var(--cases-muted)]">
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
        </div>
      </div>
    </section>
  );
}

function CalendarMini() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 2.75V4.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3.5 5.25H12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="2.75" y="3.75" width="10.5" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StatusMini() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

function TrustMini() {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2.2L12.2 4.1V7.3C12.2 10 10.5 12.2 8 13.3C5.5 12.2 3.8 10 3.8 7.3V4.1L8 2.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.4 7.9L7.4 8.9L9.8 6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
