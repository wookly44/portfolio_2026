import {GithubIcon, DownIcon, MapPinIcon, ClockIcon} from '@/components/ui/Icons';

export const EMAIL = 'keumju0409@gmail.com';

export const INFOS = [
  {icon: MapPinIcon, text: 'Seoul, South Korea'},
  {icon: ClockIcon, text: 'Available for freelance & full-time'},
];

export const LIGHTHOUSE = [
  {score: 82, label: 'Performance'},
  {score: 96, label: 'Accessibility'},
  {score: 92, label: 'SEO'},
  {score: 96, label: 'Best Practices'},
];

export const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    href: 'https://github.com/wookly44',
    label: 'Github',
    isExternal: true,
  },
  {
    icon: DownIcon,
    href: '/resume.pdf',
    label: 'Resume',
    isExternal: true,
  },
];
