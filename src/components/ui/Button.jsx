import clsx from 'clsx';

const BTN_VARIANTS = {
  primary: 'bg-brand text-text-inverse hover:bg-brand-active',
  outline:
    'border border-border text-text-muted hover:bg-brand-muted hover:border-border-focus hover:text-text-accent',
  ghost: 'hover:bg-surface-muted',
  soft: 'bg-button-soft text-text-inverse hover:bg-button-soft-hover',
  softDark: 'bg-surface-soft text-text-inverse hover:bg-surface-active',
};

const BTN_RADIUS = {
  xs: 'rounded-lg',
  sm: 'rounded-xl',
  md: 'rounded-2xl',
  lg: 'rounded-full',
};

const BTN_SIZES = {
  sm: 'px-[12px] py-[4px] text-xs h-fit',
  md: 'px-[16px] py-[8px] text-xs font-medium',
  lg: 'px-[20px] py-[10px] text-sm font-medium',
  xl: 'px-[20px] py-[13px] text-sm font-medium',
  iconSm: 'size-[32px]',
  iconMd: 'size-[36px]',
  iconLg: 'size-[40px]',
};

function Button({
  as: Element = 'button',
  children,
  variant = 'primary',
  rounded = 'lg',
  size = 'lg',
  fullWidth = false,
  external = false,
  className = '',
  ...props
}) {
  const baseStyle = 'flex-center gap-1 shrink-0 transition-base';
  const widthClass = fullWidth ? 'w-full' : '';
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Element
      className={clsx(
        baseStyle,
        BTN_VARIANTS[variant],
        BTN_RADIUS[rounded],
        BTN_SIZES[size],
        widthClass,
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </Element>
  );
}

export default Button;
