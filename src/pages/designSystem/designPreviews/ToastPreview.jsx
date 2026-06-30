import Toast, {useToast} from '@/components/ui/Toast';

const TOAST_TYPES = [
  {
    type: 'success',
    label: 'Success',
    icon: '✓',
    bg: 'bg-point-green',
    msg: '저장이 완료되었습니다',
  },
  {
    type: 'error',
    label: 'Error',
    icon: '✕',
    bg: 'bg-point-red',
    msg: '오류가 발생했습니다',
  },
  {
    type: 'info',
    label: 'Info',
    icon: 'ℹ',
    bg: 'bg-point-yellow',
    msg: '업데이트가 있습니다',
  },
];

export default function ToastPreview() {
  const {toasts, showToast} = useToast();

  return (
    <div className="space-y-5">
      <p className="text-xs text-text-muted">
        type props로 스타일을 분기하고, 3초 후 자동 제거됩니다.
        <br />
        여러 개의 Toast가 동시에 표시됩니다.
      </p>

      <div className="flex flex-wrap gap-2.5">
        {TOAST_TYPES.map((toast) => (
          <button
            key={toast.type}
            onClick={() => showToast(toast)}
            className={`rounded-lg px-[16px] py-[8px] text-xs font-medium text-text-inverse ${toast.bg}`}
          >
            {toast.label}
          </button>
        ))}
      </div>

      <div className="relative rounded-lg border border-border overflow-hidden h-[160px]">
        <p className="p-3 text-xs text-text-muted">미리보기</p>
        <div className="absolute right-3 bottom-3">
          <Toast toasts={toasts} />
        </div>
      </div>
    </div>
  );
}
