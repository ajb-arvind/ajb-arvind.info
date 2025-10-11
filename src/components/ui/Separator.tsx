import { cn } from '@/lib/utils';

type Props = {
  orientation?: 'horizontal' | 'vertical';
} & React.HTMLAttributes<HTMLHRElement>;

export const Separator = ({
  orientation = 'horizontal',
  className,
  ...props
}: Props) => {
  return (
    <hr
      data-orientation={orientation}
      className={cn(
        'bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  );
};
