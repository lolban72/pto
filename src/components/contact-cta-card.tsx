import Image from "next/image";
import { contactDetails, contactHighlights } from "../lib/site-content";

export default function ContactCtaCard() {
  return (
    <section
      id="contacts"
      className="contact-theme relative overflow-hidden bg-[var(--contact-section-bg)] text-[var(--contact-section-fg)]"
    >
      <div className="mx-auto max-w-[1680px] px-5 py-8 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--contact-shell-border)] bg-[var(--contact-shell-bg)] px-6 py-8 shadow-[var(--contact-shell-shadow)] md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/16.webp"
              alt="РљРѕРјР°РЅРґР° СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёСЏ СЃС‚СЂРѕРёС‚РµР»СЊРЅРѕРіРѕ РѕР±СЉРµРєС‚Р°"
              fill
              className="object-cover object-[86%_34%]"
            />
            <div className="absolute inset-0" style={{ background: "var(--contact-overlay)" }} />
          </div>

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_390px] xl:items-end">
            <div className="max-w-[760px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4b8dff]">
                РЎР»РµРґСѓСЋС‰РёР№ С€Р°Рі
              </div>

              <h2 className="mt-4 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] md:text-[50px]">
                РџРѕРґРєР»СЋС‡РёРјСЃСЏ Рє РѕР±СЉРµРєС‚Сѓ,
                <br />
                РѕС†РµРЅРёРј РѕР±СЉРµРј Рё РїСЂРµРґР»РѕР¶РёРј
                <br />
                СЂР°Р±РѕС‡РёР№ С„РѕСЂРјР°С‚ Р±РµР· Р»РёС€РЅРµР№ Р±СЋСЂРѕРєСЂР°С‚РёРё
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[var(--contact-muted)]">
                Р§С‚РѕР±С‹ РѕС†РµРЅРёС‚СЊ Р·Р°РґР°С‡Сѓ, РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РєРѕСЂРѕС‚РєРѕ РѕРїРёСЃР°С‚СЊ СЌС‚Р°Рї РѕР±СЉРµРєС‚Р°,
                СЃРѕСЃС‚Р°РІ РїСЂРѕР±Р»РµРјРЅС‹С… СЂР°Р·РґРµР»РѕРІ Рё С‡С‚Рѕ СѓР¶Рµ РµСЃС‚СЊ РЅР° СЂСѓРєР°С…. Р”Р°Р»СЊС€Рµ
                РїСЂРµРґР»РѕР¶РёРј РїРѕРЅСЏС‚РЅС‹Р№ С„РѕСЂРјР°С‚ РїРѕРґРєР»СЋС‡РµРЅРёСЏ Рё РїСЂРёРѕСЂРёС‚РµС‚С‹ РїРѕ СЂР°Р±РѕС‚Р°Рј.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {contactHighlights.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--contact-chip-border)] bg-[var(--contact-chip-bg)] px-4 py-2 text-[12px] text-[var(--contact-chip-fg)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#4b8dff]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={contactDetails.phoneHref}
                  className="inline-flex h-[48px] items-center rounded-full bg-[linear-gradient(180deg,#4f8cff_0%,#2f6ff2_100%)] px-6 text-[14px] font-medium text-white shadow-[0_18px_40px_rgba(59,130,246,0.35)] transition hover:brightness-110"
                >
                  РџРѕР·РІРѕРЅРёС‚СЊ
                  <span className="ml-2">в†’</span>
                </a>

                <a
                  href={contactDetails.emailHref}
                  className="inline-flex h-[48px] items-center rounded-full border border-[var(--contact-secondary-border)] bg-[var(--contact-secondary-bg)] px-6 text-[14px] font-medium text-[var(--contact-secondary-fg)] transition hover:bg-[var(--contact-secondary-hover-bg)]"
                >
                  РќР°РїРёСЃР°С‚СЊ РЅР° РїРѕС‡С‚Сѓ
                </a>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-[var(--contact-panel-border)] bg-[var(--contact-panel-bg)] p-5 shadow-[var(--contact-panel-shadow)] backdrop-blur-xl md:p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4b8dff]">
                РљРѕРЅС‚Р°РєС‚С‹
              </div>

              <div className="mt-5 grid gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--contact-small-muted)]">
                    РўРµР»РµС„РѕРЅ
                  </div>
                  <a
                    href={contactDetails.phoneHref}
                    className="mt-2 block text-[24px] font-semibold"
                  >
                    {contactDetails.phoneLabel}
                  </a>
                  <div className="mt-1 text-[13px] text-[var(--contact-muted)]">
                    {contactDetails.hours}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--contact-small-muted)]">
                    Email
                  </div>
                  <a
                    href={contactDetails.emailHref}
                    className="mt-2 block text-[18px] font-semibold"
                  >
                    {contactDetails.emailLabel}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--contact-small-muted)]">
                    Р“РµРѕРіСЂР°С„РёСЏ Рё С„РѕСЂРјР°С‚
                  </div>
                  <div className="mt-2 text-[15px] font-medium">
                    {contactDetails.location}
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--contact-muted)]">
                    {contactDetails.responseNote}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[22px] border border-[var(--contact-card-border)] bg-[var(--contact-card-bg)] p-4">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--contact-small-muted)]">
                  Р§С‚Рѕ РїРѕР»РµР·РЅРѕ РїСЂРёСЃР»Р°С‚СЊ
                </div>
                <div className="mt-3 text-[13px] leading-6 text-[var(--contact-card-fg)]">
                  РђРґСЂРµСЃ РѕР±СЉРµРєС‚Р°, С‚РµРєСѓС‰РёР№ СЌС‚Р°Рї, РїСЂРѕР±Р»РµРјРЅС‹Рµ СЂР°Р·РґРµР»С‹ Рё С‡С‚Рѕ СѓР¶Рµ
                  СЃРѕР±РѕР°РЅРѕ РїРѕ РєРѕРјРїР»РµРєС‚Сѓ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
