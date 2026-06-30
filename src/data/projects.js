import bandiImg from '@/assets/images/project_bandifesta.webp';
import uiLabImg from '@/assets/images/project_uiShowCase.webp';
import catchImg from '@/assets/images/project_catchMonsters.webp';
import gcovaImg from '@/assets/images/project_gcova.webp';
import toDoImg from '@/assets/images/project_ToDoList.webp';
import ktgImg from '@/assets/images/clone_ktg.webp';
import gongjuImg from '@/assets/images/clone_gongju.webp';
import bizcarImg from '@/assets/images/clone_bizcar.webp';
import dominoImg from '@/assets/images/clone_domino.webp';
import dicImg from '@/assets/images/project_dictionary.webp';
import socarImg from '@/assets/images/clone_socar.webp';

export const PROJECT_DATA = [
  {
    id: 1,
    category: 'Team Project',
    type: 'WEB APPLICATION',
    title: '대한민국 밤 산책 (bandiFesta)',
    desc: '경복궁 별빛야행 축제 소개 및 사용자 맞춤형 1:1 문의·FAQ 시스템을 탑재한 문화 축제 플랫폼',
    tags: ['React', 'JavaScript', 'Three.js', 'Tailwind CSS', 'GitHub Actions'],
    github: 'https://github.com/wookly44/bandifesta',
    live: 'https://wookly44.github.io/bandiFesta/#/main',
    image: bandiImg,
    readme: {
      overview:
        '대한민국 밤 산책은 전통 축제를 현대적인 웹 기술로 홍보하기 위해 제작된 팀 프로젝트입니다. 초기 구현 완료 후, 2026년 대대적인 성능 최적화(Performance), 전역 상태 관리 도입, 그리고 GitHub Actions 기반의 자동 배포 환경을 구축하여 완성도를 극대화했습니다.',
      features: [
        '자주하는 질문(FAQ) 실시간 검색 및 다이내믹 페이지네이션',
        '사용자별 1:1 문의 게시판 풀 CRUD (작성/조회/수정/삭제) 및 역순 정렬',
        'react-paginate 기반의 재사용 가능한 공용 페이지네이션 컴포넌트',
        'Lighthouse 기반 TBT 단축, 3D 모델 압축 및 WebP 변환을 통한 로딩 최적화',
        'GitHub Actions(deploy.yml)를 활용한 gh-pages 배포 자동화 파이프라인 구축',
      ],
      techDetail:
        'React와 JavaScript 기반의 프론트엔드 환경에서 3D 렌더링(Three.js)과 페이지네이션 라이브러리를 융합했습니다. 라우터 의존성을 줄이기 위해 useState와 createContext 기반의 상태 관리를 적용했으며, 배포 자동화와 성능 고도화를 함께 달성했습니다.',
      period: '2024.05 — 2024.06 (2026.05 성능 및 아키텍처 업데이트)',
      role: 'Frontend Developer (FAQ & 마이페이지 게시판 및 성능 최적화 담당)',
    },
  },
  {
    id: 2,
    category: 'Lab',
    type: 'WEB APPLICATION',
    title: 'interactive-ui-lab',
    badge: '단독 퍼블리싱 & UI 개발',
    period: '2026.05 – 2026.05',
    desc: 'GSAP 기반 고성능 스크롤 애니메이션 최적화 및 EmailJS API 기반의 비동기 이메일 발송 시스템을 실험하는 프론트엔드 UI 쇼케이스',
    tags: ['React', 'JavaScript', 'GSAP', 'CSS3', 'EmailJS API'],
    github: 'https://github.com/wookly44/personal-ui-showcase',
    live: 'https://wookly44.github.io/personal-ui-showcase',
    image: uiLabImg,
    readme: {
      overview:
        '웹 브라우저 환경에서 구현 가능한 고성능 인터랙션과 시각적 몰입감을 연구하고 증명하기 위해 기획된 단독 프로젝트입니다. GSAP 라이브러리를 활용한 정밀한 스크롤 연출과 함께 백엔드리스(Backendless) 환경에서의 실시간 데이터 인터랙션을 구현했습니다.',
      features: [
        'GSAP ScrollTrigger 및 Timeline 메커니즘을 융합한 유기적인 스크롤 애니메이션 구현',
        'EmailJS API 연동을 통해 새로고침 없는 비동기 폼(Form) 프로세스 및 실시간 피드백 시스템 설계',
        '기본 메일 앱 미설정 환경을 방어하는 navigator.clipboard 기반의 이메일 주소 자동 복사 내비게이션 구축',
        'Lighthouse Audit 분석을 통한 리소스 및 렌더링 최적화로 성능 지표 90점 이상 달성',
      ],
      techDetail:
        'Vite 기반 React 환경에서 CSS 파일 구조를 섹션별로 엄격히 모듈화하여 유지보수성을 확보했습니다. 외부 자극에 민감한 GSAP 애니메이션의 부드러운 스크롤 감도를 위해 별도의 유틸리티(smooth.js)를 구축하고 컴포넌트 단위의 미니멀리즘 인터페이스를 정립했습니다.',
      period: '2026.05 — 2026.05 (지속적인 최적화 및 업데이트 완료)',
      role: 'Frontend UI Developer (기획, 디자인, 인터랙션 퍼블리싱 및 성능 고도화 전담)',
    },
  },
  {
    id: 3,
    category: 'Team Project',
    type: 'WEB APPLICATION',
    title: '캐치! 수학 몬스터즈 (catchMonsters)',
    desc: '초등 수학 과정에 캐릭터 스토리텔링 요소를 결합하고, Kakao Login API 기반 유저 제어 시스템을 탑재한 디지털 교육 플랫폼',
    tags: ['React', 'JavaScript', 'Kakao API', 'Swiper', 'React Router'],
    github: 'https://github.com/wookly44/catchMonsters',
    live: 'https://wookly44.github.io/catchMonsters/',
    image: catchImg,
    readme: {
      overview:
        '초등학생들이 수학 과목을 게임처럼 흥미롭게 자기주도 학습을 할 수 있도록 기획된 팀 프로젝트입니다. 카카오 API 연동을 통한 유저 인증 체계와 컴포넌트의 노출을 제어하는 조건부 렌더링, 환경 맞춤형 탭 메뉴 로직을 설계하여 안정적인 학습 인터페이스를 구현했습니다.',
      features: [
        'Kakao Login API 및 토큰 관리를 통한 실시간 사용자 인증 상태 유지',
        '인증 토큰 기반 미로그인 유저 접근 제어(Auth Guard) 및 동적 프로필 팝업 UI 구현',
        'React Router와 useLocation/useRef를 결합한 URL 및 상태(State) 기반 2원화 탭 메뉴 시스템 설계',
        'Swiper 라이브러리를 커스텀 마이그레이션한 슬라이드 형태의 반응형 시각 자료 학습관 구축',
      ],
      techDetail:
        'Vite + React 환경에서 인증 상태에 따라 전역 Header 컴포넌트의 노출 여부를 동적으로 처리하고, window.location.href와 useRef 훅을 활용해 렌더링 직후 유저 UI가 갱신되지 않거나 초기 스타일이 누락되던 레이아웃 이슈들을 정밀하게 트러블슈팅했습니다.',
      period: '2024.07 — 2024.08 (UI/UX 탭 동선 고도화 완료)',
      role: 'Frontend Developer (인증 시스템, 게이트웨이 및 코어 레이아웃 인터랙션 담당)',
    },
  },
  {
    id: 4,
    category: 'Lab',
    type: 'WEB APPLICATION',
    title: '지코바 치킨 리뉴얼 (gcova)',
    badge: '단독 기획 & 퍼블리싱',
    period: '2024.03 – 2024.04',
    desc: '지코바 치킨의 예비 창업자를 타겟으로 브랜드 아이덴티티를 재정의하고, 데이터 통신 인프라를 연동한 가맹 홍보 사이트',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL', 'Swiper'],
    github: 'https://github.com/wookly44/gcova',
    live: 'https://gcova.vercel.app/',
    image: gcovaImg,
    readme: {
      overview:
        '지코바 치킨 브랜드를 기반으로 창업을 고민하는 핵심 고객층에게 신뢰성 있는 정보와 세련된 UI를 제공하기 위해 기획된 단독 리뉴얼 프로젝트입니다. 디자인 시스템 수립부터 프론트엔드 퍼블리싱, 로컬 DB 연동까지 아우르는 풀스택 기초 아키텍처를 검증했습니다.',
      features: [
        'Swiper 라이브러리를 적용한 메인 섹션 및 실시간 SNS 연동 피드 슬라이드 인터랙션 구현',
        '사용자 편의성을 고도화한 원클릭 상단 이동 탑(Top) 앵커 시스템 구축',
        'GNB(Global Navigation Bar) 마우스 오버 서브메뉴 트리거 및 반응형 토글 햄버거 메뉴 레이아웃 설계',
        'Node.js와 MySQL 백엔드 인프라 기반의 가맹 문의 게시글 작성 및 실시간 리스트 출력 시스템 구현',
      ],
      techDetail:
        'Figma, Photoshop, Illustrator를 아우르는 디자인 프로세스를 거쳐 웹 표준 마크업을 수행했습니다. 로컬 환경에서 MySQL 데이터베이스 및 Node.js 통신 구조를 직접 설계하여 정적인 퍼블리싱 페이지를 넘어선 동적 데이터 관리 모듈의 기초를 다졌습니다.',
      period: '2024.03 — 2024.04 (가맹 목적의 인터페이스 개편 완료)',
      role: 'UI Designer & Frontend Developer (기획, 디자인, 퍼블리싱 및 데이터베이스 연동 전담)',
    },
  },
  {
    id: 5,
    category: 'Lab',
    type: 'WEB APPLICATION',
    title: 'TO-DO LIST (캐릭터 기반 감성 디자인)',
    badge: '단독 기획 & 리팩토링',
    period: '2024.05 – 2026.04',
    desc: '핵심 CRUD 비즈니스 로직 최적화 및 캐릭터 일러스트 기반의 감성 UI/UX로 전면 리뉴얼한 할 일 관리 애플리케이션',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    github: 'https://github.com/wookly44/To-Do-List',
    live: 'https://to-do-list-one-blue-65.vercel.app/',
    image: toDoImg,
    readme: {
      overview:
        '초기 기능 중심의 복잡한 투두리스트를 사용자 경험(UX) 관점에서 전면 재설계한 프로젝트입니다. 불필요한 부가 기능을 과감히 걷어내고 핵심 데이터 흐름에 집중했으며, 친근한 캐릭터 일러스트 스타일을 입혀 시각적 완성도와 사용성을 동시에 확보했습니다.',
      features: [
        '컴포넌트 분리 설계를 기반으로 한 고성능 할 일 등록·조회·수정·삭제(CRUD) 아키텍처 구현',
        '완료 및 미완료 상태값 필터링 연동을 통한 실시간 리스트 분리 조회 기능 최적화',
        '날짜 입력 등 복잡한 인풋 프로세스를 제거하여 데이터 입력 동선 단순화 및 편의성 개선',
        '전역 CSS 구조 아키텍처 정리를 통한 스타일 중복 코드 제거 및 렌더링 효율성 향상',
      ],
      techDetail:
        'React 환경에서 상단 입력(create.js), 리스트 렌더링(lists.js), 상태 정의(data.js) 영역으로 역할을 명확히 모듈화하여 단일 책임 원칙을 준수했습니다. 리팩토링 전후의 가독성 분석을 바탕으로 UI 구조를 간결화하여 비즈니스 로직과 스타일링 레이어를 분리했습니다.',
      period: '2024.05 (초기 빌드) — 2026.04 (디자인 리뉴얼 및 코드 최적화 완료)',
      role: 'Frontend UI Developer (기획, UX 디자인 리뉴얼, 리팩토링 및 컴포넌트 아키텍처 정밀화 전담)',
    },
  },
  {
    id: 6,
    category: 'Personal',
    type: 'WEB APPLICATION',
    title: 'KT&G장학재단 클론 코딩',
    badge: '단독 웹 퍼블리싱 & UI 구현',
    period: '2024.03 – 2024.04',
    desc: 'CSS 아키텍처 분리 설계 및 keyframes 기반 고성능 인터랙션을 적용하여 웹 표준과 접근성을 검증한 3단 반응형 클론 코딩',
    tags: ['HTML5', 'CSS3', 'Vercel'],
    github: 'https://github.com/wookly44/clone_kt-g',
    live: 'https://clone-kt-g.vercel.app/',
    image: ktgImg,
    readme: {
      overview:
        '실제 운영 중인 대기업 장학재단 플랫폼을 분석하고, 시맨틱 마크업 규격에 맞춰 단독으로 재구현한 하드코딩 웹 퍼블리싱 프로젝트입니다. 모던 CSS 기술셋을 활용해 데스크톱, 태블릿, 모바일 환경에 유연하게 대응하는 반응형 그리드를 독립적으로 스터디했습니다.',
      features: [
        'Media Query 기반의 모바일·태블릿·데스크톱 디바이스별 완벽한 3단 반응형 웹 레이아웃 구현',
        'keyframes 및 transform 속성을 조합한 고성능 메인 인터랙션 및 마우스 오버(Hover) 애니메이션 빌드',
        'reset.css, common.css, style.css 단위로 스타일시트를 세분화하여 스타일 레이어 분리 구조 확립',
        'text-overflow와 유동적 데이터 길이를 고려한 텍스트 예외 처리(Ellipsis) 예외 방어 설계 적용',
      ],
      techDetail:
        '순수 HTML5와 CSS3 환경에서 UI의 재사용성을 확보하기 위해 전역 공통 클래스를 설계하고 분리 관리를 시작했습니다. 레이아웃이 무너지지 않도록 고정 크기와 가변 크기의 조화를 분석하였으며, 디바이스 전환 구간에서의 시각적 왜곡 현상을 정밀하게 리팩토링했습니다.',
      period: '2024년 상반기 (웹 표준 퍼블리싱 기본기 검증 완료)',
      role: 'Web Publisher (원본 아키텍처 분석, 구조 마크업 및 전체 반응형 스타일링 전담)',
    },
  },
  {
    id: 7,
    category: 'Personal',
    type: 'WEB APPLICATION',
    title: '공주 박물관 클론 코딩',
    badge: '단독 웹 퍼블리싱 & 인터랙션 구현',
    period: '2024.03 – 2026.04',
    desc: 'Swiper 라이브러리 의존성을 제거하고 jQuery 기반의 커스텀 슬라이드 모듈을 설계하여 인터랙션 동작 원리를 내재화한 박물관 웹 클론 프로젝트',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AOS'],
    github: 'https://github.com/wookly44/clone_gongju',
    live: 'https://clone-gongju.vercel.app/',
    image: gongjuImg,
    readme: {
      overview:
        '공주박물관의 웹 인터페이스를 정밀하게 분석하여 마크업 구조를 재구성하고, 외부 라이브러리 사용을 최소화하여 핵심 로직을 직접 구현하는 데 중점을 둔 프로젝트입니다. 특히 2026년 4월, 외부 의존성을 줄이고 성능 제어권을 확보하기 위해 Swiper 라이브러리에서 jQuery 기반 커스텀 로직으로 슬라이드 기능을 전면 재설계했습니다.',
      features: [
        'Swiper 라이브러리를 배제한 jQuery 기반 커스텀 슬라이드 모듈 구현 (슬라이드 동작 원리 내재화)',
        'AOS(Animate On Scroll) 라이브러리를 활용한 타임라인 기반 스크롤 인터랙션 고도화',
        '단일 스크립트로 다수의 슬라이드 요소를 제어하는 통합 관리 구조 설계',
        'CSS Keyframes 및 Transform 속성을 조합한 하드코딩 기반의 고성능 Hover 인터랙션 구현',
      ],
      techDetail:
        '코드의 유지보수성을 높이기 위해 파편화된 CSS 클래스 네이밍을 규칙화하고, jQuery를 활용해 슬라이드별 반복 코드를 통합 관리할 수 있는 단일 스크립트 구조로 리팩토링했습니다. 시각적 경험을 위해 AOS 라이브러리와 직접 구현한 인터랙션을 적절히 혼합하여 최적의 애니메이션 타이밍을 구성했습니다.',
      period: '2024.03 (초기 빌드) — 2026.04 (라이브러리 탈피 및 모듈화 리팩토링 완료)',
      role: 'Web Publisher (인터랙션 기획, jQuery 기반 슬라이드 엔진 설계 및 반응형 UI 구현)',
    },
  },
  {
    id: 8,
    category: 'Personal',
    type: 'WEB APPLICATION',
    title: '비즈카 클론 코딩',
    badge: '단독 웹 퍼블리싱 & SCSS 구조화',
    period: '2024.03 – 2026.03',
    desc: '정적 CSS 파이프라인을 중첩 구조의 Sass(SCSS) 아키텍처로 리팩토링하고, JavaScript 탭 모듈을 연동한 롯데렌탈 비즈카 클론 프로젝트',
    tags: ['HTML5', 'SCSS', 'Sass', 'JavaScript', 'Swiper'],
    github: 'https://github.com/wookly44/clone_bizcar',
    live: 'https://clone-bizcar.vercel.app/',
    image: bizcarImg,
    readme: {
      overview:
        '롯데렌탈의 비즈카 비즈니스 플랫폼을 모델로 삼아 상용 서비스 레벨의 내비게이션 인터페이스와 탭 전환 데이터 구조를 정밀하게 복사한 웹 퍼블리싱 프로젝트입니다. 특히 2026년 3월, 코드 유지보수성과 스타일 자원 재사용성을 극대화하기 위해 레거시 CSS 구조를 모던 SCSS 모듈 체계로 전면 리팩토링했습니다.',
      features: [
        '레거시 CSS 코드를 변수 활용 및 중첩(Nesting) 구조를 지원하는 Sass(SCSS) 아키텍처로 전체 마이그레이션',
        'JavaScript 원시 이벤트를 활용한 비동기식 데이터 탭(Tab) 메뉴 제어 모듈 구현',
        'GNB(Global Navigation Bar) 및 다차원 서브메뉴 드롭다운 인터랙션 최적화',
        'Swiper 라이브러리를 연동한 메인 비주얼 배너 영역의 반응형 슬라이더 인프라 구축',
      ],
      techDetail:
        '초기 마크업 단계를 넘어 유지보수 효율을 증대시키는 퍼블리싱 아키텍처 수립에 집중했습니다. 하드코딩된 스타일 시트 내 중복 요소를 제거하기 위해 SCSS 중첩문을 도입하여 파일 크기를 압축하고 가독성을 개선했으며, 복잡한 드롭다운 UI와 클릭 액션을 네이티브 스크립트로 분리 제어했습니다.',
      period: '2024년 상반기 (초기 퍼블리싱) — 2026.03 (SCSS 아키텍처 리팩토링 완료)',
      role: 'Web Publisher (인터페이스 분석, SCSS 아키텍처 리팩토링 및 JavaScript UI 스크립팅 전담)',
    },
  },
  {
    id: 9,
    category: 'Personal',
    type: 'WEB APPLICATION',
    title: '도미노피자 클론 코딩',
    badge: '단독 웹 퍼블리싱 & UI 인터랙션',
    period: '2024.03 – 2026.04',
    desc: '네이티브 JavaScript 기반의 아코디언, 팝업, 회전 애니메이션 모듈을 설계하고 다중 페이지 엔트리 아키텍처를 수립한 도미노피자 클론 프로젝트',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Swiper'],
    github: 'https://github.com/wookly44/clone_domino',
    live: 'https://clone-domino.vercel.app/',
    image: dominoImg,
    readme: {
      overview:
        '도미노피자 플랫폼의 고도화된 UI 컴포넌트들을 분석하고, 외부 프레임워크 없이 순수 JavaScript 프로토타입 기반의 인터랙션을 구현하는 데 집중한 퍼블리싱 프로젝트입니다. 특히 2026년 4월, 단일 구조로 묶여 있던 메인 레이어와 FAQ 레이어를 독립된 다중 페이지(Multi-Page) 엔트리로 격리하고 중심을 잡아주는 index 메인 허브 아키텍처를 리팩토링했습니다.',
      features: [
        'FAQ 페이지 내 핵심 비즈니스 로직인 네이티브 자바스크립트 기반 동적 아코디언(토글 슬라이드) 시스템 구축',
        '조건별 뷰 제어권을 확보한 레이어 팝업(Modal) 온·오프 트리거 및 전역 탭(Tab) 메뉴 제어 모듈 구현',
        '사용자 행동 흐름을 고려한 GNB 서브메뉴 드롭다운 및 CSS transform 기반 화살표 회전 인터랙션 연동',
        'Swiper 라이브러리를 바인딩한 메인 비주얼 배너 영역의 반응형 무한 슬라이더 인프라 구축',
      ],
      techDetail:
        '이벤트 리스너 기반의 동적 상태 변경을 다수 처리하며 자바스크립트 제어 주기에 대한 이해도를 높였습니다. 다중 페이지로 구조를 확장하는 과정에서 발생할 수 있는 리소스 누수를 방지하기 위해 논리적 구조를 개편하고, 사용자 동선에 최적화된 상호 교차 내비게이션 앵커 시스템을 독립적으로 배치했습니다.',
      period:
        '2024년 상반기 (초기 퍼블리싱) — 2026.04 (다중 페이지 구조화 및 엔트리 리팩토링 완료)',
      role: 'Web Publisher (인터랙션 아키텍처 분석, JavaScript 인터랙션 설계 및 다중 페이지 구조화 전담)',
    },
  },
  {
    id: 10,
    category: 'Lab',
    type: 'WEB APPLICATION',
    title: '프론트엔드 사전 (Frontend Dictionary)',
    badge: '단독 기획 & 전체 기능 구현',
    period: '2024.04 – 2024.05',
    desc: '실시간 검색 필터링 엔진과 커스텀 훅 기반의 단어 추가·수정·삭제(CRUD) 파이프라인을 구축하여 지식 관리를 자동화한 웹 애플리케이션',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: 'https://github.com/wookly44/Frontend_Dictionary',
    live: 'https://wookly44.github.io/Frontend_Dictionary/',
    image: dicImg,
    readme: {
      overview:
        '방대한 프론트엔드 개발 용어를 카테고리별로 분류하고 학습할 수 있도록 설계된 단독 웹 서비스 프로젝트입니다. 컴포넌트의 가독성과 코드 재사용성을 높이기 위해 커스텀 훅(Custom Hook) 중심의 비즈니스 로직 분리를 수행했으며, 사용자 경험을 고려한 동적 인터랙션을 다수 포함하고 있습니다.',
      features: [
        '원하는 키워드를 입력 즉시 화면에 반영하는 실시간 검색 필터링 엔진 구축',
        '커스텀 훅(hook/) 아키텍처 기반의 확장성 높은 단어 생성·조회·수정·삭제(CRUD) 모듈 설계',
        '분류 컴포넌트(sortlist.jsx)와 데이터 가공 레이어를 연동한 카테고리별 동적 필터 시스템 구현',
        'Home 뷰와 Add List 뷰 간의 유기적인 화면 상태 동기화 및 맵(map) 함수 기반의 예외 방어적 동적 렌더링',
      ],
      techDetail:
        'Vite 번들러 환경에서 복잡한 상태 관리 코드를 간결화하기 위해 데이터 레이어(data.jsx)와 유틸리티 스크립트(utils.jsx)를 독립적으로 모듈화했습니다. 개별 리스트 아이템(dicitem.jsx)과 입력 폼(write.jsx)의 결합도를 낮추어 코드 가독성을 확보했으며, 수정 및 삭제 등 민감한 동작 시 방어적 UX(확인 알림 창)를 설계했습니다.',
      period: '2024.04 — 2024.05 (지식 관리용 컴포넌트 아키텍처 검증 완료)',
      role: 'Frontend Developer (기획, 데이터 모델링, 커스텀 훅 설계 및 React 아키텍처 최적화 전담)',
    },
  },
  {
    id: 11,
    category: 'Personal',
    type: 'WEB APPLICATION',
    title: '쏘카 클론 코딩 (SOCAR)',
    badge: '단독 웹 퍼블리싱 & 컴포넌트 구조화',
    period: '2024.04 – 2024.05',
    desc: '모빌리티 플랫폼 쏘카의 메인 레이아웃을 분석하고, React의 컴포넌트 기반 아키텍처를 도입하여 레이어 독립성을 확보한 UI 리액트 클론 프로젝트',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    github: 'https://github.com/wookly44/clone_socar',
    live: 'https://clone-socar.vercel.app/',
    image: socarImg,
    readme: {
      overview:
        '국내 대표 모빌리티 서비스인 쏘카(SOCAR)의 웹 인터페이스를 정밀 분석하여, 단일 페이지 하드코딩 방식에서 탈피하고 React의 단일 책임 컴포넌트 구조로 재설계한 퍼블리싱 중심의 실험실 프로젝트입니다. 레거시 마크업 요소를 컴포넌트 단위로 분할하여 확장성을 확보하는 최적화 프로세스에 집중했습니다.',
      features: [
        'React 프레임워크 아키텍처를 활용한 쏘카 고유의 아이덴티티 메인 페이지 UI 완벽 구현',
        '유지보수 효율성과 자원 재사용성을 고려한 모듈형 컴포넌트 중심의 코드 아키텍처 설계',
        'Header, Main 비주얼 영역, Footer 구조를 독립된 레이어로 격리하여 컴포넌트 간 결합도 최소화',
        'Vercel 인프라를 연동한 빌드 파이프라인 수립 및 무중단 웹 호스팅 환경 구축',
      ],
      techDetail:
        '정적인 웹 퍼블리싱을 넘어 컴포넌트 기반 아키텍처의 이점을 이해하는 데 초점을 맞추었습니다. 대형 플랫폼의 복잡한 레이아웃을 Header, Main, Footer 등 기능별·위치별 컴포넌트 단위로 체계적으로 쪼개어 분리 관리하는 방식을 적용하고, 스타일시트의 파편화를 방지하기 위한 구조적 설계를 실험했습니다.',
      period: '2024년 상반기 (React 기반 UI 컴포넌트 아키텍처 수립 완료)',
      role: 'Frontend UI Developer (원본 인터페이스 분석, React 컴포넌트 설계 및 마크업 전담)',
    },
  },
];

export const PROJECT_FILTERS = ['All', 'Team Project', 'Lab', 'Personal'];

export const CATEGORY_ICONS = {
  'Team Project': '👥',
  'Personal': '🙋',
  'Lab': '🧪',
  'Web App': '🌐',
};
