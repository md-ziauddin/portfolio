import { useState, useEffect, useCallback } from 'react';

const THEME_STORAGE_KEY = 'ziadev-blueprint-theme';

/**
 * Custom hook managing the Dual-Theme "Tactile Engineering Blueprint" design system:
 * - 'blueprint' (Default): Warm #FAF8F5 drafting paper & #141413 ink
 * - 'telemetry': #0B0D10 dark terminal telemetry canvas
 *
 * Persists user preference across Gatsby SSR routes (Home, Blog/MDX, Archive).
 */
export default function useBlueprintTheme(defaultMode = 'blueprint') {
  const [themeMode, setThemeMode] = useState(defaultMode);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'blueprint' || saved === 'telemetry') {
        setThemeMode(saved);
      }
    } catch (e) {
      // Ignore storage access errors in restricted iframes
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const isDark = themeMode === 'telemetry';
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const next = prev === 'blueprint' ? 'telemetry' : 'blueprint';
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch (e) {
          // Ignore storage errors
        }
      }
      return next;
    });
  }, []);

  return {
    themeMode,
    isDark: themeMode === 'telemetry',
    setThemeMode,
    toggleTheme
  };
}
