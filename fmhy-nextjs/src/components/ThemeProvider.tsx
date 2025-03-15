'use client';

import { useEffect } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings();
  const { design } = settings;

  useEffect(() => {
    // CSS 변수를 통해 테마 적용
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', design.primaryColor);
    root.style.setProperty('--secondary-color', design.secondaryColor);
    root.style.setProperty('--background-color', design.backgroundColor);
    root.style.setProperty('--text-color', design.textColor);
    
    // 카드 스타일 클래스 적용
    document.body.className = `theme-${design.cardStyle}`;
    
    // 다크 모드 적용 (실제 구현에서는 더 복잡할 수 있음)
    if (settings.siteSettings.enableDarkMode) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.body.classList.add('dark-mode');
      }
    }
  }, [design, settings.siteSettings.enableDarkMode]);

  return <>{children}</>;
}
