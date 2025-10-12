import { Separator } from '../ui/Separator';
import { Title } from './title';
import { Social } from './socials';
import { EMAIL } from '@/lib/constant';

export const MainHeader = () => {
  return (
    <div className="px-4">
      <header>
        <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between mb-8 md:mb-4">
          <div className="flex flex-col md:flex-row flex-1 items-center pr-0 md:pr-3">
            <div className="md:pr-3">
              <div className="flex-1 text-nowrap">
                🎵 listening to Tere Naina
              </div>
            </div>
            <Separator className="my-4" />
          </div>
          <div className="py-2">
            <Title />
          </div>
          <div className="flex flex-col md:flex-row flex-1 items-center md:pl-3">
            <Separator className="my-4" />
            <Social className="flex-1 md:pl-3" />
          </div>
        </div>
        <div className="relative">
          <Separator className="h-1!" />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white border py-2 px-4 cursor-pointer">
            {EMAIL}
          </div>
        </div>
      </header>
    </div>
  );
};
