import {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {CloseIcon} from '@/components/ui/Icons';
import {ModalMotion} from '@/components/ui/Motion';
import Button from '@/components/ui/Button';

const MODAL_SIZES = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

const MODAL_STYLES = {
  backdrop: 'fixed inset-0 z-50 size-full flex-center bg-[var(--alpha-black-50)] backdrop-blur-sm',
  box: 'relative rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden mx-2 w-full',
  close: 'absolute top-4 right-4 z-10',
  scroll: 'overflow-y-auto max-h-[80vh]',
};

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

function Modal({size = 'md', closeStyle = 'soft', scrollable, className, children, onClose}) {
  const boxRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // 모달 열릴 때 첫 번째 포커스 가능 요소로 포커스 이동
    const firstFocusable = boxRef.current?.querySelectorAll(FOCUSABLE)[0];
    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // focus trap
      if (e.key === 'Tab') {
        const focusables = Array.from(boxRef.current?.querySelectorAll(FOCUSABLE) ?? []);
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={MODAL_STYLES.backdrop} onClick={onClose} role="presentation">
      <ModalMotion
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-label="모달"
        className={clsx(
          MODAL_STYLES.box,
          MODAL_SIZES[size],
          scrollable && MODAL_STYLES.scroll,
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant={closeStyle}
          rounded="lg"
          size="iconMd"
          className={MODAL_STYLES.close}
          onClick={onClose}
          aria-label="모달 닫기"
        >
          <CloseIcon />
        </Button>
        {children}
      </ModalMotion>
    </div>
  );
}

export default Modal;
