import {GithubIcon, ExternalLinkIcon} from '@/components/ui/Icons';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const styles = {
  title: 'text-2xl font-bold text-text-inverse',
  subtitle: 'text-xs font-bold tracking-widest mb-3',
  content: 'text-sm text-text-muted leading-tight',
  metaLabel: 'text-label mb-0.5',
  metaValue: 'font-medium text-xs',
};

function ProjectModal({project, onClose}) {
  return (
    <Modal size="lg" onClose={onClose}>
      <div className="flex flex-col max-h-[85dvh] md:max-h-[680px]">
        {/* Header */}
        <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} 프로젝트 스크린샷`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="card-type">{project.type}</span>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto p-6 mr-1 space-y-6 smooth-scroll">
          <dl className="flex flex-wrap gap-6 text-text-muted">
            <div>
              <dt className={styles.metaLabel}>기간</dt>
              <dd className={styles.metaValue}>{project.readme.period}</dd>
            </div>
            <div>
              <dt className={styles.metaLabel}>역할</dt>
              <dd className={styles.metaValue}>{project.readme.role}</dd>
            </div>
          </dl>

          <div>
            <h4 className={styles.subtitle}>OVERVIEW</h4>
            <p className={styles.content}>{project.readme.overview}</p>
          </div>

          <div>
            <h4 className={styles.subtitle}>KEY FEATURES</h4>
            <ul className="space-y-2">
              {project.readme.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-brand" />
                  <span className={styles.content}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subtitle}>TECH STACK</h4>
            <p className={styles.content}>{project.readme.techDetail}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <Badge key={tag} size="md">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* links */}
        <div className="flex items-center justify-end gap-2 p-5 border-t border-border">
          {project.github && (
            <Button as="a" href={project.github} variant="outline" external>
              <GithubIcon size="xs" />
              Github
            </Button>
          )}
          {project.live && (
            <Button as="a" href={project.live} external>
              <ExternalLinkIcon size="xs" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;
