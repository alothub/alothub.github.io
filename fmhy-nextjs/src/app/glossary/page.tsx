'use client';

import Link from 'next/link';

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">용어집</h1>
          <p className="text-xl text-gray-600">무료 콘텐츠 세계의 용어들을 알아보세요</p>
        </div>

        {/* 용어집 내용 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🏴‍☠️</span> 일반 용어
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">DDL (Direct Download Link)</h3>
                <p className="text-gray-700">토렌트 없이 서버에서 직접 파일을 다운로드하는 링크입니다. 일반적으로 더 안전하지만 다운로드 속도가 제한될 수 있습니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Freemium</h3>
                <p className="text-gray-700">기본 기능은 무료로 제공하지만 고급 기능이나 추가 콘텐츠에는 비용을 청구하는 비즈니스 모델입니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Paywall</h3>
                <p className="text-gray-700">콘텐츠에 접근하기 위해 결제를 요구하는 시스템입니다. 많은 뉴스 사이트와 학술 저널에서 사용됩니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">VPN (Virtual Private Network)</h3>
                <p className="text-gray-700">인터넷 연결을 암호화하고 IP 주소를 숨겨 개인 정보를 보호하고 지역 제한을 우회할 수 있게 해주는 서비스입니다.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📚</span> 도서/만화/웹툰 용어
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">EPUB</h3>
                <p className="text-gray-700">전자책을 위한 개방형 파일 형식으로, 다양한 기기와 소프트웨어에서 호환됩니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">CBZ/CBR</h3>
                <p className="text-gray-700">디지털 만화를 위한 파일 형식으로, 각각 ZIP과 RAR 압축 형식을 기반으로 합니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Scanlation</h3>
                <p className="text-gray-700">팬들이 외국어로 된 만화를 스캔하고 번역하여 배포하는 과정입니다.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🎬</span> 영화/TV/애니메이션 용어
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">CAM</h3>
                <p className="text-gray-700">영화관에서 카메라로 촬영한 영화 릴리스로, 일반적으로 품질이 매우 낮습니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">WEB-DL</h3>
                <p className="text-gray-700">스트리밍 서비스에서 직접 추출한 디지털 릴리스로, 일반적으로 좋은 품질을 제공합니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Bluray/REMUX</h3>
                <p className="text-gray-700">블루레이 디스크에서 추출한 최고 품질의 릴리스입니다. REMUX는 재인코딩 없이 원본 비디오/오디오 스트림을 새 컨테이너에 담은 것입니다.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🧲</span> 토렌트 용어
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Seed/Leech</h3>
                <p className="text-gray-700">Seed는 파일 전체를 가지고 있어 다른 사람에게 공유하는 사용자이고, Leech는 파일을 다운로드 중인 사용자입니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Ratio</h3>
                <p className="text-gray-700">업로드한 데이터와 다운로드한 데이터의 비율로, 많은 프라이빗 트래커에서 중요한 지표입니다.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Tracker</h3>
                <p className="text-gray-700">피어(사용자)들을 연결해주는 서버로, 토렌트 파일에 대한 정보를 관리합니다.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Magnet Link</h3>
                <p className="text-gray-700">토렌트 파일을 직접 다운로드하지 않고도 콘텐츠를 공유할 수 있게 해주는 URI 스키마입니다.</p>
              </div>
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
