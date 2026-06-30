import {useState} from 'react';
import clsx from 'clsx';
import Button from '@/components/ui/Button';

const VARIANTS = [
  {value: 'primary', label: 'Primary'},
  {value: 'outline', label: 'Outline'},
  {value: 'soft', label: 'Soft'},
  {value: 'ghost', label: 'Ghost'},
];
const SIZES = ['sm', 'md', 'lg'];

export default function ButtonPreview() {
  const [size, setSize] = useState('md');
  const [element, setElement] = useState('button');
  const [rounded, setRounded] = useState('xs');
  const [fullWidth, setFullWidth] = useState(false);

  const toggles = [
    {
      name: 'Elements',
      isActive: element === 'a',
      onToggle: () => setElement((prev) => (prev === 'button' ? 'a' : 'button')),
    },
    {
      name: 'Rounded',
      isActive: rounded === 'lg',
      onToggle: () => setRounded((prev) => (prev === 'xs' ? 'lg' : 'xs')),
    },
    {
      name: 'FullWidth',
      isActive: fullWidth,
      onToggle: () => setFullWidth((prev) => !prev),
    },
  ];

  return (
    <div className="space-y-6">
      {/* controls */}
      <div className="panel-box">
        {/* size */}
        <div className="mb-4 flex items-center gap-2">
          <span className="panel-boxtit">SIZE</span>
          {SIZES.map((s) => (
            <Button
              key={s}
              onClick={() => setSize(s)}
              size="sm"
              rounded="xs"
              variant={size === s ? 'primary' : 'outline'}
            >
              {s}
            </Button>
          ))}
        </div>

        {/* toggle */}
        <div className="flex items-center flex-wrap gap-4">
          {toggles.map(({name, isActive, onToggle}) => (
            <button
              type="button"
              key={name}
              onClick={onToggle}
              className="flex items-center gap-1.5 cursor-pointer"
            >
              <div
                className={clsx(
                  'w-8 h-4 rounded-full transition-base relative',
                  isActive ? 'bg-brand-active' : 'bg-surface-toggle',
                )}
              >
                <div
                  className={clsx(
                    'size-3 rounded-full bg-surface transition-base absolute top-0.5',
                    isActive ? 'translate-x-4' : 'translate-x-0.5',
                  )}
                />
              </div>
              <span
                className={clsx(
                  'text-xs font-bold transition-base',
                  isActive ? 'text-text-accent' : 'text-text-disabled',
                )}
              >
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* variants demo */}
      <div className="space-y-3">
        <p className="panel-subtit">Variants</p>
        <div className="flex flex-wrap gap-2">
          {VARIANTS.map(({value, label}) => (
            <Button key={value} size={size} variant={value} rounded={rounded} fullWidth={fullWidth}>
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* code */}
      <pre className="panel-box font-mono text-xs text-text-muted">
        {[
          '<Button',
          `  element="${element}"`,
          '  variant="{variant}"',
          `  size="${size}"`,
          rounded === 'lg' && '  rounded',
          fullWidth && '  fullWidth',
          element === 'a' && '  target="_blank"',
          element === 'a' && '  rel="noopener noreferrer"',
          '/>',
        ]
          .filter(Boolean)
          .join('\n')}
      </pre>
    </div>
  );
}
