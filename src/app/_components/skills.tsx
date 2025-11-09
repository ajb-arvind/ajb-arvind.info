'use client';
import React, { useRef } from 'react';
import { MotionValue, useScroll, useTransform, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
const projects = [
  {
    title: 'Core Frontend Development',
    description:
      'Building responsive, performant, and interactive UIs with modern JavaScript frameworks.',
  },
  {
    title: 'UI & Styling',
    description:
      'Turning designs into sleek, accessible interfaces with precision and motion.',
  },
  {
    title: 'Tools & Workflow',
    description:
      'Using the right tools to code faster, manage versions, and ship reliably.',
  },
];
export default function Skills() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div ref={container}>
      <div className="relative z-20 min-h-screen w-full overflow-x-clip">
        <section className="text-shark-50">
          <div className="sticky top-[15vh]">
            <p
              className={cn(
                cooperBTLight.className,
                'text-sm lg:text-[1.5vw] text-center my-10'
              )}
            >
              Skills
            </p>
          </div>
          <div className="grid gap-2 app-padding">
            {projects.map((p, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  project={p}
                  key={i}
                  index={i}
                  targetScale={targetScale}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

const Card = ({
  project,
  index,
  targetScale,
  range,
  progress,
}: {
  project: (typeof projects)[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="flex items-center justify-center sticky top-[20vh] h-[80vh]">
      <motion.div
        className="w-full flex flex-col relative h-full origin-top bg-foreground border-t border-shark-700"
        style={{
          scale,
          top: `${index * 120}px`,
        }}
      >
        <h2
          className={cn(
            'text-3xl sm:text-4xl lg:text-[3.125vw] text-center font-semibold py-10 mb-10',
            cooperBTLight.className
          )}
        >
          {project.title}
        </h2>
        <p
          className={cn(
            'text-xl lg:text-[1.75vw] text-center',
            cooperBTLight.className
          )}
        >
          {project.description}
        </p>
      </motion.div>
    </div>
  );
};
