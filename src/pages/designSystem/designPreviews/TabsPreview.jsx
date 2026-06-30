import {useState} from 'react';

// 합성(Compound) 컴포넌트 패턴
function Tabs({value, onChange, children}) {
  return <div data-tabs-root>{children(value, onChange)}</div>;
}
function TabList({children}) {
  return (
    <div className="flex border-b border-[var(--color-border)] mb-4" role="tablist">
      {children}
    </div>
  );
}
function Tab({id, active, onClick, children}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => onClick(id)}
      className="px-4 py-2.5 text-sm -mb-px border-b-2 transition-ui font-medium"
      style={{
        color: active ? 'var(--color-text-accent)' : 'var(--color-text-sub)',
        borderColor: active ? 'var(--color-border-accent)' : 'transparent',
        fontWeight: active ? 600 : 400,
      }}
    >
      {children}
    </button>
  );
}
function TabPanel({id, active, children}) {
  if (!active) return null;
  return <div role="tabpanel">{children}</div>;
}

const TAB_DATA = [
  {
    id: 'props',
    label: 'Props API',
    content: {
      title: '명확한 Props API 설계',
      desc: 'value / onChange 패턴으로 외부에서 상태를 완전히 제어할 수 있는 Controlled 컴포넌트입니다. 어떤 데이터 구조에도 유연하게 연결됩니다.',
      code: '<Tabs value={tab} onChange={setTab}>\n  {(active, set) => (...)}\n</Tabs>',
    },
  },
  {
    id: 'a11y',
    label: 'Accessibility',
    content: {
      title: '키보드 & 스크린리더 지원',
      desc: 'role="tablist", role="tab", aria-selected 속성을 통해 스크린리더와 키보드 사용자 모두를 고려한 접근성 구현입니다.',
      code: '<button\n  role="tab"\n  aria-selected={active}\n  ...\n/>',
    },
  },
  {
    id: 'pattern',
    label: 'Composition',
    content: {
      title: '합성 컴포넌트 패턴',
      desc: 'Tabs + TabList + Tab + TabPanel을 조합해 유연한 레이아웃을 만들 수 있습니다. 내부 구조를 외부에서 직접 제어하는 패턴입니다.',
      code: 'Tabs.List + Tabs.Tab\n+ Tabs.Panel 조합',
    },
  },
];

export default function TabsPreview() {
  const [tab, setTab] = useState('props');
  const current = TAB_DATA.find((t) => t.id === tab);

  return (
    <Tabs value={tab} onChange={setTab}>
      {(active, set) => (
        <div>
          <TabList>
            {TAB_DATA.map((t) => (
              <Tab key={t.id} id={t.id} active={active === t.id} onClick={set}>
                {t.label}
              </Tab>
            ))}
          </TabList>

          {TAB_DATA.map((t) => (
            <TabPanel key={t.id} id={t.id} active={active === t.id}>
              <div className="space-y-3">
                <p className="font-semibold text-[var(--color-text)]">{current.content.title}</p>
                <p className="text-sm leading-relaxed text-[var(--color-text-sub)]">
                  {current.content.desc}
                </p>
                <div className="rounded-xl p-3 bg-[var(--color-bg-sub)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-sub)] whitespace-pre-wrap leading-relaxed">
                  {current.content.code}
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      )}
    </Tabs>
  );
}
