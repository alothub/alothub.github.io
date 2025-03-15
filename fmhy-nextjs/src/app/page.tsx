'use client';

import { useEffect, useState } from 'react';
import CategoryCard from '@/components/ui/CategoryCard';
import { LucideIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// 동적으로 아이콘 불러오기
const iconComponents: { [key: string]: LucideIcon } = {};
const iconNames = [
  'Shield', 'Brain', 'Film', 'Music', 'Gamepad', 'Book', 
  'Download', 'Share', 'GraduationCap', 'Smartphone', 
  'Terminal', 'Globe', 'Package'
];

// 메인 페이지 컴포넌트
export default function Home() {
  const [categories, setCategories] = useState<any[]>([]);
  const [icons, setIcons] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);

  // 카테고리 데이터와 아이콘 로드
  useEffect(() => {
    const loadData = async () => {
      try {
        // 카테고리 데이터 가져오기
        const categoriesData = await import('@/data/categories.json');
        setCategories(categoriesData.default);
        
        // 아이콘 동적 로드
        const iconPromises = iconNames.map(async (name) => {
          const icon = await import(`lucide-react/dist/esm/icons/${name.toLowerCase()}`);
          return { name, icon: icon.default };
        });
        
        const loadedIcons = await Promise.all(iconPromises);
        const iconMap: { [key: string]: any } = {};
        loadedIcons.forEach(({ name, icon }) => {
          iconMap[name] = icon;
        });
        
        setIcons(iconMap);
        setLoading(false);
      } catch (error) {
        console.error('데이터 로드 중 오류 발생:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-blue-400 mb-4">freemediaheckyeah</h1>
          <p className="text-xl text-gray-600 mb-8">인터넷에서 가장 큰 무료 콘텐츠 모음!</p>
          
          {/* 주요 링크 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/beginners-guide" className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors">
              초보자 가이드 보기
            </Link>
            <Link href="/posts" className="bg-green-200 hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors">
              게시물
            </Link>
            <Link href="/contribute" className="bg-red-200 hover:bg-red-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors">
              기여하기
            </Link>
            <Link href="/discord" className="bg-indigo-200 hover:bg-indigo-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors">
              Discord
            </Link>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">이 페이지들을 둘러보세요 ✨</h2>
        </div>

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = icons[category.icon];
            return (
              <div key={category.id}>
                <CategoryCard
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  color={category.color}
                  icon={IconComponent ? <IconComponent size={24} /> : null}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
