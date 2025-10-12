import { SOCIAL_LINK } from '@/lib/constant';
import { LinkButton } from '../ui/LinkButton';
import { cn } from '@/lib/utils';

export const Social = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <LinkButton href={SOCIAL_LINK.github}>GitHub</LinkButton>
      <span>—</span>
      <LinkButton href={SOCIAL_LINK.linkedin}>LinkedIn</LinkButton>
      <span>—</span>
      <LinkButton href={SOCIAL_LINK.twitter}>X</LinkButton>
    </div>
  );
};
