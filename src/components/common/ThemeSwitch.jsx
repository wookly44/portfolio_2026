import {useEffect, useState} from 'react';
import {SunIcon, MoonIcon} from '@/components/ui/Icons';
import Button from '@/components/ui/Button';

function ThemeSwitch({
  variant = 'ghost',
  size = 'iconMd',
  rounded = 'sm',
  className,
  onClick,
  ...props
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    const next = !isDark;
    setIsDark(next);

    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');

    onClick?.();
  };

  return (
    <Button
      aria-label="Toggle theme"
      onClick={handleToggle}
      variant={variant}
      rounded={rounded}
      size={size}
      className={className}
      {...props}
    >
      {isDark ? <SunIcon size="sm" /> : <MoonIcon size="sm" />}
    </Button>
  );
}

export default ThemeSwitch;
