import { cn } from '@/lib/utils';
import Project from '@/svg/project.svg';

type SectionTitleProps = {
  title: string;
  icon?: React.ReactNode;
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export const SectionTitle = ({
  title,
  icon = <Project />,
  titleProps,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div className={cn('flex items-center', className)} {...props}>
      {icon}
      <h2 className={cn('ml-2 pt-0.5', titleProps?.className)} {...titleProps}>
        {title}
      </h2>
    </div>
  );
};
