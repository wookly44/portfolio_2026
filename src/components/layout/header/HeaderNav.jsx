import clsx from 'clsx';
import {NAV_LISTS} from '@/data/navigation';

function HeaderNav({active}) {
  return (
    <nav aria-label="Desktop navigation" className="hidden lg:block">
      <ul className="flex items-center gap-0.5">
        {NAV_LISTS.map(({href, label}) => (
          <li key={href}>
            <a
              href={href}
              className={clsx(
                'block px-3.5 py-1.5 text-center rounded-full text-sm transition-base',
                active === href ? 'text-text-inverse bg-brand' : 'text-text-muted hover:text-text',
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
