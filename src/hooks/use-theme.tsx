import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored) {
        setTheme(stored);
        return;
      }
    } catch (e) {
      // ignore localStorage errors
    }

    if (typeof document !== "undefined") {
      const docTheme = document.documentElement.getAttribute("data-theme") as Theme | null;
      if (docTheme) setTheme(docTheme);
    }
  }, []);

  return { theme, setTheme } as const;
}

export type { Theme };
