import {useState, useEffect, useRef} from 'react';

const GLITCH_CHARS = '!@#$%^&*[]{}|<>?/\\~`';
const TOTAL_FRAMES = 12; // 총 글리치 프레임 수
const FRAME_INTERVAL = 50; // 프레임 간격 (0.05초)
const START_DELAY = 1000; // 최초 시작 대기 시간 (1초)
const REPEAT_INTERVAL = 4000; // 🔥 반복 주기 (5초)

export default function GlitchText({text, className = '', as: Tag = 'span'}) {
  const [display, setDisplay] = useState(text);
  const glitchTimerRef = useRef(null);
  const loopTimerRef = useRef(null);

  useEffect(() => {
    const runGlitch = () => {
      let currentFrame = 0;
      if (glitchTimerRef.current) clearInterval(glitchTimerRef.current);

      glitchTimerRef.current = setInterval(() => {
        currentFrame++;
        const restoreCount = Math.floor((currentFrame / TOTAL_FRAMES) * text.length);
        let resultText = '';

        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            resultText += ' ';
          } else if (i < restoreCount) {
            resultText += text[i];
          } else {
            const randomIndex = Math.floor(Math.random() * GLITCH_CHARS.length);
            resultText += GLITCH_CHARS[randomIndex];
          }
        }

        setDisplay(resultText);

        if (currentFrame >= TOTAL_FRAMES) {
          setDisplay(text);
          clearInterval(glitchTimerRef.current);
        }
      }, FRAME_INTERVAL);
    };

    // 💡 진입 후 1초 뒤 최초 실행
    const startTimeout = setTimeout(() => {
      runGlitch();

      // 💡 최초 실행 직후, 5초마다 반복
      loopTimerRef.current = setInterval(() => {
        runGlitch();
      }, REPEAT_INTERVAL);
    }, START_DELAY);

    return () => {
      clearTimeout(startTimeout);
      if (loopTimerRef.current) clearInterval(loopTimerRef.current);
      if (glitchTimerRef.current) clearInterval(glitchTimerRef.current);
    };
  }, [text]);

  return <Tag className={`cursor-default select-none ${className}`}>{display}</Tag>;
}
