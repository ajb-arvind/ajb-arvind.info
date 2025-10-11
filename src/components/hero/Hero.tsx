import { cooperBTLight } from '@/app/layout';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { LinkButton } from '../ui/LinkButton';

export const Hero = () => {
  return (
    <article className="flex flex-col md:flex-row gap-4 px-4 mt-6 group">
      <div className="flex-none md:w-1/4 p-4 pb-0 md:p-0">
        <Image
          src="/image.png"
          width={280}
          height={280}
          alt="Profile of Arvind Badwar"
          className="w-full grayscale group-hover:filter-none transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex items-center flex-1">
        <p
          className={cn(
            'text-2xl md:text-[32px] leading-8',
            cooperBTLight.className
          )}
        >
          Helena is a designer, director, and writer with 15+ years experience
          building products, brands, and teams. Most recently, she managed the
          design team at <LinkButton href="">Medium</LinkButton>. She’s
          passionate about bridging brand and product, and crafting primitives
          (like <LinkButton href="">icons</LinkButton> and{' '}
          <LinkButton href="">fonts</LinkButton>) for the industry.
        </p>
      </div>
    </article>
  );
};
