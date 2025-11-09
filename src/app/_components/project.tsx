import { PROJECT_DATA } from '@/lib/constant';
import { cooperBTLight } from '../layout';
import { Section } from './section';
import { cn } from '@/lib/utils';

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
};

export const ProjectPart = ({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) => {
  return (
    <div className={cn('border', cooperBTLight.className)}>
      <div className="flex grid-cols-12 items-center justify-start text-about-me gap-x-4 text-left font-semibold md:grid md:justify-between md:gap-x-4">
        <span className="col-span-2">(0{index + 1})</span>
        <h3 className="col-span-8 col-start-6 py-8 2xl:py-10 text-h2">
          {project.title}
        </h3>
      </div>
      <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
        <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]">
          <p
            className="max-w-[40ch] text-balance font-medium text-shark-800"
            style={{
              fontSize: 'clamp(1.25rem,1.0359rem + 1.0707vi,1.9995rem)',
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <Section className="space-y-8 mt-nav-height pb-10 bg-background">
      <p className={cn(cooperBTLight.className, 'text-xl text-shark-500')}>
        I Build stuff
      </p>
      <div className="flex flex-col justify-between gap-y-16">
        {PROJECT_DATA.map((project, index) => (
          <ProjectPart key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};
