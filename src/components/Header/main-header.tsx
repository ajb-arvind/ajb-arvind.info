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
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <button className="relative inline-flex items-center justify-start border py-2 px-4 overflow-hidden text-black transition-all duration-300 ease-in-out rounded bg-white group cursor-pointer">
              <span className="group-hover:block absolute left-0 h-full w-0 transition-all duration-300 ease-in-out bg-highlight group-hover:w-full"></span>
              <span className="relative w-full text-center">{EMAIL}</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

{
  /* <a
  href="#_"
  class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
>
  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
    Button Text
  </span>
</a>; */
}
