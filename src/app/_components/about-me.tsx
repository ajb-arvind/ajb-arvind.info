import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import Skills from './skills';

const cards = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive, performant, and interactive UIs with modern JavaScript frameworks.',
    tools: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'UI & Styling',
    desc: 'Turning designs into sleek, accessible interfaces with precision and motion.',
    tools: ['Tailwind CSS', 'Framer Motion', 'Shadcn/UI', 'Figma'],
  },
  {
    title: 'Tools & Workflow',
    desc: 'Using the right tools to code faster, manage versions, and ship reliably.',
    tools: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code'],
  },
];

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
    <div id="about-me" className="bg-foreground">
      <div className="w-full overflow-x-clip text-shark-50">
        <div className="h-[15svh]"></div>
        <div className="app-padding min-h-[40svh]">
          <div className="border-b py-10 border-b-shark-900">
            <p
              className={cn(
                cooperBTLight.className,
                'text-sm lg:text-[1.5vw] text-center'
              )}
            >
              What I do
            </p>
          </div>
          <div className="space-y-8 text-center">
            <div
              className={cn(
                cooperBTLight.className,
                'leading-tight text-xl sm:text-4xl lg:text-[3.125vw] py-20'
              )}
            >
              I specialize in building web applications that are fast, reliable,
              and user-friendly. With a solid foundation in frontend, I help
              bring ideas to life.
            </div>
          </div>
        </div>
        <div className="h-[15svh]"></div>
      </div>
      <Skills />
    </div>
  );
};
