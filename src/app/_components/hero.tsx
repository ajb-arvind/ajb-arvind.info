import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import Image from 'next/image';
import React from 'react';

export function Hero() {
  return (
    <section className="h-screen px-4 lg:px-20">
      <div
        className={`mt-nav-height bg-[url(/hero-bg.svg)] bg-no-repeat bg-cover relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-200 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-200 after:-left-[100vw]`}
      >
        <div className="lg:mb-4">
          <p className="tracking-tighter bg-amber-100 shadow w-fit py-1 px-2">
            Frontend Developer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center relative lg:py-10">
          <div className="mx-0 lg:mx-10 my-10 lg:my-0 space-y-2">
            <p className={cn(cooperBTLight.className, ' text-xl')}>
              Hey there, I'm
            </p>
            <h1
              className={cn(
                cooperBTLight.className,
                'text-balance text-heading leading-none'
              )}
            >
              <span className="block">ARVIND</span>
              <span className="block">BADWAR</span>
            </h1>
            <p className={cn(cooperBTLight.className, 'text-description')}>
              I like to craft performant and scalable frontend products with
              great user experiences.
            </p>
          </div>

          <div className="max-w-[600px] aspect-[6/6]">
            <Image src="/hero2.png" alt="Hero Image" height={500} width={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
