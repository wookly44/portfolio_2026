import {useState, useEffect, useCallback} from 'react';
import clsx from 'clsx';

import logo_dark from '@/assets/images/logo_dark.webp';
import logo_light from '@/assets/images/logo_light.webp';

import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import MobileMenu from './MobileMenu';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile Menu
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Scroll Check
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Active
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-120px 0px -50% 0px',
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-base lg:h-fit border-b',
        scrolled ? 'border-border-glass glass' : 'border-transparent',
        menuOpen && 'min-h-dvh flex flex-col',
      )}
    >
      <div className={clsx('inner flex-between transition-base', scrolled ? 'py-3.5' : 'py-5')}>
        <a
          href="#home"
          aria-label="Go to home Section"
          className="bg-brand size-8 rounded-lg flex-center font-extrabold text-md text-text-inverse"
        >
          K
        </a>
        <HeaderNav active={active} />
        <HeaderActions menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {menuOpen && <MobileMenu active={active} onClose={closeMenu} />}
    </header>
  );
}

export default Header;
