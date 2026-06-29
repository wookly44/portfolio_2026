import {useState} from 'react';
import ThemeSwitch from '@/components/common/ThemeSwitch';

const TOKEN_GROUPS = [
  {
    label: 'Background',
    tokens: [
      {name: 'bg-bg', label: 'bg'},
      {name: 'bg-surface-muted', label: 'bg-sub'},
      {name: 'bg-brand', label: 'bg-brand'},
    ],
  },
  {
    label: 'Text',
    tokens: [
      {name: 'bg-text', label: 'text'},
      {name: 'bg-text-muted', label: 'text-sub'},
      {name: 'bg-text-accent', label: 'accent'},
    ],
  },
];

export default function ThemePreview() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="space-y-5">
      {/* toggle */}
      <div className="panel-box flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <p className="panel-boxtit">
            현재 테마: <span className="text-text-accent uppercase">{theme}</span>
          </p>
          <span className="text-xs mt-0.5 text-text-muted">
            localStorage에 저장되어 새로고침 후에도 유지됩니다
          </span>
        </div>
        <ThemeSwitch onClick={toggleTheme} variant="outline" size="iconLg" />
      </div>

      {/* token swatches */}
      <div className="grid grid-cols-2 gap-2">
        {TOKEN_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="panel-subtit mb-3">{group.label}</p>
            <div className="space-y-2">
              {group.tokens.map(({name, label}) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className={`size-7 rounded-lg border border-border shrink-0 ${name}`} />
                  <span className="text-xs text-text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
