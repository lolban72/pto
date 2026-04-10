"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  isLight: boolean;
  mounted: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // 🔥 единая функция применения темы
  const applyThemeToDocument = (nextTheme: Theme) => {
    const bg = nextTheme === "light" ? "#f6f8fc" : "#02040e";

    // html
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    document.documentElement.style.backgroundColor = bg;

    // body
    document.body.style.backgroundColor = bg;
  };

  // 🔹 при загрузке
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("pto-theme");
    const initialTheme: Theme = savedTheme === "light" ? "light" : "dark";

    setThemeState(initialTheme);
    applyThemeToDocument(initialTheme);

    setMounted(true);
  }, []);

  // 🔹 смена темы
  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);

    applyThemeToDocument(nextTheme);

    window.localStorage.setItem("pto-theme", nextTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = useMemo(
    () => ({
      theme,
      isLight: theme === "light",
      mounted,
      toggleTheme,
      setTheme,
    }),
    [theme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}