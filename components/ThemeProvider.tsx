"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "default" | "azul" | "naranja";

interface ThemeCtxValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeCtx = createContext<ThemeCtxValue>({ theme: "default", setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "default";
    apply(saved);
  }, []);

  function apply(t: Theme) {
    setThemeState(t);
    localStorage.setItem("theme", t);
    document.documentElement.dataset.theme = t === "default" ? "" : t;
  }

  return (
    <ThemeCtx.Provider value={{ theme, setTheme: apply }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
