import {ArrowIcon, MenuIcon, CloseIcon} from '@/components/ui/Icons';
import ThemeSwitch from '@/components/common/ThemeSwitch';
import Button from '@/components/ui/Button';

function HeaderActions({menuOpen, toggleMenu}) {
  return (
    <div className="flex items-center gap-2">
      <ThemeSwitch className="border border-border lg:border-none" />
      <div className="hidden lg:flex">
        <Button
          as="a"
          href="#connect"
          size="md"
          className="hover-lift hover:shadow-button h-[36px]"
        >
          Let's talk
          <ArrowIcon size="sm" />
        </Button>
      </div>
      <Button
        variant="outline"
        rounded="sm"
        size="iconMd"
        aria-label="메뉴 열기/닫기"
        onClick={toggleMenu}
        className="lg:hidden"
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </div>
  );
}

export default HeaderActions;
