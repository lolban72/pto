"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "pto-theme";

function applyTheme(theme: Theme) {
  const background = theme === "light" ? "#f6f8fc" : "#02040e";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.documentElement.style.backgroundColor = background;
  document.body.style.backgroundColor = background;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    applyTheme("dark");
  }, []);

  const onChange = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    applyTheme(nextIsLight ? "light" : "dark");
  };

  return (
    <label className="mt-4 inline-flex cursor-pointer items-center gap-4">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isLight}
        onChange={onChange}
      />

      <div className="relative h-7 w-12 rounded-full bg-[var(--footer-toggle-track)] transition">
        <span
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition ${
            isLight ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>

      <span className="text-[13px] text-[var(--footer-toggle-label)]">
        РЎРІРµС‚Р»Р°СЏ С‚РµРјР°
      </span>
    </label>
  );
}
