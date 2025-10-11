import { cooperBTLight } from '@/app/layout';
import Image from 'next/image';
import ExternalLink from '@/svg/external-link.svg';
import { LinkButton } from '../ui/LinkButton';

export const SectionCard = () => {
  return (
    <article className="flex-1 group">
      <Image
        src="/card1.png"
        width={330}
        height={170}
        alt="Profile of Arvind Badwar"
        className="w-full grayscale group-hover:filter-none transition-all duration-300 ease-in-out"
      />
      <summary>
        <h3
          className={`${cooperBTLight.className} text-2xl leading-8 mt-4 mb-2`}
        >
          7 Principles of Icon Design
        </h3>
        <p>
          What makes quality icons? Clarity, readability, alignment, brevity,
          consistency, personality, and ease of use.
        </p>
        <div className="mt-4 flex items-center gap-2 [&_a]:pt-1">
          <ExternalLink />
          <LinkButton href="">Read on medium</LinkButton>
        </div>
      </summary>
    </article>
  );
};
