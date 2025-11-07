import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';
import { Button } from '@/components/ui/button';
import { EMAIL, MAILTO, SOCIAL_LINK } from '@/lib/constant';
import Linkedin from '@/svg/linkedin.svg';
import Github from '@/svg/github.svg';
import Instagram from '@/svg/instagram.svg';
import X from '@/svg/x.svg';

export const Contact = () => {
  return (
    <section className="py-10 pb-10 bg-shark-50 border border-gray-400 mt-nav-height">
      <div>
        <h1
          className={cn(
            cooperBTLight.className,
            'mb-12 md:mb-20 tracking-tight md:text-center text-about-me px-4'
          )}
        >
          Let's collaborate!
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 divide-x divide-gray-300">
        <div className="px-4 md:px-16 order-2 lg:order-1">
          <div className="mb-20">
            <p
              className={cn(cooperBTLight.className, 'text-xl text-shark-500')}
            >
              Email
            </p>
            <p
              className={cn(cooperBTLight.className, 'text-skills text-start')}
            >
              {EMAIL}
            </p>
          </div>
          <div className="space-y-2">
            <p
              className={cn(cooperBTLight.className, 'text-xl text-shark-500')}
            >
              Social Links
            </p>
            <div className="flex flex-row gap-6 ">
              <a href={SOCIAL_LINK.github}>
                <Linkedin className="size-7" />
              </a>
              <a href={SOCIAL_LINK.github}>
                <Github className="size-7" />
              </a>
              <a href={SOCIAL_LINK.twitter}>
                <X className="size-7" />
              </a>
              <a href={SOCIAL_LINK.instagram}>
                <Instagram className="size-7" />
              </a>
            </div>
          </div>
        </div>
        <form className="space-y-6 px-4 md:px-16 order-1 lg:order-2">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full py-3 text-base border-b border-gray-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
            placeholder="Your Name"
          />
          <div className="space-y-1 w-full"></div>

          <div className="space-y-1">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full py-3 text-base border-b border-gray-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full py-3 text-base border-b border-gray-300 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
              placeholder="How can I help you?"
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-40 px-8 py-3 text-base">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
