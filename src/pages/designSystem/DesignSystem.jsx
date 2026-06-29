import {useState} from 'react';
import {DS_COMPONENTS} from '@/data/designSystem';
import {FadeLeft, FadeUp} from '@/components/ui/Motion';

import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import PlaygroundSidebar from './PlaygroundSidebar';
import PlaygroundPanel from './PlaygroundPanel';

function DesignSystem() {
  const [active, setActive] = useState('button');

  const current = DS_COMPONENTS.find((item) => item.id === active);

  return (
    <section id="systems" className="section-py">
      <div className="inner">
        {/* Header */}
        <SectionHeader number="04" label="Component System" />
        <div className="split mb-10">
          <FadeLeft>
            <h2 className="section-title">Design System</h2>
            <p className="section-desc">
              실제 서비스에서 사용 가능한 수준으로 설계한 컴포넌트 라이브러리입니다.
              <br />
              접근성, 상태 관리, 재사용성을 중심으로 구현했습니다.
            </p>
          </FadeLeft>
          <FadeUp className="flex lg:justify-end flex-wrap gap-2 h-fit">
            {['재사용 가능', '접근성 고려', '상태 기반 설계'].map((tag) => (
              <Badge variant="secondary" size="md" key={tag} className="bg-surface-muted ">
                {tag}
              </Badge>
            ))}
          </FadeUp>
        </div>
        {/* Playground */}
        <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:min-h-[600px]">
          <PlaygroundSidebar active={active} onSelect={setActive} />
          <PlaygroundPanel item={current} />
        </div>
      </div>
    </section>
  );
}

export default DesignSystem;
