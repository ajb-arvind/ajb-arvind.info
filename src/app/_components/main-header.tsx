import { cn } from '@/lib/utils';
import { cooperBTLight } from '../layout';

export const MainHeader = () => {
  return (
    <header className="px-4 md:px-title bg-transparent fixed inset-x-0 top-0 h-nav-height flex items-center z-100">
      <p
        className={cn(cooperBTLight.className, 'text-3xl font-bold text-white')}
      >
        AB
      </p>
    </header>
  );
};
