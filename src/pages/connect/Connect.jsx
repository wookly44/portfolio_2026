import {useState} from 'react';
import clsx from 'clsx';
import {EMAIL, INFOS} from '@/data/contact';
import {MailIcon, CheckIcon, CopyIcon} from '@/components/ui/Icons';
import {FadeLeft} from '@/components/ui/Motion';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import ContactForm from './ContactForm';
import Lighthouse from './Lighthouse';

const COPY_BTN_BASE =
  'w-full rounded-lg text-text-connect flex-between px-[16px] py-[11px] border border-border-inverse bg-surface-soft';

const COPY_BTN_STATES = {
  copied: 'bg-surface-active border-[var(--alpha-white-40)] duration-[2000ms]',
  default: 'transition-base hover:border-[var(--alpha-white-40)] hover:bg-surface-active',
};

function Connect() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="connect" className="bg-bg-dark pt-section">
      <div className="inner">
        <div className="split mb-8 lg:mb-14">
          <div>
            <FadeLeft>
              <SectionHeader number="05" label="Let's Connect" variant="dark" />
              <h2 className="section-title text-text-inverse">
                Let's build something
                <span className="gradient-text">amazing together.</span>
              </h2>
              <p className="section-desc text-text-connect mb-8">
                프로젝트, 협업, 혹은 단순한 인사도 환영합니다. 언제든지 연락주세요!
              </p>
            </FadeLeft>
            <FadeLeft delay={0.15} className="flex flex-col gap-4 max-w-sm">
              <button
                onClick={copy}
                className={clsx(
                  COPY_BTN_BASE,
                  copied ? COPY_BTN_STATES.copied : COPY_BTN_STATES.default,
                )}
              >
                <span className="flex items-center gap-3 text-xs">
                  <MailIcon size="sm" className="text-text-accent" />
                  {EMAIL}
                </span>
                <span
                  className={clsx(
                    'flex items-center gap-1 text-xs transition-base',
                    copied && 'text-point-green',
                  )}
                >
                  {copied ? (
                    <>
                      <CheckIcon size="xs" />
                      복사됨
                    </>
                  ) : (
                    <>
                      <CopyIcon size="xs" />
                      복사
                    </>
                  )}
                </span>
              </button>
              {INFOS.map((info) => (
                <div
                  key={info.text}
                  className="flex items-center gap-3 px-1.5 text-xs text-text-connect"
                >
                  <info.icon size="sm" className="text-text-accent" />
                  {info.text}
                </div>
              ))}
            </FadeLeft>
          </div>
          <ContactForm />
        </div>

        <Lighthouse />
      </div>
    </section>
  );
}

export default Connect;
