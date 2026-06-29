import clsx from 'clsx';

import {NAV_LISTS} from '@/data/navigation';
import {ArrowIcon} from '@/components/ui/Icons';

import Button from '@/components/ui/Button';

function MobileMenu({active, onClose}) {
  return (
    <nav
      aria-label="Mobile navigation"
      className="animate-menu flex-1 flex flex-col justify-between bg-surface pt-5 pb-10 lg:hidden"
    >
      <ul className="flex flex-col gap-3">
        {NAV_LISTS.map(({href, label}) => (
          <li key={href}>
            <a
              href={href}
              onClick={onClose}
              className={clsx(
                'block px-7 py-2 text-md border-l-[4px] transition-base',
                active === href
                  ? 'font-semibold text-text-accent border-border-focus'
                  : 'text-text border-transparent',
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="px-7 mt-4">
        <Button as="a" onClick={onClose} href="#connect">
          Let's talk
          <ArrowIcon size="sm" />
        </Button>
      </div>
    </nav>
  );
}

export default MobileMenu;
