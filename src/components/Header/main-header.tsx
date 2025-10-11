import { LinkButton } from '../ui/LinkButton';
import { Separator } from '../ui/Separator';
import { Title } from './title';

export const MainHeader = () => {
  return (
    <div className="px-4">
      <header>
        <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between mb-8 md:mb-4">
          <div className="flex flex-col md:flex-row flex-1 items-center pr-0 md:pr-3">
            <div className="md:pr-3">
              <LinkButton href="/">Home</LinkButton>
            </div>
            <Separator className="my-4" />
          </div>
          <div className="py-2">
            <Title />
          </div>
          <div className="flex flex-col md:flex-row flex-1 items-center md:pl-3">
            <Separator className="my-4" />
            <div className="flex-1 flex items-center gap-2 md:pl-3">
              <LinkButton href="https://github.com/arvindbadwar">
                GitHub
              </LinkButton>
              <span>—</span>
              <LinkButton href="https://linkedin.com/in/arvindbadwar">
                LinkedIn
              </LinkButton>
              <span>—</span>
              <LinkButton href="https://twitter.com/arvindbadwar">
                Twitter
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="relative">
          <Separator className="h-1!" />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white border py-2 px-4">
            @ajb-arvind
          </div>
        </div>
      </header>
    </div>
  );
};
