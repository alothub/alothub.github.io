'use client';

import { useEffect, useState } from 'react';

interface SettingsContextType {
  settings: {
    siteSettings: {
      siteName: string;
      siteDescription: string;
      enableSearch: boolean;
      enableDarkMode: boolean;
      enableFilters: boolean;
    };
    design: {
      primaryColor: string;
      secondaryColor: string;
      backgroundColor: string;
      textColor: string;
      cardsPerRow: number;
      cardStyle: string;
      showIcons: boolean;
    };
  };
  updateSettings: (newSettings: any) => void;
}

export const SettingsContext = React.createContext<SettingsContextType>({
  settings: {
    siteSettings: {
      siteName: '',
      siteDescription: '',
      enableSearch: true,
      enableDarkMode: true,
      enableFilters: true,
    },
    design: {
      primaryColor: '',
      secondaryColor: '',
      backgroundColor: '',
      textColor: '',
      cardsPerRow: 3,
      cardStyle: 'rounded',
      showIcons: true,
    },
  },
  updateSettings: () => {},
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState({
    siteSettings: {
      siteName: 'FMHY Clone',
      siteDescription: '인터넷에서 가장 큰 무료 콘텐츠 모음!',
      enableSearch: true,
      enableDarkMode: true,
      enableFilters: true,
    },
    design: {
      primaryColor: '#3b82f6',
      secondaryColor: '#10b981',
      backgroundColor: '#f9fafb',
      textColor: '#1f2937',
      cardsPerRow: 3,
      cardStyle: 'rounded',
      showIcons: true,
    },
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settingsData = await import('@/data/settings.json');
        setSettings(settingsData);
      } catch (error) {
        console.error('설정 로드 중 오류 발생:', error);
      }
    };

    loadSettings();
  }, []);

  const updateSettings = (newSettings: any) => {
    setSettings(newSettings);
    // 실제 구현에서는 여기서 API 호출을 통해 설정을 저장할 수 있습니다.
    // 예: fetch('/api/settings', { method: 'POST', body: JSON.stringify(newSettings) });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

import React from 'react';

export const useSettings = () => React.useContext(SettingsContext);
