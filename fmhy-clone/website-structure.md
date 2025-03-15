# FMHY 클론 웹사이트 구조 설계

## 1. 전체 웹사이트 구조

### 1.1 페이지 구조
- **메인 페이지**: 모든 카테고리 카드가 표시되는 홈페이지
- **카테고리 페이지**: 각 주제별 상세 콘텐츠 페이지 (Adblocking, Streaming, Gaming 등)
- **초보자 가이드**: 사이트 이용 방법에 대한 안내 페이지
- **용어집(Glossary)**: 관련 용어 설명 페이지
- **백업**: 사이트 백업 관련 정보 페이지
- **에코시스템**: 관련 서비스 및 도구 페이지
- **게시물(Posts)**: 최신 업데이트 및 공지사항 페이지
- **기여하기(Contribute)**: 사이트 기여 방법 안내 페이지

### 1.2 네비게이션 구조
- **상단 네비게이션 바**:
  - 로고(FMHY)
  - 검색 버튼
  - 용어집 링크
  - 백업 링크
  - 에코시스템 드롭다운
  - 추가 메뉴 버튼

- **사이드바 네비게이션**:
  - Wiki 섹션 (모든 카테고리 링크)
  - Tools 섹션 (도구 카테고리 링크)

## 2. 기술 스택

### 2.1 프론트엔드
- **Next.js**: React 기반 프레임워크
- **Tailwind CSS**: 스타일링
- **React Icons**: 아이콘 라이브러리
- **NextUI**: UI 컴포넌트 라이브러리

### 2.2 데이터 관리
- **JSON 파일**: 모든 콘텐츠 데이터를 JSON 파일로 관리하여 쉽게 수정 가능
- **Local Storage**: 사용자 설정 저장

## 3. 커스터마이징 가능한 요소

### 3.1 콘텐츠 커스터마이징
- **카테고리 관리**: JSON 파일을 통해 카테고리 추가/수정/삭제 가능
- **링크 관리**: 각 카테고리별 링크 목록 JSON 파일로 관리
- **설명 텍스트**: 모든 설명 텍스트 수정 가능

### 3.2 디자인 커스터마이징
- **색상 테마**: 각 카테고리별 색상 설정 가능
- **아이콘**: 카테고리 및 기능별 아이콘 변경 가능
- **폰트**: 글꼴 스타일 변경 가능
- **레이아웃**: 카드 배치 및 크기 조정 가능

### 3.3 기능 커스터마이징
- **검색 기능**: 검색 범위 및 방식 설정 가능
- **정렬 옵션**: 콘텐츠 정렬 방식 설정 가능
- **필터 옵션**: 콘텐츠 필터링 옵션 설정 가능

## 4. 파일 구조

```
fmhy-clone/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── category-icons/
│   │   └── backgrounds/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── page.js (메인 페이지)
│   │   ├── layout.js (전체 레이아웃)
│   │   ├── beginners-guide/
│   │   ├── glossary/
│   │   ├── backups/
│   │   ├── ecosystem/
│   │   ├── posts/
│   │   ├── contribute/
│   │   └── [category]/ (동적 카테고리 페이지)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js
│   │   │   ├── Sidebar.js
│   │   │   └── Footer.js
│   │   ├── ui/
│   │   │   ├── CategoryCard.js
│   │   │   ├── LinkCard.js
│   │   │   ├── SearchBar.js
│   │   │   └── ThemeToggle.js
│   │   └── admin/
│   │       ├── CategoryEditor.js
│   │       ├── LinkEditor.js
│   │       └── ThemeEditor.js
│   ├── data/
│   │   ├── categories.json
│   │   ├── links/
│   │   │   ├── adblocking.json
│   │   │   ├── streaming.json
│   │   │   └── ... (각 카테고리별 JSON 파일)
│   │   └── settings.json
│   ├── hooks/
│   │   └── useCustomization.js
│   ├── lib/
│   │   ├── utils.js
│   │   └── constants.js
│   └── styles/
│       └── globals.css
├── .env
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 5. 데이터 구조 예시

### 5.1 카테고리 데이터 (categories.json)
```json
[
  {
    "id": "adblocking",
    "title": "Adblocking / Privacy",
    "description": "Learn how to block ads, trackers and other nasty things.",
    "icon": "Shield",
    "color": "#ffcccb",
    "order": 1
  },
  {
    "id": "ai",
    "title": "Artificial Intelligence",
    "description": "Explore the world of AI and machine learning.",
    "icon": "Brain",
    "color": "#d0f0c0",
    "order": 2
  },
  ...
]
```

### 5.2 링크 데이터 (adblocking.json)
```json
{
  "categoryId": "adblocking",
  "sections": [
    {
      "title": "Adblocking",
      "items": [
        {
          "title": "uBlock Origin",
          "url": "https://github.com/gorhill/uBlock",
          "description": "Efficient blocker add-on for various browsers",
          "tags": ["browser", "extension"]
        },
        {
          "title": "AdGuard",
          "url": "https://adguard.com/",
          "description": "Adblocker with advanced features",
          "tags": ["premium", "software"]
        },
        ...
      ]
    },
    {
      "title": "Privacy Tools",
      "items": [
        ...
      ]
    }
  ]
}
```

### 5.3 설정 데이터 (settings.json)
```json
{
  "siteName": "FMHY Clone",
  "description": "The largest collection of free stuff on the internet!",
  "theme": {
    "primary": "#3b82f6",
    "secondary": "#10b981",
    "background": "#ffffff",
    "text": "#1f2937"
  },
  "layout": {
    "cardsPerRow": 3,
    "showIcons": true,
    "cardStyle": "rounded"
  },
  "features": {
    "enableSearch": true,
    "enableDarkMode": true,
    "enableFilters": true
  }
}
```

## 6. 커스터마이징 인터페이스

사용자가 코딩 지식 없이도 웹사이트를 쉽게 커스터마이징할 수 있도록 관리자 인터페이스를 제공합니다:

### 6.1 콘텐츠 관리
- 카테고리 추가/수정/삭제
- 링크 추가/수정/삭제
- 설명 텍스트 수정

### 6.2 디자인 관리
- 색상 테마 설정
- 아이콘 변경
- 레이아웃 조정

### 6.3 설정 관리
- 사이트 기본 정보 설정
- 기능 활성화/비활성화
- 레이아웃 옵션 설정

모든 변경사항은 JSON 파일에 자동으로 저장되며, 웹사이트에 즉시 반영됩니다.
