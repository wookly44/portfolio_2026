import {EXPERIENCE_DATA} from '@/data/experience';
import {ExternalLinkIcon} from '@/components/ui/Icons';
import {motion, Stagger, fadeUp} from '@/components/ui/Motion';
import Badge from '@/components/ui/Badge';

function ExperienceCard({onSelect}) {
  return (
    <Stagger className="flex flex-col gap-2">
      {EXPERIENCE_DATA.map((project) => (
        <motion.button
          key={project.id}
          onClick={() => onSelect(project)}
          className="group card p-6 w-full flex-shrink-0 flex-between"
          variants={fadeUp}
          aria-label={`${project.title} 상세 보기`}
        >
          <div className="text-start">
            <h3 className="card-tit">{project.title}</h3>
            <span className="mt-1 text-xs font-medium text-brand">{project.period}</span>
            <p className="mt-2 card-txt">{project.desc}</p>
            <div className="flex gap-1 mt-2">
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
          <div className="w-[20px] flex justify-end">
            <ExternalLinkIcon size="sm" className="text-text-muted" />
          </div>
        </motion.button>
      ))}
    </Stagger>
  );
}

export default ExperienceCard;
