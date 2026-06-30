import {GithubIcon, ExternalLinkIcon} from '@/components/ui/Icons';
import {Stagger, StaggerItem} from '@/components/ui/Motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

function GridCard({projects, onSelect}) {
  return (
    <Stagger className="grid md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <StaggerItem key={project.id} className="group card flex flex-col h-full hover-lift">
          <div className="relative aspect-[2/1] overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={`${project.title} 프로젝트`}
              className="w-full h-full object-cover transition-base group-hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col flex-1 justify-between gap-4">
            <div className="flex-1">
              <span className="card-type mb-8">{project.type}</span>
              <h3 className="card-tit mb-2">{project.title}</h3>
              <p className="card-txt mb-4">{project.desc}</p>
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
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 border-t border-border">
              <Button
                as="a"
                href={project.github}
                external
                variant="outline"
                rounded="xs"
                size="md"
              >
                <GithubIcon size="sm" />
                Code
              </Button>
              <Button as="a" href={project.live} external variant="outline" rounded="xs" size="md">
                <ExternalLinkIcon size="sm" />
                Live
              </Button>
              <Button
                onClick={() => onSelect(project)}
                size="md"
                rounded="xs"
                fullWidth
                className="col-span-2 sm:col-span-1"
              >
                Details
              </Button>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default GridCard;
