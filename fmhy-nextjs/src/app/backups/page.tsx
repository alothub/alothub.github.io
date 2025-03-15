'use client';

import Link from 'next/link';

export default function BackupsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">백업</h1>
          <p className="text-xl text-gray-600">사이트 콘텐츠의 백업 및 미러 사이트</p>
        </div>

        {/* 백업 내용 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none">
            <p className="mb-6">
              인터넷의 자유로운 정보는 종종 검열이나 삭제의 위험에 처할 수 있습니다. 이 페이지에서는 FMHY 콘텐츠의 다양한 백업 및 미러 사이트를 제공합니다.
              언제든지 메인 사이트에 접근할 수 없는 경우 이러한 백업을 통해 콘텐츠에 계속 접근할 수 있습니다.
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-8">
              <p className="text-yellow-800 font-medium flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                백업 사이트는 항상 최신 상태가 아닐 수 있습니다. 가능하면 항상 메인 사이트를 이용하세요.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">공식 백업</h2>
          
          <div className="space-y-6 mb-12">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">GitHub 백업</h3>
              <p className="text-gray-700 mb-4">GitHub에 호스팅된 FMHY 위키의 공식 백업입니다.</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                GitHub 백업 방문하기
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Rentry 백업</h3>
              <p className="text-gray-700 mb-4">Rentry.co에 호스팅된 FMHY 위키의 공식 백업입니다.</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Rentry 백업 방문하기
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">NotABug 백업</h3>
              <p className="text-gray-700 mb-4">NotABug에 호스팅된 FMHY 위키의 공식 백업입니다.</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                NotABug 백업 방문하기
              </a>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">오프라인 백업</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">PDF 백업</h3>
              <p className="text-gray-700 mb-4">전체 위키의 PDF 버전을 다운로드하여 오프라인에서 액세스할 수 있습니다.</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF 다운로드 (최종 업데이트: 2025-03-01)
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">HTML 아카이브</h3>
              <p className="text-gray-700 mb-4">전체 위키의 HTML 아카이브를 다운로드하여 로컬에서 브라우징할 수 있습니다.</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                HTML 아카이브 다운로드 (최종 업데이트: 2025-03-01)
              </a>
            </div>
          </div>
        </div>
        
        {/* 백업 생성 안내 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자신만의 백업 생성하기</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              FMHY 콘텐츠의 개인 백업을 만들고 싶다면 다음 방법을 사용할 수 있습니다:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>웹 아카이버 사용하기</strong> - HTTrack과 같은 도구를 사용하여 전체 사이트를 로컬에 저장할 수 있습니다.
              </li>
              <li className="mb-2">
                <strong>GitHub 저장소 포크하기</strong> - 공식 GitHub 저장소를 포크하여 자신만의 복사본을 만들 수 있습니다.
              </li>
              <li className="mb-2">
                <strong>브라우저 확장 프로그램 사용하기</strong> - SingleFile과 같은 브라우저 확장 프로그램을 사용하여 개별 페이지를 저장할 수 있습니다.
              </li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-medium flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                정보 보존에 기여해 주셔서 감사합니다. 백업을 공유하고 싶다면 Discord 서버에 참여하여 관리자에게 문의하세요.
              </p>
            </div>
          </div>
        </div>
        
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
