const THEME_STORAGE_KEY = "theme";

/**
 * Runs synchronously in <head>, before hydration, so the correct theme
 * is applied on first paint. Dark is the default per the design system —
 * we only switch to light if the user explicitly chose it before.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {}
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
}

export { THEME_STORAGE_KEY };