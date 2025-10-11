import { Separator } from '../ui/Separator';
import { SectionCard } from './SectionCard';
import { SectionTitle } from './SectionTitle';

export const ProjectSection = () => {
  return (
    <section className="px-4">
      <div className="space-y-1.5 my-4">
        <Separator />
        <Separator />
      </div>
      <SectionTitle title="Projects" className="mb-4" />
      <div className="flex mb-6 space-x-6 items-center">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </section>
  );
};
