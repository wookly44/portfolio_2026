import {useRef, useCallback} from 'react';
import {motion, useMotionValue, useSpring, useTransform} from 'motion/react';
import {ArrowIcon} from '@/components/ui/Icons';
import GlitchText from './GlitchText';
import mainImg from '@/assets/images/main.webp';

const SKILL_LIST = ['Frontend Develop', 'Web Publishing', 'UI•UX Design'];
const SPRING_CONFIG = {damping: 26, stiffness: 125, mass: 0.75};

export default function Home() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);

  const windowX = useTransform(springX, [0, 1], [-20, 20]);
  const windowY = useTransform(springY, [0, 1], [-20, 20]);

  const handleMouseMove = useCallback(
    (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="h-dvh relative overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 배경 격자 그리드 */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(128,128,128,1) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(128,128,128,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="inner split h-full relative text-text italic text-center">
        {/* 타이틀 및 스킬셋 목록 */}
        <div className="h-full flex-center flex-col z-1">
          <motion.p
            className="text-5xl font-light opacity-80"
            initial={{opacity: 0, x: -24}}
            animate={{opacity: 0.8, x: 0}}
            transition={{delay: 0.1, duration: 0.5}}
          >
            2026
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mt-1"
            initial={{opacity: 0, x: -24}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.2, duration: 0.5}}
          >
            <span className="text-point-pink">Personal</span> Portfolio.
          </motion.h1>

          <motion.ul
            className="mt-8 flex flex-col gap-4 text-2xl font-light"
            initial={{opacity: 0}}
            animate={{opacity: 0.9}}
            transition={{delay: 0.4, duration: 0.5}}
          >
            {SKILL_LIST.map((skill) => (
              <li key={skill} className="h-9 tracking-wide">
                <GlitchText text={skill} />
              </li>
            ))}
          </motion.ul>
        </div>

        {/* 3D 패럴랙스 메인 이미지 */}
        <motion.div
          style={{x: windowX, y: windowY}}
          className="absolute -bottom-30 -right-10 lg:-right-30 w-full max-w-[700px] pointer-events-none"
          initial={{opacity: 0, x: 40}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.2, duration: 0.6, ease: 'easeOut'}}
        >
          <img
            src={mainImg}
            alt="main portrait illustration"
            className="w-full object-contain opacity-40 lg:opacity-100 max-h-[100dvh]"
          />
        </motion.div>

        {/* 하단 스크롤 인디케이터 */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 size-[150px] rounded-full [background:var(--color-bg-gradient)] pt-8 text-text-muted z-10">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-xs tracking-widest uppercase font-semibold">scroll</span>
            <ArrowIcon className="rotate-90 mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
