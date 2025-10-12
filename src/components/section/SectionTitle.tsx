import { cn } from '@/lib/utils';

const SectionTitleRoot = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'inline-flex items-center [&_svg]:shrink-0 has-[>svg]:px-2.5 group',
        className
      )}
      {...props}
    />
  );
};

const SectionTitle = ({ className, ...props }: React.ComponentProps<'h2'>) => {
  return (
    <h2
      data-slot="section-title"
      className={cn('ml-2 group-has-[>svg]:pt-0.5', className)}
      {...props}
    />
  );
};

export { SectionTitle, SectionTitleRoot };
