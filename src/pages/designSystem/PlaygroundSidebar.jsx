import clsx from 'clsx';
import {DS_COMPONENTS} from '@/data/designSystem';
import {FadeUp} from '@/components/ui/Motion';

function PlaygroundSidebar({active, onSelect}) {
  return (
    <FadeUp
      delay={0.1}
      className="grid grid-cols-2 lg:grid-cols-1 gap-1 p-2 h-fit border border-border rounded-2xl bg-brand-soft"
    >
      {DS_COMPONENTS.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={clsx(
            'flex-between gap-3 px-2 py-3 text-left text-sm rounded-xl',
            active === item.id ? 'bg-surface font-semibold text-text-accent' : 'text-text-muted',
          )}
        >
          <span
            className={clsx(
              'size-1.5 rounded-full shrink-0',
              active === item.id ? 'bg-brand' : 'bg-[var(--neutral-300)]',
            )}
          />
          <span className="flex-1">{item.name}</span>
          <span className="text-label hidden sm:block">{item.label}</span>
        </button>
      ))}
    </FadeUp>
  );
}

export default PlaygroundSidebar;
