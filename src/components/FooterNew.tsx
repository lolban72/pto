import {
  company,
  contactDetails,
  navigationItems,
} from "../lib/site-content";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="footer-theme relative overflow-hidden border-t border-[var(--footer-border)] bg-[var(--footer-bg)] text-[var(--footer-fg)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-40px] h-[140px] w-[140px] rounded-full bg-[#4b8dff]/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[-60px] h-[180px] w-[180px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 py-10 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="text-[20px] font-semibold tracking-[0.01em]">
              {company.name}
            </div>

            <p className="mt-4 max-w-[360px] text-[14px] leading-7 text-[var(--footer-muted)]">
              {company.description}
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
              РќР°РІРёРіР°С†РёСЏ
            </div>

            <div className="mt-4 flex flex-col gap-3 text-[14px]">
              {navigationItems
                .filter((item) => item.href !== "#pricing")
                .map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:opacity-70"
                  >
                    {item.label}
                  </a>
                ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
              РљРѕРЅС‚Р°РєС‚С‹
            </div>

            <div className="mt-4 space-y-3 text-[14px]">
              <a href={contactDetails.phoneHref} className="block font-semibold">
                {contactDetails.phoneLabel}
              </a>
              <a href={contactDetails.emailHref} className="block">
                {contactDetails.emailLabel}
              </a>
              <div className="text-[var(--footer-soft-muted)]">
                {contactDetails.location}
              </div>
              <div className="text-[var(--footer-soft-muted)]">
                {contactDetails.hours}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
                РўРµРјР°
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--footer-border)] pt-6 text-[12px] text-[var(--footer-subtle)] md:flex-row md:items-center md:justify-between">
          <div>В© {new Date().getFullYear()} {company.name}</div>
          <div>РСЃРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ, РџРўРћ Рё СЃРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ СЃРґР°С‡Рё РѕР±СЉРµРєС‚РѕРІ</div>
        </div>
      </div>
    </footer>
  );
}
