import { cooperBTLight } from '@/app/layout';
import Image from 'next/image';
import ExternalLink from '@/svg/external-link.svg';
import { LinkButton } from '../ui/LinkButton';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  imageProps: React.ComponentProps<typeof Image>;
};

const Article = ({ className, ...props }: React.ComponentProps<'article'>) => {
  return <article {...props} className={cn('flex-1 group', className)} />;
};

const ArticleImage = ({
  className,
  ...props
}: React.ComponentProps<typeof Image>) => {
  return (
    <figure className="block relative pt-[56.25%] m-0 p-0">
      <Image
        className={cn(
          'absolute inset-0 w-full h-full object-cover grayscale group-hover:filter-none transition-all duration-300 ease-in-out',
          className
        )}
        {...props}
      />
    </figure>
  );
};

const ArticleSummary = ({
  className,
  ...props
}: React.ComponentProps<'summary'>) => {
  return <summary className={className} {...props} />;
};

const ArticleTitle = ({ className, ...props }: React.ComponentProps<'h3'>) => {
  return (
    <h3
      className={cn(
        cooperBTLight.className,
        'text-2xl leading-8 mt-4 mb-2',
        className
      )}
      {...props}
    />
  );
};

const ArticleDescription = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return <div className={className} {...props} />;
};

const ArticleFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return <div className={cn('mt-4', className)} {...props} />;
};

const ArticleLink = ({
  className,
  linkButtonProps,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  linkButtonProps: React.ComponentProps<typeof LinkButton>;
}) => {
  return (
    <div
      className={cn('flex items-center gap-2 [&_a]:pt-1', className)}
      {...props}
    >
      <ExternalLink />
      <LinkButton {...linkButtonProps}>{children}</LinkButton>
    </div>
  );
};

export {
  Article,
  ArticleImage,
  ArticleSummary,
  ArticleTitle,
  ArticleDescription,
  ArticleFooter,
  ArticleLink,
};
