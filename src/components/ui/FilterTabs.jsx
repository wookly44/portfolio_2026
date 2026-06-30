import clsx from 'clsx';
import {motion, Stagger, fadeUp} from '@/components/ui/Motion';

function FilterTabs({filters, active, onChange, className = ''}) {
  return (
    <Stagger className={clsx('flex flex-wrap gap-2', className)}>
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onChange(filter)}
          variants={fadeUp}
          className={clsx(
            'px-4 py-2 h-fit rounded-full text-sm font-medium transition-base',
            active === filter
              ? 'bg-brand-active text-text-inverse'
              : 'bg-surface border border-border text-text-muted hover:border-border-focus hover:text-text',
          )}
        >
          {filter}
        </motion.button>
      ))}
    </Stagger>
  );
}

export default FilterTabs;
