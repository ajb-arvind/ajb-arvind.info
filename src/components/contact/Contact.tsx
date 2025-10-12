import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Separator } from '../ui/Separator';
import { cooperBTLight } from '@/app/layout';
import { LinkButton } from '../ui/LinkButton';
import Link from 'next/link';
import { EMAIL, MAILTO } from '@/lib/constant';

export const Contact = () => {
  return (
    <section className="px-4">
      <div className="space-y-1.5 my-4">
        <Separator />
        <Separator />
      </div>
      <div className="h-48 bg-[#c5c5c5] relative hover:bg-[linear-gradient(135deg,#f7d14a,#e2c241)]">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
          <h2 className={cn(cooperBTLight.className, 'text-3xl leading-10')}>
            Let's build something great together.
          </h2>
          <div className="mt-4">
            <a href={MAILTO}>
              <Button>Chat with me</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
