import {useState} from 'react';
import {EXPERIENCE_STATE} from '@/data/experience';
import {FadeLeft} from '@/components/ui/Motion';

import SectionHeader from '@/components/ui/SectionHeader';
import ExperienceCard from './ExperienceCard';
import ExperienceModal from './ExperienceModal';

function Experience() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="experience" className="section-py">
      <div className="inner">
        <SectionHeader number="03" label="Experience" />
        <div className="split lg:grid-cols-[2fr_3fr]">
          <FadeLeft>
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-desc">
              회사 보안 및 정책으로 인해 일부 프로젝트는 상세 내용을 공개할 수 없어 담당 업무와 사용
              기술, 배운 점 위주로 정리했습니다.
            </p>
            <ul className="flex gap-8 mt-8">
              {EXPERIENCE_STATE.map(({label, value}) => (
                <li key={label}>
                  <p className="text-3xl font-extrabold text-text-accent">{value}</p>
                  <span className="text-sm text-text-muted">{label}</span>
                </li>
              ))}
            </ul>
          </FadeLeft>

          <ExperienceCard onSelect={setSelectedProject} />
        </div>
      </div>

      {selectedProject && <ExperienceModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
}

export default Experience;
