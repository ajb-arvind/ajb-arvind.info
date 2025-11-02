import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import { Section } from './section';

const skills = [
  ['React', 'JavaScript', 'HTML', 'CSS'],
  ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
];

interface SkillRowProps {
  skills: string[];
  className?: string;
}

const SkillRow = ({ skills, className = '' }: SkillRowProps) => (
  <div
    className={cn(
      'grid grid-cols-2 md:grid-cols-4 w-full border-gray-200',
      '[&>div:nth-child(2n)]:border-r-0',
      'lg:[&>div:last-child]:border-r-0',
      'lg:[&>div:nth-child(2n)]:border-r',
      'lg:[&>div:nth-last-child(-n+4)]:border-b-0',
      className
    )}
  >
    {skills.map((skill, index) => (
      <div
        key={`${skill}-${index}`}
        className="border-r border-b border-gray-200 flex-1 text-center text-base sm:text-lg lg:text-xl flex items-center justify-center min-h-[100px]"
      >
        {skill}
      </div>
    ))}
  </div>
);

export const AboutMe = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-120px)]">
      <Section className="mt-20 lg:mt-30">
        <p
          className={cn(cooperBTLight.className, 'text-xl text-shark-500 mb-4')}
        >
          What I do
        </p>

        <div className="space-y-8">
          <div
            className={cn(cooperBTLight.className, 'leading-tight')}
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            I specialize in building web applications that are fast, reliable,
            and user-friendly. With a solid foundation in frontend, I help bring
            ideas to life.
          </div>
        </div>
        <div>
          <p
            className={cn(
              cooperBTLight.className,
              'text-xl text-shark-500 py-10'
            )}
          >
            With using
          </p>

          {skills.map((skillRow, index) => (
            <SkillRow
              key={`skill-row-${index}`}
              skills={skillRow}
              className={index === 0 ? 'border-t' : 'border-y'}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};
