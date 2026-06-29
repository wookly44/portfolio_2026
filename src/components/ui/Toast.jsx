import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {CheckIcon} from '@/components/ui/Icons';

export function useToast(duration = 2000) {
  const [toasts, setToasts] = useState([]);

  const showToast = (toast) => {
    const id = crypto.randomUUID();

    setToasts((prev) => [...prev, {id, ...toast}]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, duration);
  };

  return {
    toasts,
    showToast,
  };
}

export default function Toast({toasts}) {
  return (
    <div className="flex flex-col items-end gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`flex items-center gap-2 rounded-xl px-4 py-3 text-text-inverse shadow-card ${toast.bg}`}
          >
            {toast.icon ?? <CheckIcon size="xs" />}
            <span className="text-sm font-medium">{toast.msg}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
