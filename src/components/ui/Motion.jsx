import {forwardRef} from 'react';
import {motion, AnimatePresence} from 'motion/react';

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show: {transition: {staggerChildren: delay}},
});

// ─── 재사용 Motion 컴포넌트 ────────────────────────────

export function FadeUp({children, delay = 0, className = '', viewport = {}}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true, margin: '-60px', ...viewport}}
      variants={{
        hidden: fadeUp.hidden,
        show: {
          ...fadeUp.show,
          transition: {
            ...fadeUp.show.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({children, delay = 0, className = ''}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true, margin: '-60px'}}
      variants={{
        hidden: fadeLeft.hidden,
        show: {
          ...fadeLeft.show,
          transition: {
            ...fadeLeft.show.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({children, delay = 0, className = ''}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true, margin: '-60px'}}
      variants={{
        hidden: fadeRight.hidden,
        show: {
          ...fadeRight.show,
          transition: {
            ...fadeRight.show.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ModalMotion({children, className = '', ...props}, ref) {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({children, className = '', delay = 0.1, ...props}) {
  return (
    <motion.div
      variants={stagger(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, margin: '-60px'}}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({children, className = '', variants = fadeUp}) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export {AnimatePresence, motion};
