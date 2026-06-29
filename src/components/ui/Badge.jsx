import clsx from 'clsx';

const SIZES = {
  sm: 'px-2.5 py-0.5 text-label',
  md: 'px-3 py-1.5 text-xs',
  lg: 'px-2.5 py-2.5 text-[13px]',
};

const STYLES = {
  default: 'bg-brand-soft text-text-accent',
  primary: 'bg-brand text-text-inverse',
  secondary: 'border border-border transition-base hover:bg-brand-muted hover:border-border-focus',
  outline: 'text-text-muted border border-border',
  soft: 'bg-surface-muted text-text-muted',
};

const RADIUS = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-full',
};

function Badge({
  size = 'lg',
  variant = 'default',
  rounded = 'lg',
  fullWidth = false,
  className,
  children,
  ...props
}) {
  const baseStyle = 'flex-center gap-1 font-medium';
  const widthClass = fullWidth ? 'w-full' : 'w-fit';

  return (
    <span
      className={clsx(
        baseStyle,
        SIZES[size],
        STYLES[variant],
        RADIUS[rounded],
        widthClass,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
