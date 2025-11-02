import { cn } from '@/lib/utils';

type Prop = React.ComponentProps<'div'>;

export const Section = ({ children, className, ...props }: Prop) => {
  return (
    <section
      {...props}
      className={cn(
        ' relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-200 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-200 after:-left-[100vw]',
        className
      )}
    >
      {children}
    </section>
  );
};
