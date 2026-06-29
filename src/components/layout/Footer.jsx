import {FadeUp} from '@/components/ui/Motion';
import {SOCIAL_LINKS} from '@/data/contact';
import Button from '@/components/ui/Button';

function Footer() {
  return (
    <footer className="bg-bg-dark pt-8 pb-section">
      <div className="inner">
        <div className="flex items-center gap-5 flex-col md:flex-row md:justify-between">
          <FadeUp className="text-text-muted text-sm">
            © 2026 Keumju Kim. All rights reserved.
          </FadeUp>
          <FadeUp delay={0.1} className="flex gap-3">
            {SOCIAL_LINKS.map((list) => {
              const IconComponent = list.icon;

              return (
                <Button
                  key={list.label}
                  as="a"
                  href={list.href}
                  variant="softDark"
                  rounded="md"
                  size="iconLg"
                  aria-label={list.label}
                  external={list.isExternal ? true : false}
                  className="hover:scale-110"
                >
                  <IconComponent />
                </Button>
              );
            })}
          </FadeUp>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
