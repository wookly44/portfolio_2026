import {TECH_CARD} from '@/data/skills';
import {Stagger, StaggerItem} from '@/components/ui/Motion';
import Badge from '@/components/ui/Badge';

function TechStack() {
  return (
    <Stagger
      delay={0.07}
      className="flex flex-col gap-6 border border-border rounded-2xl bg-surface-panel p-6 lg:p-8"
    >
      <h3 className="text-sm font-bold tracking-widest text-text-accent">TECH STACK</h3>
      {TECH_CARD.map(({group, items}) => (
        <StaggerItem key={group}>
          <p className="text-xs text-text-muted font-medium mb-3">{group}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {items.map((item) => (
              <Badge key={item.name} variant="secondary" rounded="sm" fullWidth>
                <span aria-hidden="true">{item.emoji}</span>
                {item.name}
              </Badge>
            ))}
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default TechStack;
