import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import Image from 'next/image';
import React from 'react';

export function Hero() {
  return (
    <section
      className={`mt-20 lg:mt-30 bg-[url(/hero-bg.svg)]  bg-no-repeat bg-cover lg:py-20`}
    >
      <div className="mb-4">
        <p className="tracking-tighter bg-amber-100 shadow w-fit py-1 px-2">
          Frontend Developer
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center relative">
        <div className="mx-10 my-10 lg:my-0">
          <p className={cn(cooperBTLight.className, ' text-lg')}>
            Hey there, I'm
          </p>
          <h1
            className={cn(cooperBTLight.className, '')}
            style={{
              fontSize: 'clamp(4rem, 10vw, 6rem)',
            }}
          >
            <span className="block">ARVIND</span>
            <span className="block">BADWAR</span>
          </h1>
          <p
            className={cn(cooperBTLight.className, '')}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            }}
          >
            I like to craft performant and scalable frontend products with great
            user experiences.
          </p>
        </div>

        <div className="max-w-[600px] aspect-[6/6]">
          <Image src="/hero2.png" alt="Hero Image" height={500} width={500} />
        </div>
      </div>
    </section>
  );
}
