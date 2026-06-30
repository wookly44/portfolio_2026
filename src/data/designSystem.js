export const DS_COMPONENTS = [
  {
    id: 'button',
    name: 'Button',
    label: 'Variant System',
    skills: ['Props API 설계', 'variant / size 시스템', '재사용성'],
    points: [
      'variant, size, rounded, fullWidth props로 조합 가능한 구조',
      '외부 링크 여부에 따라 <a> / <button> 태그 자동 전환',
      'disabled 상태와 aria 속성 일관 처리',
    ],
  },
  {
    id: 'modal',
    name: 'Modal',
    label: 'Accessibility',
    skills: ['접근성(a11y)', 'Portal 렌더링', '키보드 인터랙션'],
    points: [
      'ESC 키 닫기 / 외부 클릭 닫기',
      '열릴 때 body scroll lock 처리',
      'size props로 sm / md / lg 레이아웃 대응',
    ],
  },
  {
    id: 'theme',
    name: 'Theme Toggle',
    label: 'Design System',
    skills: ['CSS Variables', 'Context API', 'localStorage'],
    points: [
      'CSS Variables 기반 토큰으로 전체 테마 일괄 전환',
      'Context API로 어느 컴포넌트에서나 테마 접근 가능',
      'OS 설정 감지 후 localStorage 우선순위로 저장',
    ],
  },
  {
    id: 'toast',
    name: 'Toast',
    label: 'Global State',
    skills: ['전역 상태 관리', '자동 소멸', '재사용 패턴'],
    points: [
      'Context API로 어디서든 showToast() 한 줄 호출',
      '3초 후 자동 제거 (타이머 클린업 처리)',
      'type props로 success / error / info 스타일 분기',
    ],
  },
  // {
  //   id: 'form',
  //   name: 'Form Validation',
  //   label: 'UX & Validation',
  //   skills: ['실시간 유효성 검사', '에러 상태 관리', 'UX 피드백'],
  //   points: [
  //     '이메일 형식 / 비밀번호 강도 실시간 검사',
  //     '제출 시점이 아닌 blur 이후부터 에러 표시',
  //     '입력 필드별 독립적인 에러 상태 관리',
  //   ],
  // },
  // {
  //   id: 'tabs',
  //   name: 'Tabs',
  //   label: 'State Management',
  //   skills: ['상태 기반 UI', '조건부 렌더링', '컴포넌트 합성'],
  //   points: [
  //     'activeTab 상태 하나로 전체 UI 제어',
  //     'Tabs.List + Tabs.Panel 합성 패턴 적용',
  //     '탭 전환 시 불필요한 리렌더링 최소화',
  //   ],
  // },
];
