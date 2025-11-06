import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';

export const MainHeader = () => {
  return (
    <header className="px-4 md:px-20 bg-transparent fixed inset-x-0 top-0 h-nav-height flex items-center z-[1]">
      <p className={cn(cooperBTLight.className, 'text-3xl font-bold')}>AB</p>
    </header>
  );
};
