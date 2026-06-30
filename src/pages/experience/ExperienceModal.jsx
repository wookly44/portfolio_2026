import Modal from '@/components/ui/Modal';
import Badge from '@/components/ui/Badge';

function ExperienceModal({project, onClose}) {
  if (!project) return null;

  return (
    <Modal onClose={onClose} closeStyle="ghost" scrollable className="p-6">
      {/* Header */}
      <div className="mb-4">
        {project.badge && <Badge size="sm">{project.badge}</Badge>}
        <h3 className="text-xl font-bold leading-tight mt-3">{project.title}</h3>
        <p className="text-xs text-text-muted mt-2">{project.period}</p>
      </div>
      {/* Content */}
      <div className="mb-6 pr-2 overflow-y-auto max-h-[60vh]">
        {project.image && (
          <div className="w-full h-50 border border-border rounded-xl overflow-hidden mb-4">
            <img
              src={project.image}
              alt={`${project.title} 프로젝트 미리보기`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = 'none';
              }}
            />
          </div>
        )}
        <p className="leading-relaxed text-text-muted text-sm mb-3 whitespace-pre-wrap">
          {project.detail}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              size="md"
              className="hover:bg-brand-active hover:text-text-inverse transition-base"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ExperienceModal;
