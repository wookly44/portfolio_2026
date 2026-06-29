import {useState} from 'react';
import {PROJECT_DATA, PROJECT_FILTERS} from '@/data/projects';
import {FadeUp, FadeLeft} from '@/components/ui/Motion';

import SectionHeader from '@/components/ui/SectionHeader';
import FilterTabs from '@/components/ui/FilterTabs';
import FeaturedCard from './FeaturedCard';
import GridCard from './GridCard';
import ProjectModal from './ProjectModal';
import Button from '@/components/ui/Button';
import {ArrowIcon} from '@/components/ui/Icons';

const INITIAL_SHOW = 6;

function Projects() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    filter === 'All' ? PROJECT_DATA : PROJECT_DATA.filter((p) => p.category === filter);

  const isAll = filter === 'All';
  const featuredProject = isAll ? filtered[0] : null;
  const allGridProjects = isAll ? filtered.slice(1) : filtered;

  const visibleProjects = showAll ? allGridProjects : allGridProjects.slice(0, INITIAL_SHOW);

  const hasMore = allGridProjects.length > INITIAL_SHOW && !showAll;
  const remaining = allGridProjects.length - INITIAL_SHOW;

  const handleFilter = (category) => {
    setFilter(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section-py">
      <div className="inner">
        <SectionHeader number="02" label="Projects" />

        <div className="flex justify-between flex-col lg:flex-row lg:items-end gap-6 mb-10">
          <FadeLeft>
            <h2 className="section-title">Showcase of My Work</h2>
            <p className="section-desc">
              실제 프로젝트를 통해 보여드리는 문제 해결 능력과 개발 역량입니다.
            </p>
          </FadeLeft>
          <FilterTabs
            filters={PROJECT_FILTERS}
            active={filter}
            onChange={handleFilter}
            className="grid grid-cols-2 md:grid-cols-4"
          />
        </div>

        {featuredProject && (
          <FadeUp>
            <FeaturedCard project={featuredProject} onSelect={setSelectedProject} />
          </FadeUp>
        )}
        {visibleProjects.length === 0 ? (
          <FadeUp className="flex-center py-20 text-text-muted text-sm">
            해당 카테고리의 프로젝트가 없습니다.
          </FadeUp>
        ) : (
          <GridCard
            key={`${filter}-${showAll}`}
            projects={visibleProjects}
            onSelect={setSelectedProject}
          />
        )}

        {hasMore && (
          <FadeUp className="flex-center mt-10">
            <Button
              variant="outline"
              size="lg"
              rounded="lg"
              onClick={() => setShowAll(true)}
              className="hover-lift gap-2"
            >
              {remaining}개 더 보기
              <ArrowIcon size="sm" className="rotate-90" />
            </Button>
          </FadeUp>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Projects;
