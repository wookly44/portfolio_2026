import {GithubIcon, ExternalLinkIcon, ArrowIcon} from '@/components/ui/Icons';
import {CATEGORY_ICONS} from '@/data/projects';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

function FeaturedCard({project, onSelect}) {
  const cateIcon = CATEGORY_ICONS[project.category] ?? '🙋';

  return (
    <div className="group card mb-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
      {/* 썸네일 */}
      <div className="relative">
        <div className="flex max-h-[280px] lg:max-h-[380px] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} 프로젝트 스크린샷`}
            className="w-full h-full object-cover transition-base group-hover:scale-105"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <Badge variant="primary" size="md" className="absolute top-4 left-4">
          ★ Featured Project
        </Badge>
      </div>

      {/* 우: 정보 */}
      <div className="p-6 lg:p-8 flex flex-col gap-5 justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 lg:mb-4">
            <p className="card-type">{project.type}</p>
            <Badge variant="outline" size="md" className="hidden sm:block">
              {cateIcon}&nbsp;
              {project.category}
            </Badge>
          </div>
          <h3 className="card-tit mb-3">{project.title}</h3>
          <p className="card-txt flex-1 mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} size="sm">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="soft" size="sm">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Button as="a" href={project.github} external variant="outline" rounded="xs" size="md">
            <GithubIcon size="sm" />
            Code
          </Button>
          <Button as="a" href={project.live} external variant="outline" rounded="xs" size="md">
            <ExternalLinkIcon size="sm" />
            Live Demo
          </Button>
          <Button
            onClick={() => onSelect(project)}
            size="md"
            rounded="xs"
            fullWidth
            className="col-span-2 sm:col-span-1"
          >
            View Details <ArrowIcon size="sm" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
