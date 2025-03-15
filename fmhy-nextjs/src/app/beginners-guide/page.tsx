'use client';

import Link from 'next/link';

export default function BeginnersGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">초보자 가이드</h1>
          <p className="text-xl text-gray-600">무료 콘텐츠 세계에 오신 것을 환영합니다</p>
        </div>

        {/* 가이드 내용 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">광고 차단하기</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              무료 콘텐츠 사이트는 종종 광고, 트래커 및 기타 불필요한 요소들을 포함하고 있습니다. 
              이러한 요소들은 유해할 수 있으며, 원치 않는 페이지나 가짜 다운로드 버튼으로 연결될 수 있습니다.
            </p>
            
            <p className="mb-4">
              진짜 다운로드 버튼은 일반적으로 작고 사이트 디자인과 일치하는 반면, 가짜 버튼은 크고 눈에 띄는 경우가 많습니다.
              이러한 요소들을 구분하기 어려울 수 있으므로 항상 광고 차단기를 사용하는 것이 중요합니다.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">브라우저용 추천 광고 차단기</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>uBlock Origin</strong> - 가장 효율적인 광고 차단 확장 프로그램
              </li>
              <li className="mb-2">
                <strong>AdGuard</strong> - 프리미엄 기능이 있는 고급 광고 차단기
              </li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                여러 일반 광고 차단기(예: uBlock Origin과 AdGuard)를 동시에 사용하면 충돌이 발생할 수 있습니다. 
                SponsorBlock과 같은 특수 도구와 함께 사용하는 것은 괜찮습니다.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">브라우저 선택하기</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              안전한 브라우징 경험을 위해 적절한 브라우저를 선택하는 것이 중요합니다.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">추천 브라우저</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>Firefox</strong> - 개인 정보 보호 기능이 뛰어나고 확장성이 좋은 브라우저
              </li>
              <li className="mb-2">
                <strong>Brave</strong> - 내장 광고 차단 기능이 있는 프라이버시 중심 브라우저
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">안전한 다운로드</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              파일을 다운로드할 때는 항상 주의해야 합니다. 다음 팁을 따르세요:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                신뢰할 수 있는 출처에서만 다운로드하세요.
              </li>
              <li className="mb-2">
                다운로드하기 전에 파일 크기와 형식을 확인하세요.
              </li>
              <li className="mb-2">
                의심스러운 파일은 바이러스 검사를 실행하세요.
              </li>
              <li className="mb-2">
                가능하면 공식 사이트나 검증된 미러 사이트를 이용하세요.
              </li>
            </ul>
          </div>
        </div>

        {/* 카테고리 탐색 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">카테고리 탐색하기</h2>
          
          <p className="text-gray-600 mb-6">
            FMHY는 다양한 카테고리로 구성되어 있습니다. 관심 있는 분야를 선택하여 탐색해보세요:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/adblocking" className="block p-4 rounded-lg bg-red-100 hover:bg-red-200 transition-colors">
              <h3 className="font-semibold text-gray-900">광고 차단 / 개인정보</h3>
              <p className="text-sm text-gray-600">광고, 트래커 및 기타 불필요한 요소 차단하기</p>
            </Link>
            
            <Link href="/streaming" className="block p-4 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
              <h3 className="font-semibold text-gray-900">스트리밍</h3>
              <p className="text-sm text-gray-600">영화, TV 프로그램 스트리밍 및 다운로드</p>
            </Link>
            
            <Link href="/gaming" className="block p-4 rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors">
              <h3 className="font-semibold text-gray-900">게임</h3>
              <p className="text-sm text-gray-600">게임 다운로드 및 에뮬레이션</p>
            </Link>
            
            <Link href="/reading" className="block p-4 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="font-semibold text-gray-900">독서</h3>
              <p className="text-sm text-gray-600">책, 만화, 잡지 등 무료로 읽기</p>
            </Link>
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
