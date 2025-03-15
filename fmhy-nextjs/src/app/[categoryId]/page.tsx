'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

interface CategoryData {
  id: string;
  title: string;
  description: string;
  color: string;
}

interface LinkItem {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

interface LinkSection {
  title: string;
  items: LinkItem[];
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = params;
  const [category, setCategory] = useState<CategoryData | null>(null);
  const [sections, setSections] = useState<LinkSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // 카테고리 데이터 가져오기
        const categoriesData = await import('@/data/categories.json');
        const foundCategory = categoriesData.default.find((cat: CategoryData) => cat.id === categoryId);
        
        if (foundCategory) {
          setCategory(foundCategory);
          
          // 실제 구현에서는 각 카테고리별 링크 데이터를 불러와야 함
          // 예시 데이터 생성
          const exampleSections: LinkSection[] = [
            {
              title: `${foundCategory.title} 기본 도구`,
              items: [
                {
                  title: "도구 1",
                  url: "https://example.com/tool1",
                  description: "이것은 예시 도구입니다.",
                  tags: ["무료", "오픈소스"]
                },
                {
                  title: "도구 2",
                  url: "https://example.com/tool2",
                  description: "또 다른 예시 도구입니다.",
                  tags: ["프리미엄", "추천"]
                }
              ]
            },
            {
              title: `${foundCategory.title} 추천 사이트`,
              items: [
                {
                  title: "사이트 1",
                  url: "https://example.com/site1",
                  description: "유용한 사이트입니다.",
                  tags: ["인기", "추천"]
                },
                {
                  title: "사이트 2",
                  url: "https://example.com/site2",
                  description: "또 다른 유용한 사이트입니다.",
                  tags: ["최신"]
                }
              ]
            }
          ];
          
          setSections(exampleSections);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('데이터 로드 중 오류 발생:', error);
        setLoading(false);
      }
    };

    loadData();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">카테고리를 찾을 수 없습니다</h1>
          <p className="text-lg text-gray-600 mb-8">요청하신 카테고리가 존재하지 않습니다.</p>
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 카테고리 헤더 */}
        <div className="text-center mb-16">
          <div 
            className="inline-block rounded-lg p-6 mb-6"
            style={{ backgroundColor: category.color }}
          >
            <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
          </div>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>

        {/* 피드백 버튼 */}
        <div className="flex justify-center mb-12">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            피드백 보내기
          </button>
        </div>

        {/* 섹션 */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
            <div className="space-y-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 돌아가기 버튼 */}
        <div className="flex justify-center mt-12">
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
