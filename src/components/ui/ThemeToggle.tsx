"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "@/components/layout/ThemeScript";

/**
 * Kept deliberately simple: a single class/attribute swap on <html> plus
 * a localStorage write. No layout shift, no heavy animation — just a
 * short color-token crossfade handled globally in globals.css.
 */
export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  // Reads the theme actually applied by ThemeScript (which runs before
  // hydration). Intentionally synchronous here: syncing React state from
  // an external source (the DOM attribute) on mount is exactly this
  // effect's job, so we suppress the otherwise-useful lint rule below.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(THEME_STORAGE_KEY, "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-8 w-8 items-center justify-center rounded-sm border border-border-subtle text-text-secondary transition-colors duration-150 hover:border-border-default hover:text-text-primary"
    >
      {isLight ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}