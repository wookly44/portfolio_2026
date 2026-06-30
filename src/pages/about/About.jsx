import {FadeUp, FadeLeft} from '@/components/ui/Motion';
import SectionHeader from '@/components/ui/SectionHeader';
import TechStack from './TechStack';
import SkillGrid from './SkillGrid';

function About() {
  return (
    <section id="about" className="section-py [background:var(--color-bg-gradient)]">
      <div className="inner">
        <SectionHeader number="01" label="About & Skills" />
        <div className="split lg:grid-cols-[2fr_3fr]">
          <FadeLeft>
            <h2 className="section-title">
              사용자 경험을 설계하는
              <span className="gradient-text">프론트엔드 개발자</span>
            </h2>
            <p className="section-desc">
              사용자 중심의 사고로 문제를 해결하고, 성능과 접근성, 유지보수성을 고려한 지속 가능한
              웹을 지향합니다.
            </p>
            <SkillGrid />
          </FadeLeft>
          <FadeUp>
            <TechStack />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export default About;
