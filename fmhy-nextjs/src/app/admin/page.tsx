'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">관리자 인터페이스</h1>
          <p className="text-xl text-gray-600">웹사이트 콘텐츠와 디자인을 쉽게 관리하세요</p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('content')}
              className={`${
                activeTab === 'content'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              콘텐츠 관리
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`${
                activeTab === 'categories'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              카테고리 관리
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`${
                activeTab === 'design'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              디자인 설정
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              일반 설정
            </button>
          </nav>
        </div>

        {/* 콘텐츠 관리 탭 */}
        {activeTab === 'content' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">콘텐츠 관리</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">링크 관리</h3>
              <p className="text-gray-600 mb-4">
                각 카테고리별 링크와 설명을 관리합니다. 링크를 추가, 수정, 삭제할 수 있습니다.
              </p>
              
              <div className="mt-4">
                <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">
                  카테고리 선택
                </label>
                <select
                  id="category-select"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="adblocking">Adblocking / Privacy</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="streaming">Streaming</option>
                  <option value="listening">Listening</option>
                  <option value="gaming">Gaming</option>
                  <option value="reading">Reading</option>
                </select>
              </div>
              
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  링크 관리 페이지로 이동
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">페이지 콘텐츠 관리</h3>
              <p className="text-gray-600 mb-4">
                초보자 가이드, 용어집 등 정적 페이지의 콘텐츠를 관리합니다.
              </p>
              
              <div className="mt-4">
                <label htmlFor="page-select" className="block text-sm font-medium text-gray-700 mb-2">
                  페이지 선택
                </label>
                <select
                  id="page-select"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="beginners-guide">초보자 가이드</option>
                  <option value="glossary">용어집</option>
                  <option value="backups">백업</option>
                </select>
              </div>
              
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  페이지 편집
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 카테고리 관리 탭 */}
        {activeTab === 'categories' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">카테고리 관리</h2>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                카테고리를 추가, 수정, 삭제하고 순서를 변경할 수 있습니다.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        순서
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        제목
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        색상
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        아이콘
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        작업
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">adblocking</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Adblocking / Privacy</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-6 w-6 rounded" style={{ backgroundColor: '#ffcccb' }}></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shield</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">편집</button>
                        <button className="text-red-600 hover:text-red-900">삭제</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ai</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Artificial Intelligence</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-6 w-6 rounded" style={{ backgroundColor: '#d0f0c0' }}></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Brain</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">편집</button>
                        <button className="text-red-600 hover:text-red-900">삭제</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  새 카테고리 추가
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 디자인 설정 탭 */}
        {activeTab === 'design' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">디자인 설정</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">색상 테마</h3>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="primary-color" className="block text-sm font-medium text-gray-700 mb-2">
                    기본 색상
                  </label>
                  <div className="flex items-center">
                    <input
                      type="color"
                      id="primary-color"
                      defaultValue="#3b82f6"
                      className="h-10 w-10 border-0 rounded p-0"
                    />
                    <input
                      type="text"
                      defaultValue="#3b82f6"
                      className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="secondary-color" className="block text-sm font-medium text-gray-700 mb-2">
                    보조 색상
                  </label>
                  <div className="flex items-center">
                    <input
                      type="color"
                      id="secondary-color"
                      defaultValue="#10b981"
                      className="h-10 w-10 border-0 rounded p-0"
                    />
                    <input
                      type="text"
                      defaultValue="#10b981"
                      className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="background-color" className="block text-sm font-medium text-gray-700 mb-2">
                    배경 색상
                  </label>
                  <div className="flex items-center">
                    <input
                      type="color"
                      id="background-color"
                      defaultValue="#ffffff"
                      className="h-10 w-10 border-0 rounded p-0"
                    />
                    <input
                      type="text"
                      defaultValue="#ffffff"
                      className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="text-color" className="block text-sm font-medium text-gray-700 mb-2">
                    텍스트 색상
                  </label>
                  <div className="flex items-center">
                    <input
                      type="color"
                      id="text-color"
                      defaultValue="#1f2937"
                      className="h-10 w-10 border-0 rounded p-0"
                    />
                    <input
                      type="text"
                      defaultValue="#1f2937"
                      className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">레이아웃 설정</h3>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="cards-per-row" className="block text-sm font-medium text-gray-700 mb-2">
                    행당 카드 수
                  </label>
                  <select
                    id="cards-per-row"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    defaultValue="3"
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="card-style" className="block text-sm font-medium text-gray-700 mb-2">
                    카드 스타일
                  </label>
                  <select
                    id="card-style"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    defaultValue="rounded"
                  >
                    <option value="rounded">둥근 모서리</option>
                    <option value="square">직각 모서리</option>
                    <option value="elevated">그림자 효과</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    id="show-icons"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="show-icons" className="ml-2 block text-sm text-gray-700">
                    카드에 아이콘 표시
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md sha<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>