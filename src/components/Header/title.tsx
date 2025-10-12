import { cooperBTLight } from '@/app/layout';
import { TITLE } from '@/lib/constant';
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
      {TITLE}
    </h1>
  );
};
