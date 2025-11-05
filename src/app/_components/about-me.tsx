import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import { Section } from './section';

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
];

export const AboutMe = () => {
  return (
    <Section className="space-y-32 mt-nav-height">
      <div className="space-y-8">
        <p className={cn(cooperBTLight.className, 'text-xl text-shark-500')}>
          What I do
        </p>
        <div
          className={cn(cooperBTLight.className, 'leading-tight text-about-me')}
        >
          I specialize in building web applications that are fast, reliable, and
          user-friendly. With a solid foundation in frontend, I help bring ideas
          to life.
        </div>
      </div>
      <div className="space-y-8 py-10">
        <p className={cn(cooperBTLight.className, 'text-xl text-shark-500')}>
          With using
        </p>

        <div
          className={cn('bg-gray-300 overflow-hidden border border-gray-300')}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 text-skills gap-px">
            {skills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="p-6 bg-background text-center flex items-center justify-center min-h-[100px]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
