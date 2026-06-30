import {useRef, useEffect} from 'react';
import {motion, animate, useMotionValue, useTransform, useInView} from 'motion/react';

function getScoreColor(score) {
  if (score >= 90) return 'var(--color-point-green)';
  if (score >= 50) return 'var(--color-point-yellow)';

  return 'var(--color-point-red)';
}

function LighthouseGauge({score, label}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, score, {
      duration: 1.5,
      ease: 'easeOut',
    });

    return controls.stop;
  }, [count, score, isInView]);

  const color = getScoreColor(score);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative size-20">
        <svg viewBox="0 0 100 100" className="size-full">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            opacity="0.15"
          />

          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={
              isInView
                ? {
                    strokeDashoffset: circumference * (1 - score / 100),
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              ease: 'easeOut',
            }}
            style={{
              rotate: '-90deg',
              transformOrigin: '50px 50px',
            }}
          />
        </svg>

        <div className="absolute inset-0 flex-center">
          <motion.span className="text-xl font-bold" style={{color}}>
            {rounded}
          </motion.span>
        </div>
      </div>
      <span className="text-sm text-text-connect text-center">{label}</span>
    </div>
  );
}

export default LighthouseGauge;
