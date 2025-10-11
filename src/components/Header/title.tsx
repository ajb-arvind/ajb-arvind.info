import { cooperBTLight } from '@/app/layout';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ className, ...props }: Props) => {
  return (
    <h1
      className={cn(
        cooperBTLight.className,
        'leading-8 text-2xl text-center',
        className
      )}
      {...props}
    >
      Arvind Badwar
    </h1>
  );
};
