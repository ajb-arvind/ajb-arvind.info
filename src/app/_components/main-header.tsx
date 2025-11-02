import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';

export const MainHeader = () => {
  return (
    <header className="px-4 lg:px-20 fixed inset-x-0 top-0 h-20 lg:h-30 flex items-center z-[1000]">
      <p className={cn(cooperBTLight.className, 'text-3xl font-bold')}>AB</p>
    </header>
  );
};
