'use client';

import { SettingsProvider } from '@/contexts/SettingsContext';
import ThemeProvider from '@/components/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SettingsProvider>
  );
}
