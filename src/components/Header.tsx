"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "О нас", href: "/about" },
  { label: "Цены", href: "/prices" },
  { label: "Библиотека", href: "/library" },
  { label: "Контакты", href: "/contacts" },
];

export default function Header({ variant = "solid" }: HeaderProps) {
  const pathname = usePathname();
  const isOverlay = variant === "overlay";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={
        isOverlay
          ? "absolute left-0 top-0 z-40 w-full pt-6"
          : "relative z-40 bg-[#f4f7fb]"
      }
    >
      <div className="mx-auto max-w-[1580px] px-6 lg:px-10">
        <div
          className={
            isOverlay
              ? `
                flex min-h-[72px] items-center justify-between rounded-[28px] px-2
              `
              : `
                mt-[20px] flex min-h-[72px] items-center justify-between rounded-[28px]
                border border-white/35 bg-white/70 px-8 backdrop-blur-xl
                shadow-[0_18px_50px_rgba(15,23,42,0.12)]
              `
          }
        >
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    isOverlay
                      ? `
                        inline-flex h-10 items-center rounded-full px-4 text-[15px]
                        font-medium transition
                        ${
                          active
                            ? "bg-white/18 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
                            : "text-white hover:bg-white/10 hover:text-white"
                        }
                      `
                      : `
                        inline-flex h-10 items-center rounded-full px-4 text-[15px]
                        font-medium transition
                        ${
                          active
                            ? "bg-[#eff6ff] text-[#2563eb] shadow-sm"
                            : "text-slate-700 hover:bg-white hover:text-[#2563eb] hover:shadow-sm"
                        }
                      `
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {!isOverlay && (
            <a
              href="tel:+74951880349"
              className="
                inline-flex h-[44px] items-center justify-center rounded-full
                bg-[#2563eb] px-6 text-[15px] font-semibold text-white
                shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition
                hover:-translate-y-[1px] hover:bg-[#1d4ed8]
              "
            >
              +7 (495) 188-03-49
            </a>
          )}  
        </div>
      </div>
    </header>
  );
}