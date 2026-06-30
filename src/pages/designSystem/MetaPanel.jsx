import clsx from 'clsx';
import {StaggerItem} from '@/components/ui/Motion';

// 색상 매핑
const SKILL_COLORS = {
  '접근성(a11y)': 'bg-[#ede9fe] text-[#7c3aed]',
  '상태 기반 UI': 'bg-[#fce7f3] text-[#be185d]',
  'CSS Variables': 'bg-[#e0f2fe] text-[#0369a1]',
  '재사용성': 'bg-[#d1fae5] text-[#065f46]',
  '전역 상태 관리': 'bg-[#fef3c7] text-[#92400e]',
  'UX 피드백': 'bg-[#ffe4e6] text-[#9f1239]',
};

function MetaPanel({item}) {
  return (
    <StaggerItem className="border-b lg:border-b-0 lg:border-r border-border p-5 space-y-4">
      <div>
        <h3 className="card-tit">{item.name}</h3>
        <p className="card-type mt-1">{item.label}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {item.skills?.map((skill) => (
          <span
            key={skill}
            className={clsx(
              'px-2.5 py-0.5 rounded-full text-label font-semibold',
              SKILL_COLORS[skill] ? SKILL_COLORS[skill] : 'bg-brand-soft text-text-accent',
            )}
          >
            {skill}
          </span>
        ))}
      </div>
      <ul className="space-y-2.5">
        {item.points.map((p, i) => (
          <li key={i} className="flex gap-2 max-w-full card-txt">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
            {p}
          </li>
        ))}
      </ul>
    </StaggerItem>
  );
}

export default MetaPanel;
