import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import Image from 'next/image';

const BlockTitle = () => {
  return (
    <>
      <div className="flex md:inline-flex">DEVELOPING</div>
      <div className="md:ml-4 flex md:inline-flex justify-center">
        THE DIGITAL
      </div>
      <div className="flex justify-end md:justify-center">EXPERIENCE</div>
    </>
  );
};

export function Hero() {
  return (
    <section className="mb-[-100svh] py-0">
      <div className="min-h-svh mb-10">
        <div className="h-full pt-[15vh] space-y-10">
          <div className="app-padding flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full text-start md:text-center space-y-2">
              <p
                className={cn(cooperBTLight.className, 'text-xl lg:text-[2vw]')}
              >
                Hey there, I'm Arvind Badwar
              </p>
              <h1
                className={cn(
                  cooperBTLight.className,
                  'text-nowrap leading-none text-[11vw] sm:text-[9vw] md:text-[6vw] lg:text-[5vw]'
                )}
              >
                <BlockTitle />
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] aspect-[105/100]">
              <Image
                src="/hero2.png"
                alt="Hero Image"
                height={600}
                width={600}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-svh"></div>
    </section>
  );
}
