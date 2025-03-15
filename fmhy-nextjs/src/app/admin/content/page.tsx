'use client';

import { useState } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import Link from 'next/link';

export default function AdminContentEditor() {
  const { settings, updateSettings } = useSettings();
  const [currentContent, setCurrentContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPage, setSelectedPage] = useState('');
  const [saveStatus, setSaveStatus] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    // 실제 구현에서는 여기서 선택된 카테고리의 콘텐츠를 불러옵니다
    setCurrentContent(`이 카테고리의 콘텐츠를 여기에 표시합니다. (${e.target.value})`);
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(e.target.value);
    // 실제 구현에서는 여기서 선택된 페이지의 콘텐츠를 불러옵니다
    setCurrentContent(`이 페이지의 콘텐츠를 여기에 표시합니다. (${e.target.value})`);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(e.target.value);
  };

  const saveContent = () => {
    // 실제 구현에서는 여기서 콘텐츠를 저장합니다
    // 예: fetch('/api/content', { method: 'POST', body: JSON.stringify({ type, id, content }) });
    setSaveStatus('콘텐츠가 성공적으로 저장되었습니다!');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">콘텐츠 편집기</h1>
          <p className="text-xl text-gray-600">웹사이트 콘텐츠를 쉽게 편집하세요</p>
        </div>

        {/* 콘텐츠 선택 */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">카테고리 콘텐츠 편집</h2>
              <div className="mb-4">
                <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">
                  카테고리 선택
                </label>
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">카테고리 선택...</option>
                  <option value="adblocking">Adblocking / Privacy</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="streaming">Streaming</option>
                  <option value="listening">Listening</option>
                  <option value="gaming">Gaming</option>
                  <option value="reading">Reading</option>
                </select>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">페이지 콘텐츠 편집</h2>
              <div className="mb-4">
                <label htmlFor="page-select" className="block text-sm font-medium text-gray-700 mb-2">
                  페이지 선택
                </label>
                <select
                  id="page-select"
                  value={selectedPage}
                  onChange={handlePageChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">페이지 선택...</option>
                  <option value="beginners-guide">초보자 가이드</option>
                  <option value="glossary">용어집</option>
                  <option value="backups">백업</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* 콘텐츠 편집기 */}
        {(selectedCategory || selectedPage) && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedCategory ? `${selectedCategory} 카테고리 편집` : `${selectedPage} 페이지 편집`}
            </h2>
            
            <div className="mb-4">
              <label htmlFor="content-editor" className="block text-sm font-medium text-gray-700 mb-2">
                콘텐츠 (마크다운 형식 지원)
              </label>
              <textarea
                id="content-editor"
                rows={15}
                value={currentContent}
                onChange={handleContentChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md font-mono"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={saveContent}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                변경사항 저장
              </button>
              
              {saveStatus && (
                <p className="text-green-600">{saveStatus}</p>
              )}
            </div>
          </div>
        )}

        {/* 마크다운 가이드 */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">마크다운 가이드</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">기본 문법</h3>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                <p className="mb-2"># 제목 1</p>
                <p className="mb-2">## 제목 2</p>
                <p className="mb-2">### 제목 3</p>
                <p className="mb-2">**굵게**</p>
                <p className="mb-2">*기울임*</p>
                <p className="mb-2">[링크 텍스트](URL)</p>
                <p>![이미지 설명](이미지 URL)</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">목록 및 인용</h3>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                <p className="mb-2">- 항목 1</p>
                <p className="mb-2">- 항목 2</p>
                <p className="mb-2">1. 번호 항목 1</p>
                <p className="mb-2">2. 번호 항목 2</p>
                <p>> 인용문</p>
              </div>
            </div>
          </div>
        </div>

        {/* 돌아가기 버튼 */}
        <div className="flex justify-between">
          <Link href="/admin" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300">
            관리자 대시보드로 돌아가기
          </Link>
          
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
