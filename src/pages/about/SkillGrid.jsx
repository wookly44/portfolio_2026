import {SKILL_CARD} from '@/data/skills';

function SkillGrid() {
  return (
    <ul className="flex flex-wrap gap-5 mt-8 max-w-md">
      {SKILL_CARD.map(({label, icon, desc}) => (
        <li key={label} className="group flex items-center flex-col gap-3 w-28">
          <div className="size-14 flex-center border border-border-focus rounded-full bg-surface text-text-accent transition-base group-hover:scale-110">
            {icon}
          </div>
          <div className="text-center leading-tight">
            <p className="text-sm font-semibold">{label}</p>
            <span className="text-xs text-text-muted">{desc}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SkillGrid;
