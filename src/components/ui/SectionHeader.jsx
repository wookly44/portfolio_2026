import {FadeLeft} from '@/components/ui/Motion';

export default function SectionHeader({number, label, variant = 'light'}) {
  const buttonVariant = variant === 'dark' ? 'text-text-inverse' : 'text-text-muted';

  return (
    <FadeLeft className="flex items-center gap-3 section-label mb-10 text-sm">
      <span className={buttonVariant}>{number}</span>
      <div className="w-px h-3.5 bg-border" />
      <span className="text-text-accent">{label}</span>
    </FadeLeft>
  );
}
