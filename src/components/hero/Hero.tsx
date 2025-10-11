import { cooperBTLight } from '@/app/layout';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { LinkButton } from '../ui/LinkButton';

export const Hero = () => {
  return (
    <article className="flex flex-col md:flex-row gap-4 px-4 mt-6 group">
      <div className="flex-none md:w-1/4 p-4 pb-0 md:p-0">
        <Image
          src="/hero.png"
          width={280}
          height={280}
          alt="Profile of Arvind Badwar"
          className="w-full grayscale group-hover:filter-none transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex items-center flex-1">
        <p
          className={cn(
            'text-2xl md:text-[32px] leading-10',
            cooperBTLight.className
          )}
        >
          Arvind builds frontend developer with 3+ years in experience
          developing product. Most recently senior dev at{' '}
          <LinkButton href="">Finzome</LinkButton>. He ships web-based UI
          interfaces, reusable design systems, and performance wins that make
          products feel fast and reliable.
        </p>
      </div>
    </article>
  );
};
