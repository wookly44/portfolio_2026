import {useState} from 'react';
import {CheckIcon} from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

const SIZES = ['sm', 'md', 'lg'];
const INFOS = ['⌨️  ESC 키로 닫기', '🖱️  배경 클릭으로 닫기', '🔒  열리는 동안 body 스크롤 잠금'];

export default function ModalPreview() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('md');

  return (
    <div className="space-y-6">
      <div className="panel-box flex items-center gap-2">
        <span className="panel-boxtit">SIZE</span>
        {SIZES.map((s) => (
          <Button
            key={s}
            onClick={() => setSize(s)}
            size="sm"
            rounded="xs"
            variant={size === s ? 'primary' : 'outline'}
          >
            {s}
          </Button>
        ))}
      </div>

      <Button onClick={() => setOpen(true)} size="xl" rounded="sm">
        Open Modal
      </Button>

      <ul className="space-y-2">
        {INFOS.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-text-sub">
            {item}
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <strong className="flex items-center gap-1 text-xs text-point-red mb-1.5">
          <CheckIcon size="xs" /> 안내사항
        </strong>
        <p className="text-xs leading-relaxed">
          모바일 환경에서는 모달의 크기가 너비에 맞춰 자동 고정됩니다. <br />
          정확한 &nbsp;
          <span className="underline underline-offset-2 font-semibold">
            사이즈별 프리뷰(sm, md, lg)
          </span>
          는 데스크톱에서 확인이 가능합니다.
        </p>
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)} size={size} closeStyle="ghost" className="p-6">
          <h3 className="text-xl font-bold leading-tight mt-3">Modal — size: {size}</h3>
          <p className="text-sm leading-relaxed mb-5 text-text-muted mt-3">
            ESC를 누르거나 배경을 클릭해 닫아보세요.
            <br />
            열려있는 동안 스크롤이 잠겨 있습니다.
          </p>
          <div className="flex gap-2.5 justify-end">
            <Button onClick={() => setOpen(false)} variant="outline" rounded="sm">
              취소
            </Button>
            <Button onClick={() => setOpen(false)} rounded="sm">
              확인
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
