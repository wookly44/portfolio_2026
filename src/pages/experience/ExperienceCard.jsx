import {EXPERIENCE_DATA} from '@/data/experience';
import {ExternalLinkIcon} from '@/components/ui/Icons';
import {motion, Stagger, fadeUp} from '@/components/ui/Motion';
import Badge from '@/components/ui/Badge';

function ExperienceCard({onSelect}) {
  return (
    <Stagger className="flex flex-col gap-4">
      {EXPERIENCE_DATA.map((project) => (
        <motion.button
          key={project.id}
          onClick={() => onSelect(project)}
          className="group card justify-between items-center p-6 w-full"
          variants={fadeUp}
          aria-label={`${project.title} 상세 보기`}
        >
          <div className="flex flex-col gap-2 text-left">
            <h3 className="card-tit">{project.title}</h3>
            <span className="text-sm text-text-muted font-mono">{project.period}</span>
            <p className="card-txt mt-1">{project.desc}</p>
            <div className="flex gap-1">
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
          <ExternalLinkIcon size="sm" className="text-text-muted hidden group-hover:block" />
        </motion.button>
      ))}
    </Stagger>
  );
}

export default ExperienceCard;
